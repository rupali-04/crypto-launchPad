import SideBar from "../components/SideBar";
import { Flex,Box,Text,Progress,Spacer, Card, CardHeader, CardBody, Button,Input,Heading, IconButton,Divider,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,Checkbox,ModalFooter } from "@chakra-ui/react";
import Details from "../containers/Project/Details";
import {BsSliders, BsWallet2} from "react-icons/bs";
import {AiOutlineQuestionCircle} from "react-icons/ai";
import VentureProjectDetail from "../containers/Project/VentureProjectDetail";
import ProjectAllocation from "../containers/Project/Allocation";
import ProjectMetrics from "../containers/Project/Metrics";
import { Pie } from "react-chartjs-2";
import { PieController } from "chart.js";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProjectBid from "../containers/Project/Bid";
import { useSelector } from "react-redux";
import { ethers } from "ethers";  
import { useDisclosure } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import app from '../firebaseDatabase';
import { collection, query, where, getDoc,addDoc,doc } from "firebase/firestore";
import {getFirestore} from "firebase/firestore";
import { VABI } from "../ABIs/VABI";


const db = getFirestore(app);


const VentureProject = () => {
    const [selectIteam,setIteam] = useState("details");
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const [loading,setLoading] = useState(true);
    const [comapnyData,setCompany] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const location = useLocation();
    const projectId = new URLSearchParams(location.search).get('id');
    const wallet = useSelector(state => state.wallet);
    const [balance,setBalance] = useState(0);
    const [bidAmount,setBidAmount] = useState(0);
    const [bidPrice,setBidPrice] = useState(0);
    const [insuranceState,setInsuranceState] = useState(false);
    const [userState,setUserState] = useState({
      kycStatus: false,
      membership: false
    });

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
  try{

  
  const insertData = {
    biddingValue: bidPrice,
    companyId: projectId,
    insuranceStatus: insuranceState,
    status: "Pending",
    totalInvestment: bidAmount,
    totalTokensBids: bidAmount / bidPrice,
    userId: wallet.address
  }
  const bidRef = await addDoc(collection(db, "Bidding"),insertData);
  console.log("bidRef",bidRef);
}catch(err){
  console.log(err);
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
  
  uS.membership = d.data().membershipStatus['Venture'].membershipStatus;
  setUserState(uS);
  console.log(userState,uS);
}
   const handleInvestment = async() =>{
    
    const VentureBid = new ethers.Contract(comapnyData.honeyBiteSmartContract, VABI, wallet.signer);
    console.log(VentureBid);
    let privateKey = "0x5a188b93a4d239709fc8527012db2d0216fb127a6d17578dda348d321d0beb36"
    let w = new ethers.Wallet(privateKey);
    const timePeriod = Math.floor(new Date().getTime() / 1000.0);
    const tTokens =  ethers.utils.parseEther(`${ bidAmount / bidPrice}`);
    let comissionAmt;
    let pPrice,iPrice;
    pPrice = parseFloat(bidAmount);
    console.log('pp',pPrice);
    if(userState.membership === true){
      comissionAmt = 0;
    
    }else{
    
      console.log(pPrice);
      comissionAmt = (parseFloat(bidAmount) * comapnyData.comissionPrice / 100);
      pPrice = pPrice + comissionAmt;
    }
    if(insuranceState === false){
      iPrice = 0;
    }else{
      // iPrice = (investmentAmount * comapnyData.insuranceCharge)/100;
      // iPrice = (iPrice + investmentAmount).toFixed(4);
      iPrice = comapnyData.insuranceCharge;
      pPrice = pPrice + iPrice;
    
      console.log("iPrice",iPrice,pPrice);
    }
    
    
     
    console.log(insuranceState,pPrice);
    
      
    pPrice = ethers.utils.parseEther(`${pPrice}`);  
    
    const hashData = await VentureBid.getMessageHashForBid(
      wallet.address,
      comapnyData.tokenSmartContract,
      timePeriod,
      tTokens,
      pPrice
    );
    const messageHashBytes = ethers.utils.arrayify(hashData);
    const sign = await w.signMessage(messageHashBytes);
    console.log(sign)
    try{
      console.log(wallet.address,comapnyData.tokenSmartContract,timePeriod,tTokens.toBigInt(),pPrice.toBigInt(),sign);
       const tx = await VentureBid.bidToken(wallet.address,comapnyData.tokenSmartContract, timePeriod,tTokens.toBigInt(),pPrice.toBigInt(),sign,{ value: pPrice})
      await tx.wait();
       console.log(tx);
       saveToDB(tx);
       onClose();  
        alert("Congratulations Your Bid is Registred!!");
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
        
        <Flex fontFamily={'Inter'}><SideBar d={"venture"}/>
        <Flex  flexWrap={"wrap"} flexDirection={"column"}>
        <Flex ml="2rem">
      {comapnyData != null ? <Box > {dataList} <Flex fontSize={"12"} ><Text fontWeight={"bold"}  color={"#1F94FF"}>Total Raise {comapnyData.totalTokenInvested} FTM</Text>  <Spacer /><Text>Targeted Raise {comapnyData.targetedAmount} FTM</Text></Flex><Progress size='lg' value={ (comapnyData.totalTokenInvested/ comapnyData.targetedAmount) * 100} /> </Box> : ""} 
      
       {isLoggedIn != false && comapnyData != null ?  <Flex alignContent={"center"}  w="100%" justifyContent={"end"}  alignItems="center" mt="1.5rem" ><Flex gap="4" flexWrap={"wrap"} ml="1rem"    flexDirection={"column"} ><Card fontWeight={"bold"} bg="lightgray" borderRadius={"0"} shadow="0" w="360px" h="max-content"><CardHeader><Flex mt="1rem" gap="1"><Text>NO OF BID: {comapnyData.totalBids} </Text><Text> | </Text><Text>ACCEPT BID: {comapnyData.acceptedBids}</Text><IconButton mt="-0.5rem" aria-label="icon" bg="lightgray" icon={<AiOutlineQuestionCircle/>}/></Flex> </CardHeader></Card>
       <Card h="max-content"  bg="lightgray" borderRadius={"0"}><CardBody><Flex direction={"column"}><Text fontWeight="bold" fontSize={"16px"} textAlign="center">Available Balance : {parseFloat(ethers.utils.formatEther(balance)).toFixed(6)} FTM </Text><Flex> <Input bg="white" borderRadius={"0"} placeholder="BIDDING PRICE" onChange={(e)=>{setBidPrice(e.target.value)}} _placeholder={{ fontSize: '8px' }} borderLeft="black" w="100px" variant='outline' /><Input bg="white" placeholder="BIDDING AMOUNT" onChange={(e)=>{setBidAmount(e.target.value)}} _placeholder={{ fontSize: '8px' }} borderRadius={"0"} w="100px" variant='outline' /><Button borderRadius={"0"} onClick={()=>{getUserData(); onOpen();}} colorScheme={"blue"}>PLACE BID</Button></Flex><Text textAlign={"center"} color="gray" fontSize={"12px"}>Bid vaild only for 14 working days*</Text></Flex></CardBody></Card></Flex>
       </Flex> : ""
      }
      
       </Flex>
       <Box ml="2rem" mt="3rem">
        <Flex gap={"10"} >
        <Box textAlign={"center"}><Button variant={"unstyled"} color={selectIteam === "details" ? "#1F94FF" : "gray"} onClick={()=>{setIteam("details")}}  >Project Details</Button></Box>
                <Box textAlign={"center"}><Button variant={"unstyled"} color={selectIteam === "team" ? "#1F94FF" : "gray"} onClick={()=>{setIteam("team")}}>Team & Partners</Button></Box>
                <Box textAlign={"center"}><Button variant={"unstyled"} color={selectIteam === "metrics" ? "#1F94FF" : "gray"} onClick={()=>{setIteam("metrics")}}>Metrics</Button></Box>
                <Box textAlign={"center"}>{isLoggedIn === false ?  <Button variant={"unstyled"} color={"gray"} isDisabled>Your Allocation</Button>: <Button variant={"unstyled"} color={selectIteam === "allocation" ? "#1F94FF" : "gray"} onClick={()=>{setIteam("allocation")}}>Your Allocation</Button>}</Box>
                <Box textAlign={"center"}>{isLoggedIn === false ?  <Button variant={"unstyled"} color={"gray"} isDisabled>Your Bid</Button>: <Button variant={"unstyled"} color={selectIteam === "allocation" ? "#1F94FF" : "gray"} onClick={()=>{setIteam("bid")}}>Your Bid</Button>}</Box>
                
                </Flex><Divider h="0.095rem" mt="0.5rem" bg={"black"}/>
                <Flex gap={"10"} mt="0.5rem">
                   
                     {selectIteam === "details" && comapnyData != null ? <VentureProjectDetail key={projectId} data={comapnyData}/> : selectIteam === "team" ? "" : selectIteam === "metrics" && comapnyData != null ? <ProjectMetrics/> : selectIteam === "allocation" && comapnyData != null ? <ProjectAllocation data={projectId}/> : selectIteam === "bid" && comapnyData != null ? <ProjectBid data={projectId}/> : ""} 
                </Flex>

            </Box>
       </Flex>
</Flex>
{ bidAmount > 0 && bidPrice > 0 && bidAmount > comapnyData.minBidValue && bidPrice >= comapnyData.minBidPrice ?
<Modal closeOnOverlayClick={true} isOpen={isOpen} onOverlayClick={onClose} isCentered size={"xl"} p="0">
      <ModalOverlay bg={"blackAlpha.400"}/>
        <ModalContent  borderRadius="0" p="0" >
    
        
          <ModalBody p={0} fontFamily={'Inter'}>
            <Flex justifyContent={"space-evenly"} bg="#AEAEB0" p="1rem">
              
              <Flex direction={"column"} fontWeight={"bold"}><Text>BIDDING PRICE</Text><Flex color="white"><Text  fontSize="42px">{bidPrice}</Text><Text mt="1.75rem">FTM</Text></Flex></Flex>
              <Flex direction={"column"} fontWeight={"bold"}><Text>BIDDING AMOUNT</Text><Flex color="white"><Text  fontSize="42px">{bidAmount}</Text><Text mt="1.75rem">FTM</Text></Flex></Flex>
              <Flex fontWeight={"bold"} direction={"column"}><Text>NO OF TOKEN</Text><Flex color="white"><Text  fontSize="42px">{(bidAmount/bidPrice).toFixed(2)}</Text><Text mt="1.75rem">{comapnyData.tokenSymbol}</Text></Flex></Flex>
              </Flex>
<Flex direction={"column"}>
<Flex w="100%" alignItems={"center"}  direction={"column"}><Text mt="0.5rem" fontWeight={"bold"}>TOTAL AMOUNT</Text><Flex w="100%" alignItems={"center"} justifyContent="center"><Heading  fontSize={"62px"} fontWeight="bold"></Heading><Text fontSize={"32px"} fontWeight={"black"} mt="1.5rem">{ insuranceState === true && userState.membership === false ?  (parseFloat(bidAmount) + (comapnyData.comissionPrice / 100 * parseFloat(bidAmount)) + (comapnyData.insuranceCharge)).toFixed(6) : insuranceState === true && userState.membership === true ?  (parseFloat(bidAmount) + (comapnyData.insuranceCharge)).toFixed(6) : insuranceState === false && userState.membership === true ? parseFloat(bidAmount).toFixed(6) : insuranceState === false && userState.membership === false  ? (parseFloat(bidAmount) + (comapnyData.comissionPrice / 100 * parseFloat(bidAmount))).toFixed(6) : ""} FTM</Text></Flex></Flex>
<Flex w="100%" alignItems={"center"} justifyContent="center" mt="1rem" direction={"column"}><Checkbox w="300px" onChange={(e)=>{setInsuranceState(e.target.checked)}} >{comapnyData.insuranceCharge} % Insurance Charge[Optional]</Checkbox><Checkbox w="300px" disabled defaultChecked>{comapnyData.comissionPrice} % Service Charge</Checkbox></Flex>
<Flex  w="100%" alignItems={"center"} justifyContent="center"><Button onClick={(e)=>{
 if((comapnyData.kycRequirement === userState.kycStatus || comapnyData.kycRequirement === false) &&  ((comapnyData.accessType === "Private" && userState.membership === true) || comapnyData.accessType === "Public")){
  handleInvestment(e);
}else{
  if(userState.kycStatus != comapnyData.kycRequirement || comapnyData.kycRequirement === false){
    alert("You need to complete your KYC and wait for verification");
  }else{
    alert("To invest in this project need a membership");
  }
  
}
}} colorScheme={"blue"} mt="2rem">Invest Now</Button></Flex>
<Flex  w="100%" alignItems={"center"} justifyContent="center" mt="2rem"><Text fontSize={"14px"} >Please Note: </Text><Text ml="0.5rem" fontSize={"14px"} color="gray"> Service charge is mandatory & Insurance charge is optional</Text></Flex>
</Flex>
            </ModalBody>
            <ModalFooter>
        
          </ModalFooter>
            </ModalContent>
      </Modal>

    : ""}    </div>
        </>)
}

export default VentureProject;