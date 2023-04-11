import SideBar from "../components/SideBar";
import { Flex,Box,Text,Progress,Spacer, Card, CardHeader, CardBody, Button,Input, IconButton,Divider,Modal,ModalOverlay
,ModalContent
,ModalHeader
,ModalCloseButton,
ModalBody,
ModalFooter, 
Heading,
Checkbox} from "@chakra-ui/react";
import { ethers } from "ethers";
import Details from "../containers/Project/Details";
import {BsWallet2} from "react-icons/bs";
import {AiFillLayout, AiOutlineQuestionCircle} from "react-icons/ai";
import ProjectDetail from "../containers/Project/Project";
import ProjectAllocation from "../containers/Project/Allocation";
import ProjectMetrics from "../containers/Project/Metrics";
import { Pie } from "react-chartjs-2";
import { PieController } from "chart.js";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { useDisclosure } from "@chakra-ui/react";
import { arrayUnion,Timestamp,increment} from "firebase/firestore";
import app from '../firebaseDatabase';
import { collection, query, where, getDoc,doc,addDoc ,updateDoc} from "firebase/firestore";
import {getFirestore} from "firebase/firestore";
import { useLocation } from 'react-router-dom';
import { IABI } from "../ABIs/IABI";

const db = getFirestore(app);

const MainProject = () => {
  const wallet = useSelector(state => state.wallet);
  const [selectIteam,setIteam] = useState("details");
  const [investmentAmount,setInvest] = useState(0);
  const [loading, setLoading] = useState(false);
  const [insuranceState,setInsurance] = useState(false);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [comapnyData,setCompany] = useState(null);
  const [userState,setUserState] = useState({
    kycStatus: false,
    membership: false
  });
 const [st,setSt] = useState(false);

  const location = useLocation();
  const projectId = new URLSearchParams(location.search).get('id');
 
  const [balance,setBalance] = useState(0);
  useEffect(()=>{

    async function bal() {
     const ba = await wallet.signer.getBalance();
     
      setBalance(ba);    
   console.log("balance:",balance); 
    
}
bal();
   },[wallet])
  
  

useEffect(()=>{
  getData();
},[])

const getData = async () =>{
setLoading(true);
try{
const collectionRef = collection(db, "company");

// Reference the specific document by its ID
const documentRef = doc(collectionRef,projectId);



// Retrieve the data from the document
const d = await getDoc(documentRef);
console.log(d);
  if(d.exists()){
    console.log("Venture",d.data());
    setCompany(d.data());
    setLoading(false);
  }else{
    console.log("No Documents Found");
    setLoading(false);
  }

}catch(err){
  console.log(err);
}
}

const saveToDB = async (tx) => {
  console.log("save t db");
 let iId = "";
 const allocationArray = []
 let p = 0;
 var dateValue = comapnyData.fcfsClose.toDate();



// Increment the date value by 1 month or 1 day using the setMonth() or setDate() method
 // increment by 1 month
// OR
console.log(p);
 while(p < 100){
  console.log(p);
  let t = {Allocation: 0,status: false,claimDate: 0,Percentage: 0};
  let tokens = investmentAmount / comapnyData.tokenPrice;
  if(comapnyData.linearVestPeriod === 'Day'){
    dateValue.setDate(dateValue.getDate() + 1);
   }else{
    dateValue.setMonth(dateValue.getMonth() + 1);
   }
  
 
  
  if(p===0){

    t.Allocation = tokens * comapnyData.TGE/100;
    t.Percentage = comapnyData.TGE;
    t.status = false;
    const d = dateValue;
    t.claimDate = Timestamp.fromDate(d);
    p = p + comapnyData.TGE;

  }else{
    t.Percentage = comapnyData.cliffPeriod;
    t.Allocation = tokens * comapnyData.cliffPeriod/100;
    const d = dateValue;
    t.claimDate = Timestamp.fromDate(d);
    t.status = false;
    p = p + comapnyData.cliffPeriod;
  }
  allocationArray.push(t);
  console.log(p,allocationArray);
 }
 let dbData = {
  companyId: projectId,
  insuranceStatus: insuranceState,
  tokenPrice: comapnyData.tokenPrice,
  totalClaimed: 0,
  totalHolding: investmentAmount,
  totalTokensHold: investmentAmount / comapnyData.tokenPrice,
  type: "IDO",
  userId: wallet.address,
  claimAllocation: allocationArray
 }
 if(allocationArray.length > 0){
  const investmentRef = await addDoc(collection(db, "investment"),dbData);
  const uRef = doc(db, "user",wallet.address);
  const cRef = doc(db, "company",projectId);
  await updateDoc(cRef,{
    totalRaise: increment(investmentAmount),
    totalTokensAvailable: increment(-(investmentAmount / comapnyData.tokenPrice))
  })

   await updateDoc(uRef,{
     ["totalIDOInvestment.Ethereum"] : increment(investmentAmount),
     idoInvestment : arrayUnion({
         'investmentId': investmentRef.id,
         'companyId': projectId
     })
   })
 
 }
} 

const getUserData = async()=>{
  const uRef = doc(db, "user",wallet.address);
  
  const d = await getDoc(uRef);
  console.log(d.data());
  let uS = {}
  if(d.data().kycStatus.kycStatus == "Active"){
    uS.kycStatus = true;
  }else{
    uS.kycStatus = false;
  }
  
  uS.membership = d.data().membershipStatus['IDO'].membershipStatus;
  setUserState(uS);
  console.log(userState,uS);
}


const handleInvestment = async (e) =>{
  // e.preventDefault();
 // console.log("eee",e);

 const IDOPurchase = new ethers.Contract(comapnyData.honeyBiteSmartContract, IABI, wallet.signer);
let privateKey = "0x5a188b93a4d239709fc8527012db2d0216fb127a6d17578dda348d321d0beb36"
let w = new ethers.Wallet(privateKey);
const timePeriod = Math.floor(new Date().getTime() / 1000.0);
const tTokens =  ethers.utils.parseEther(`${ investmentAmount / comapnyData.tokenPrice}`)

let t,cPrice,tt;
if(userState.membership === true){
  cPrice = 0;
  tt = investmentAmount;
}else{
  t = comapnyData.commision/100;
  t = t * investmentAmount;

  console.log(t,tTokens);
  tt = t + investmentAmount;
  cPrice = ethers.utils.parseEther(`${t}`); 

}
let pPrice = ethers.utils.parseEther(`${investmentAmount}`);
let tPPrice = ethers.utils.parseEther(`${tt}`);
let iPrice = 0;
if(insuranceState === false){
  iPrice = 0;
}else{
  // iPrice = (investmentAmount * comapnyData.insuranceCharge)/100;
  // iPrice = (iPrice + investmentAmount).toFixed(4);
  iPrice = comapnyData.insuranceCharge;
  console.log("ip",iPrice);
  let tempPrice = tt + iPrice;
  iPrice = ethers.utils.parseEther(`${iPrice}`);
  tPPrice = ethers.utils.parseEther(`${tempPrice}`);

  console.log("iPrice",iPrice);
}

   // console.log(comapnyData)
   

   //console.log("tP",tPPrice.toBigInt(),iPrice.toBigInt(),cPrice.toBigInt());

 const hashData = await IDOPurchase.getMessageHashForPurchase(
    wallet.address,
    comapnyData.tokenSmartContract,
    timePeriod,
    tTokens,
    iPrice,
    cPrice,
    pPrice
  );
  const messageHashBytes = ethers.utils.arrayify(hashData);
  const sign = await w.signMessage(messageHashBytes);
  
  try{
    
    let tx; 
    if(userState.membership === true && insuranceState == true){
      tx = await IDOPurchase.purchaseToken(wallet.address,comapnyData.tokenSmartContract, timePeriod,tTokens.toBigInt(),iPrice.toBigInt(),cPrice,pPrice.toBigInt(),sign,{ value: tPPrice});
    } else if(useState.membership === false && insuranceState === true){
      tx = await IDOPurchase.purchaseToken(wallet.address,comapnyData.tokenSmartContract, timePeriod,tTokens.toBigInt(),iPrice.toBigInt(),cPrice.toBigInt(),pPrice.toBigInt(),sign,{ value: tPPrice});
    }else if(userState.membership === true && insuranceState === false){
      tx = await IDOPurchase.purchaseToken(wallet.address,comapnyData.tokenSmartContract, timePeriod,tTokens.toBigInt(),iPrice,cPrice.toBigInt(),pPrice.toBigInt(),sign,{ value: tPPrice});
    }else{
      tx = await IDOPurchase.purchaseToken(wallet.address,comapnyData.tokenSmartContract, timePeriod,tTokens.toBigInt(),iPrice,cPrice,pPrice.toBigInt(),sign,{ value: tPPrice})
    }
    await tx.wait();
    console.log(tx);
    saveToDB(tx);
   setSt(true);
  }catch(err){
    console.log(err);
  }
   
  
   
}

let dataList = null;
if (loading) {
dataList = <div>Loading....</div>;
} else if( loading != true && comapnyData != null) {
dataList = <Details data={comapnyData} />;
} else{
return <div>Please check the url</div>
}
    return(<><div>
        
        <Flex fontFamily={'Inter'}><SideBar d={"ido"}/>
        <Flex flexWrap={"wrap"} ml="3rem"  w="100%"  flexDirection={"column"}>
        <Flex >
      {comapnyData != null ? <Box ml="2rem"> {dataList}<Flex fontSize={"12"}><Text fontWeight={"bold"}  color={"#1F94FF"} >Total Raise {comapnyData.totalRaise} FTM</Text>  <Spacer /><Text>Targeted Raise {comapnyData.targetedRaise} FTM</Text></Flex><Progress size='lg' value={ (comapnyData.totalRaise/ comapnyData.targetedRaise) * 100} /> </Box> : "" } 
       {isLoggedIn === false && comapnyData != null ? "" :  <Flex   w="100%" justifyContent={"center"} mt="1.5rem" ><Flex gap="4" flexWrap={"wrap"} ml="1rem"    flexDirection={"column"} ><Card shadow={"0"} bg="gray.200" borderRadius={"0"} w="max-content" h="max-content"><CardHeader><Flex alignItems={"center"} ><Text>Allocation Eligibility</Text><Button  bg="gray.200" borderRadius={"0"} >FCFS</Button><Button bg="gray.200">EA</Button><IconButton bg="gray.200" aria-label="icon" icon={<AiOutlineQuestionCircle/>}/></Flex> </CardHeader></Card>
       <Card h="max-content" w="max-content" bg="gray.200" borderRadius={"0px"}><CardBody><Flex direction={"column"}><Text fontWeight="bold" fontSize={"14px"} mb="0.5rem" textAlign="center">Available Balance : {`${ethers.utils.formatEther(balance)}`} FTM</Text><Flex> <Input bg="white" borderRadius={"0"} w="200px" variant='outline' onChange={(e)=>{
        
         
          
        setInvest(parseFloat(e.target.value))}}/><Button  onClick={()=>{getUserData(); onOpen();}} borderRadius={"0"} colorScheme={"blue"}>Invest Now</Button></Flex><Text color="gray" fontSize={"12px"} textAlign="center">Maximum Invest $2000*</Text></Flex></CardBody></Card></Flex>
       </Flex>
      }
       </Flex>
       <Box ml="2rem" mt="3rem">
        <Flex gap={"10"} >
                <Box textAlign={"center"}><Button variant={"unstyled"} color={selectIteam === "details" ? "#1F94FF" : "gray"} onClick={()=>{setIteam("details")}}  >Project Details</Button></Box>
                <Box textAlign={"center"}><Button variant={"unstyled"} color={selectIteam === "team" ? "#1F94FF" : "gray"} onClick={()=>{setIteam("team")}}>Team & Partners</Button></Box>
                <Box textAlign={"center"}><Button variant={"unstyled"} color={selectIteam === "metrics" ? "#1F94FF" : "gray"} onClick={()=>{setIteam("metrics")}}>Metrics</Button></Box>
                <Box textAlign={"center"}>{isLoggedIn === false ?  <Button variant={"unstyled"} color={"gray"} isDisabled>Your Allocation</Button>: <Button variant={"unstyled"} color={selectIteam === "allocation" ? "#1F94FF" : "gray"} onClick={()=>{setIteam("allocation")}}>Your Allocation</Button>}</Box>
                
                </Flex><Divider h="0.095rem" mt="0.5rem" bg={"black"}/>
                <Flex gap={"10"} mt="0.5rem">
                    {/* <ProjectDetail/> */}
                    {/* <ProjectAllocation/>  */}
                     
                     {selectIteam === "details" && comapnyData != null ? <ProjectDetail data={comapnyData}/> : selectIteam === "team" && comapnyData != null ? "" : selectIteam === "metrics" && comapnyData != null ? <ProjectMetrics/> : selectIteam === "allocation" && comapnyData != null ? <ProjectAllocation data={projectId}/> : ""}

                </Flex>

            </Box>
       </Flex>
</Flex>
{
  investmentAmount < parseFloat(balance) && investmentAmount > 0 ? <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose} isCentered size={"xl"}>
  <ModalOverlay bg={"blackAlpha.400"}/>
    <ModalContent fontFamily={'Inter'} borderRadius="0">
      <ModalHeader></ModalHeader>
      <ModalCloseButton />
      <ModalBody pb={6} fontFamily={'Inter'}>
      {/* <Text>{userState.membershipStatus}</Text><Text>{userState.kycStatus}</Text> */}

<Flex direction={"column"}>
<Flex w="100%" alignItems={"center"} justifyContent="center"><Heading  fontSize={"62px"} fontWeight="bold">{insuranceState === true && userState.membership === false ? (investmentAmount+investmentAmount*comapnyData.commision/100 + comapnyData.insuranceCharge).toFixed(6) : insuranceState === false && userState.membership === false ? (investmentAmount+investmentAmount*comapnyData.commision/100).toFixed(6) : insuranceState === false && userState.membership === true ? (investmentAmount).toFixed(6) : (investmentAmount + comapnyData.insuranceCharge).toFixed(6) }</Heading><Text fontSize={"32px"} fontWeight={"black"} mt="1.5rem">FTM</Text></Flex>
{comapnyData.insurance === true ? <Flex w="100%" alignItems={"center"} justifyContent="center" mt="1rem" direction={"column"}><Checkbox w="300px" onChange={(e)=>{setInsurance(e.target.checked)}} >{comapnyData.insuranceCharge} Insurance Charge[Optional]</Checkbox>{ userState.membership === false ? <Checkbox w="300px" disabled defaultChecked>{comapnyData.commision}% Service Charge</Checkbox> : ""}</Flex>:<Flex w="100%" alignItems={"center"} justifyContent="center" mt="1rem" direction={"column"}>{userState. membership === false ? <Checkbox w="300px" disabled defaultChecked>{comapnyData.commision}% Service Charge</Checkbox> : ""}</Flex>}
<Flex  w="100%" alignItems={"center"} justifyContent="center"><Button colorScheme={"blue"} mt="2rem" onClick={(e)=>{
  alert(userState.membership);
      if((comapnyData.kycRequirement === userState.kycStatus || comapnyData.kycRequirement === false) &&  ((comapnyData.accessType === "Private" && userState.membership === true) || comapnyData.accessType === "Public")){
        handleInvestment(e);
      }
      else{
        if(userState.kycStatus != comapnyData.kycRequirement || comapnyData.kycRequirement === false){
          alert("You need to complete your KYC and wait for verification");
        }else{
          alert("To invest in this project need a membership");
        }
        
      }
  }}>Invest Now</Button></Flex>
<Flex  w="100%" alignItems={"center"} justifyContent="center" mt="2rem"><Text fontSize={"14px"} >Please Note: </Text><Text ml="0.5rem" fontSize={"14px"} color="gray"> Service charge is mandatory & Insurance charge is optional</Text></Flex>
</Flex>
        </ModalBody>
        <ModalFooter>
    
      </ModalFooter>
        </ModalContent>
  </Modal>
: console.log(investmentAmount)
}
<Modal closeOnOverlayClick={true} isOpen={st} onClose={()=>{onClose(); setSt(false)}} isCentered size={"xl"}>
<ModalOverlay bg={"blackAlpha.400"}/>
    <ModalContent fontFamily={'Inter'} borderRadius="0">
      <ModalHeader></ModalHeader>
      <ModalCloseButton />
      <ModalBody pb={6} fontFamily={'Inter'}>
        <Flex>Congratulations, You have Invested {investmentAmount}.</Flex>
        </ModalBody>
        <ModalFooter>
    
      </ModalFooter>
        </ModalContent>
  </Modal>

        </div>
        </>)
}

export default MainProject;