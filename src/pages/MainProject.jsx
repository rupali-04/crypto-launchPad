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
import {AiOutlineQuestionCircle} from "react-icons/ai";
import ProjectDetail from "../containers/Project/Project";
import ProjectAllocation from "../containers/Project/Allocation";
import ProjectMetrics from "../containers/Project/Metrics";
import { Pie } from "react-chartjs-2";
import { PieController } from "chart.js";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { useDisclosure } from "@chakra-ui/react";
import app from '../firebaseDatabase';
import { collection, query, where, getDocs } from "firebase/firestore";
import {getFirestore} from "firebase/firestore";
import { useLocation } from 'react-router-dom';

const db = getFirestore(app);

const MainProject = () => {
  const wallet = useSelector(state => state.wallet);
  const [selectIteam,setIteam] = useState("details");
  const [investmentAmount,setInvest] = useState(0);
  const [loading, setLoading] = useState(false);
  
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [d,setData] = useState({
    honeyBiteSmartContract: "",
    tokenSmartContract: "",
    tokenName: "",
    tokenSymbol: "",
    projectDetails: "",
    totalSupply: "",
    chainType: "",
    TGE: 0,
    cliffPeriod: 0,
    linearVestPeriod: "",
    kycRequirement: false,
    insurance: false,
    insuranceLock: 0,
    insuranceCharge: 0,
    commision: 0,
    serviceCharge: 0,
    socialMedia: {
        "Twitter": null,
        "Linkedin": null,
        "Youtube": null,
        "Website": null,
        "Instagram": null
    },
    insuranceLockTime: "",
    targetedRaise: 0,
    type: "IDO",
    companyId: "",
    fcfsOpen: "",
    fcfsClose: "",
    earlyAccess: false,
    swapRate: 0,
    totalRaise: 0,
    accessType: "",
    faq: [],
    teamMembers: "",
    teamPartners: "",
    tokenDistributionData: [],
    salesRound: ""
  });

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
  
  
  console.log(projectId);
  useEffect(() => {
    console.log("end");
    getData(projectId);   
    
   }, []);
  

  

const getData = async() => {
  try{
    setLoading(true);
    const companyRef = collection(db, "company");

    // Create a query against the collection.
    const q = query(companyRef, where("type", "==", "IDO"));
    let querySnapshot = null;
    querySnapshot = await getDocs(q);


  
  if (querySnapshot != null) {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      // setData(d);
      if(doc.id == projectId){
      d.honeyBiteSmartContract =  doc.data().honeyBiteSmartContract;
      d.tokenSmartContract =  doc.data().tokenSmartContract;
      d.tokenName =  doc.data().tokenName;
      d.tokenSymbol =  doc.data().tokenSymbol;
      d.projectDetails=  doc.data().projectDetails;
      d.totalSupply =  doc.data().totalSupply;
      d.chainType =  doc.data().chainType;
      d.targetedRaise = doc.data().targetedRaise;
      d.TGE =  doc.data().TGE;
      d.cliffPeriod =  doc.data().cliffPeriod;
      d.linearVestPeriod =  doc.data().linearVestPeriod;
      d.kycRequirement =  doc.data().kycRequirement      ;
      d.insurance =  doc.data().insurance;
      d.insuranceLock =  doc.data().insuranceLock;
      d.insuranceCharge =  doc.data().insuranceCharge;
      d.commision =  doc.data().commision;
      d.serviceCharge =  doc.data().serviceCharge;
      d.accessType = doc.data().accessType;
      d.insuranceLockTime =  doc.data().insuranceLockTime;
      d.type =  doc.data().type;
      d.companyId =  doc.id;
      d.fcfsOpen =  doc.data().fcfsOpen.toDate().toLocaleString();
      d.fcfsClose =  doc.data().fcfsClose.toDate().toLocaleString();
      d.earlyAccess =  doc.data().earlyAccess;
      d.swapRate =  doc.data().swapRate;
      d.totalRaise =  doc.data().totalRaise;
      d.totalToken =  doc.data().totalToken;
     
      d.teamMembers =  doc.data().teamMembers;
      d.teamPartners =  doc.data().teamPartners;
      
      d.salesRound =  doc.data().salesRound;
      setLoading(false);
      }

      console.log("Data",d);
      
    });
    setLoading(false);
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
  
  }catch(err){
    console.log(err);
  }
  
}


let dataList = null;
  if (loading) {
    dataList = <div>Loading....</div>;
  } else if(d.tokenName != "") {
    dataList = <Details data={d} />;
  } else{
    return <div>Please check the url</div>
  }
    return(<><div>
        
        <Flex fontFamily={'Inter'}><SideBar/>
        <Flex flexWrap={"wrap"} ml="3rem"  w="100%"  flexDirection={"column"}>
        <Flex >
       <Box ml="2rem"> {dataList}<Flex fontSize={"12"}><Text fontWeight={"bold"}  color={"#1F94FF"} >Total Raise {d.totalRaise} BNB</Text>  <Spacer /><Text>Targeted Raise {d.targetedRaise} BNB</Text></Flex><Progress size='lg' value={ (d.totalRaise/ d.targetedRaise) * 100} /> </Box>
       {isLoggedIn === false ? "" :  <Flex   w="100%" justifyContent={"center"} mt="1.5rem" ><Flex gap="4" flexWrap={"wrap"} ml="1rem"    flexDirection={"column"} ><Card shadow={"0"} bg="gray.200" borderRadius={"0"} w="max-content" h="max-content"><CardHeader><Flex alignItems={"center"} ><Text>Allocation Eligibility</Text><Button  bg="gray.200" borderRadius={"0"} >FCFS</Button><Button bg="gray.200">EA</Button><IconButton bg="gray.200" aria-label="icon" icon={<AiOutlineQuestionCircle/>}/></Flex> </CardHeader></Card>
       <Card h="max-content" w="max-content" bg="gray.200" borderRadius={"0px"}><CardBody><Flex direction={"column"}><Text fontWeight="bold" fontSize={"14px"} mb="0.5rem" textAlign="center">Available Balance : {`${ethers.utils.formatEther(balance)}`} BNB</Text><Flex> <Input bg="white" borderRadius={"0"} w="200px" variant='outline' onChange={(e)=>{setInvest(e.target.value)}}/><Button  onClick={onOpen} borderRadius={"0"} colorScheme={"blue"}>Invest Now</Button></Flex><Text color="gray" fontSize={"12px"} textAlign="center">Maximum Invest $2000*</Text></Flex></CardBody></Card></Flex>
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
                     
                     {selectIteam === "details" ? <ProjectDetail data={d}/> : selectIteam === "team" ? "" : selectIteam === "metrics" ? <ProjectMetrics/> : selectIteam === "allocation" ? <ProjectAllocation/> : ""}

                </Flex>

            </Box>
       </Flex>
</Flex>
{
  investmentAmount < balance && investmentAmount > 0 ? <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose} isCentered size={"xl"}>
  <ModalOverlay bg={"blackAlpha.400"}/>
    <ModalContent fontFamily={'Inter'} borderRadius="0">
      <ModalHeader></ModalHeader>
      <ModalCloseButton />
      <ModalBody pb={6} fontFamily={'Inter'}>
<Flex direction={"column"}>
<Flex w="100%" alignItems={"center"} justifyContent="center"><Heading  fontSize={"62px"} fontWeight="bold">{investmentAmount}</Heading><Text fontSize={"32px"} fontWeight={"black"} mt="1.5rem">BNB</Text></Flex>
<Flex w="100%" alignItems={"center"} justifyContent="center" mt="1rem" direction={"column"}><Checkbox w="300px" defaultChecked>1.5% Insurance Charge[Optional]</Checkbox><Checkbox w="300px" disabled defaultChecked>0.5% Service Charge</Checkbox></Flex>
<Flex  w="100%" alignItems={"center"} justifyContent="center"><Button colorScheme={"blue"} mt="2rem">Invest Now</Button></Flex>
<Flex  w="100%" alignItems={"center"} justifyContent="center" mt="2rem"><Text fontSize={"14px"} >Please Note: </Text><Text ml="0.5rem" fontSize={"14px"} color="gray"> Service charge is mandatory & Insurance charge is optional</Text></Flex>
</Flex>
        </ModalBody>
        <ModalFooter>
    
      </ModalFooter>
        </ModalContent>
  </Modal>
: ""
}
    
        </div>
        </>)
}

export default MainProject;