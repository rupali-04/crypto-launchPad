import SideBar from "../../components/SideBar";
import { Text,Flex,HStack,Avatar, Box, Button,Modal,ModalContent,Spacer,IconButton,ModalOverlay,ModalHeader,ModalCloseButton,ModalBody,ModalFooter, Divider, Center, Heading } from "@chakra-ui/react";
import {TiSocialLinkedin,TiSocialFacebook,TiSocialTwitter} from 'react-icons/ti';
import {FaTelegramPlane} from 'react-icons/fa';
import {AiOutlineGlobal} from 'react-icons/ai';

import { Link } from 'react-router-dom';
import DashboardNav from "../../components/DashboardNav";
import WalletDetails from "../../components/WalletDetails";
import { useDisclosure } from "@chakra-ui/react";
import { useState,useEffect } from "react";
import app from '../../firebaseDatabase';
import { collection, query, where, getDoc, getDocs  } from "firebase/firestore";
import {getFirestore,doc } from "firebase/firestore";
import { useSelector } from "react-redux";

const db = getFirestore(app);


const DashboardVenture = ({data}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [r1,setR1] = useState(false);
    const [loading,setLoading] = useState();
    const [investmentData,setInvestment] = useState([]);
    const [companyData,setCompany] = useState([]);
    const [bids,setBid] = useState([]);
    const [companyId,setId] = useState(-1);

    useEffect(()=>{
      setCompany([]);
      setInvestment([]);
      getData();
    },[data]);


    const getData = async() =>{
      setLoading(true);
     
      if(data){

          try{
            setInvestment([]);
            setCompany([]);
            console.log(data);
            data.ventureInvestment.map(async (e,i)=>{
              const investmentRef = collection(db, "investment");
              const companyRef = collection(db, "company");
              const biddingRef = collection(db, "Bidding");
              // Reference the specific document by its ID
              const documentRef = doc(investmentRef,e.investmentId);
              const companyDoc = doc(companyRef,e.companyId);
              const biddingDoc = doc(biddingRef,e.biddingId);
             
              // Reference the specific document by its ID
             
              
              // Retrieve the data from the document
              const d = await getDoc(documentRef);
              const c = await getDoc(companyDoc);
              const b = await getDoc(biddingDoc);

              console.log("sssss",d.exists(), c.exists(),b.exists());
                if(d.exists() && c.exists() && b.exists()){
                  console.log("Venture",d.data(),c.data(),b.data());
                  setInvestment([...investmentData,d.data()]);
                  setCompany([...companyData,c.data()]);
                  setBid([...bids,b.data()]);
                }else{
                  console.log("No Documents Found");
                  setLoading(false);
                }
             
              
            })
          
          }catch(err){
            console.log(err);
          }
        
      setLoading(false);
      console.log("end",data);
      }
    }

    
    let projectList = [];
    if(loading != true && investmentData.length > 0 && companyData.length > 0){
      console.log("investAir",investmentData,companyData);
      projectList = [];
     
     investmentData.map((e,i)=>{
      const t = <Box><Flex mt="0.5rem">
      <Box w="200px" textAlign={"center"} ><Button onClick={onOpen} variant={"none"} size={"md"} color="blue.400">{companyData[i].tokenName}</Button></Box>
      <Box w="200px" textAlign={"center"} mt="0.25rem"><Text>{bids[i].biddingValue} FTM</Text></Box>
      <Box w="200px" textAlign={"center"} mt="0.25rem"><Text>{bids[i].totalInvestment} FTM  </Text></Box>
      <Box w="200px" textAlign={"center"} mt="0.25rem"><Text>{companyData[i].TGE}% At TGE {companyData[i].cliffPeriod}% Per Month</Text></Box>
      <Box w="150px" textAlign={"center"} >{bids[i].status === "accepted" ? <Button borderRadius={"40"} variant={"link"} colorScheme="green" >Accepted</Button> : <Button borderRadius={"40"}  size="sm" colorScheme="blue">Claim Refund</Button>}</Box>
      <Box  textAlign={"center"} >{bids[i].status === "accepted" ? <Button borderRadius={"40"}  size="sm" colorScheme="blue">Claim Tokens</Button> : <Button borderRadius={"40"}  size="sm" colorScheme="blue">Claim Refund</Button>}</Box>
      
      </Flex>
      { bids[i].insuranceStatus === true ? 
      <Flex direction={"column"}>
      <Box w="max-content" bg="orange" p="0.5rem" color="white" fontWeight={"bold"} fontSize="16px" letterSpacing={1}> <Text>HONEY-BITE INSURANCE CLAIM DETAILS</Text></Box>
    <Flex fontWeight={"bold"} mt="1.5rem" textAlign={"center"}>
      <Text w="200px">Token Name</Text>
      <Text w="200px">Token Price</Text>
      <Text w="200px">Investment</Text>
      <Text w="200px">Claim percentage</Text>
      <Text w="200px">Claim Amount</Text>
      <Text >Claim Details</Text>
    </Flex>
    <Flex mt="1rem" textAlign={"center"}>
      <Text w="200px">{companyData[i].tokenName}</Text>
      <Text w="200px">{bids[i].biddingValue} FTM</Text>
      <Text w="200px">{bids[i].totalInvestment} FTM</Text>
      <Text w="200px">{companyData[i].insurancePercentage} %</Text>
      <Text w="200px">{bids[i].totalInvestment * companyData[i].insurancePercentage / 100} FTM</Text>
      <Button borderRadius={"40"}  size="sm" colorScheme="blue">Claim Token</Button>
    </Flex>
    </Flex> : ""
     }
    </Box>
      projectList.push(t);
     })
     console.log("pro",projectList);
    }else if( loading != true && investmentData.length === 0 && companyData.length === 0){
      console.log("dddd",investmentData.length,companyData.length);
      projectList.push(<Flex mt="1rem">No Venture investment</Flex>);
    }
    else{
      console.log("investmentData",investmentData);
      projectList.push(<Flex mt="1rem">Loading.....</Flex>);
    }
  


    return(<><p>
        <Flex p="2" flexWrap="wrap" justifyContent={"flex-start"}  >
        <Flex  justifyContent={"center"} direction="column">
          <Flex fontWeight={"bold"}>
                <Box w="200px" textAlign={"center"}><Text  >Token Name</Text></Box>
                <Box w="200px" textAlign={"center"}><Text > Bidding Price</Text></Box>
                <Box w="200px" textAlign={"center"}><Text >Investment</Text></Box>
                <Box w="200px" textAlign={"center"}><Text >Vesting</Text></Box>
                <Box w="150px" textAlign={"center"}><Text >View Status</Text></Box>
                <Box  textAlign={"center"}><Text >Claim Details</Text></Box>
                </Flex>
                <Divider mt="1rem" h="0.09rem"  bg={"black"}/>
                {loading != true && projectList.length > 0 ? projectList.map((e,i)=>{
      
                    console.log(e);
                    return e;
                  }) : "" }
                {/* <Flex mt="0.5rem">
                <Box w="200px" textAlign={"center"} ><Button onClick={onOpen} variant={"none"} size={"md"} color="blue.400">MUON NETWORK</Button></Box>
                <Box w="200px" textAlign={"center"} mt="0.25rem"><Text>0.002 FTM</Text></Box>
                <Box w="200px" textAlign={"center"} mt="0.25rem"><Text>12 FTM</Text></Box>
                <Box w="200px" textAlign={"center"} mt="0.25rem"><Text>20% At TGE, 3 Months Cliff, 6% Per Month</Text></Box>
                <Box w="150px" textAlign={"center"} ><Button borderRadius={"40"} variant={"link"} colorScheme="green" >Accepted</Button></Box>
                <Box  textAlign={"center"} ><Button borderRadius={"40"}  size="sm" colorScheme="blue">Claim Tokens</Button></Box>
                
                </Flex>
                <Flex mt="0.5rem">
                <Box w="200px" textAlign={"center"}><Button onClick={onOpen} variant={"none"} size={"md"} color="blue.400">UKIZZ</Button></Box>
                <Box w="200px" textAlign={"center"} mt="0.25rem"><Text>0.002 FTM</Text></Box>
                <Box w="200px" textAlign={"center"} mt="0.25rem"><Text>12 FTM</Text></Box>
                <Box w="200px" textAlign={"center"} mt="0.25rem"><Text>20% At TGE, 3 Months Cliff, 6% Per Month</Text></Box>
                <Box w="150px" textAlign={"center"} ><Button borderRadius={"40"} variant={"link"} colorScheme="red" >Canceled</Button></Box>
                <Box  textAlign={"center"} ><Button borderRadius={"40"}  size="sm" colorScheme="blue">Claim Refund</Button></Box>
               
                </Flex>*/}
                

</Flex>

    </Flex>
    <Modal closeOnOverlayClick={false} isOpen={r1} onClose={false} isCentered size={"3xl"}>
        <ModalOverlay bg={"blackAlpha.400"}/>
        <ModalContent bg="blue.400" color={"gray.100"} fontFamily={'Inter'}>
          <ModalHeader><Text fontSize={"12px"} textAlign="center" color={"gray.300"}>CONGRATULATIONS "USERNAME"</Text> </ModalHeader>
         
          <ModalBody pb={6}>
            <Flex direction={"column"}>
            <Flex>
            <Avatar size={"2xl"} m={"2"} name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
            <Flex direction={"column"}><Text fontWeight={"black"} fontSize="34px">MUON NETWORK</Text>  <Flex p="-2" gap="2">
          <IconButton
    bg={"white"}
    color="#333"
  
        mt="0.5rem"
  aria-label='website-icon'
  size='sm'
  
  icon={<AiOutlineGlobal />}
/> 
          <IconButton
   
    
    bg={"white"}
    color="#333"
    mt="0.5rem"
  aria-label='inkedin-icon'
  size='sm'
  
  icon={<TiSocialLinkedin />}
/> 
<IconButton
  
    
    bg={"white"}
    color="#333"
    mt="0.5rem"
  aria-label='twitter-icon'
  size='sm'
  icon={<TiSocialTwitter />}
/> 
<IconButton
   
   bg={"white"}
   color="#333"
    
   mt="0.5rem"
  aria-label='facebook-icon'
  size='sm'
  icon={<TiSocialFacebook />}
/> 
<IconButton
   
   bg={"white"}
   color="#333"
   size="sm"
   mt="0.5rem"
  
  aria-label='telegram-icon'
  
  icon={<FaTelegramPlane/>}
/></Flex>
</Flex>
</Flex>
<Text>Harmony Launcher is the world first decentralized launchpad to feature the concept of initial Game Offerings (IGO) & Initial Decentralized Exchange Offerings (IDO) on the Harmony Blockchain</Text>
         <Flex mt="0.5rem">
          <Text color={"gray.300"}>BIDDING STATUS:</Text>
          <Text ml="0.75rem">ACCEPTED</Text>
         </Flex>
         <Flex  >
          <Text color={"gray.300"}>BIDDING PRICE:</Text>
          <Text ml="0.75rem">0.02 FTM</Text>
         </Flex>
         <Flex  gap="4">
          <Text color={"gray.300"}>INVESTMENT AMOUNT:</Text>
          <Text>10,000 USDT</Text>
         </Flex>
          
         <Flex direction={"column"}>
          <Text color={"gray.300"}>INVESTMENT COUNTDOWN</Text>
          <Flex direction={"column"}><Flex><Heading >23:59:59</Heading><Spacer/><Box><Button w="350px" colorScheme={"blackAlpha"} borderRadius="40px">Invest Now</Button><Text fontSize={"10px"} color="gray.300" textAlign={"center"}>Invest minimum 60% amount of Investment amount [Bidding Amount]</Text></Box></Flex><Flex fontSize={"10px"} color="gray.300" gap="5" mt="-1rem"><Text>Hours</Text><Text>Minutes</Text><Text>Seconds</Text></Flex></Flex>
         </Flex>
            </Flex>
          
          </ModalBody>
          <Flex m="0.5rem" >
          <Text color={"gray.300"} mt="1rem" textAlign={"center"} w="800px">Honey-Bite Venture Investment</Text>
          
          <Spacer/>
            <Button onClick={()=>{setR1(false)}} w="max-content" borderRadius="40px" colorScheme="blackAlpha">Cancel</Button>
            </Flex>
                  </ModalContent>
      </Modal>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered size={"3xl"}>
        <ModalOverlay bg={"blackAlpha.400"}/>
        <ModalContent fontFamily={'Inter'}>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
           <Flex direction="column">
           <Box>
            <Flex gap={"20"}  >
                <Box ><Text color={"gray"}>Project Name</Text></Box>
                <Box ><Text color={"gray"}>Vesting Period</Text></Box>
                <Box ><Text color={"gray"}>Clame Prize</Text></Box>
            </Flex>
            <Divider mt="2" mb="2" mr="280" h="0.09rem" w="100" bg={"black"}/> 
            <Flex gap={"20"}>
                <Box ><Text fontWeight={"bold"} >MUON NETWORK</Text></Box>
                <Flex ml="-10" w={"90px"}><Text>10% at TGE, 3 months cliff, 6% per month</Text></Flex>
                <Box><Button borderRadius={"40"} ml="-1rem" colorScheme={"blue"} onClick={()=>{onClose();setR1(true)}}>Invest Now</Button></Box>
            </Flex>
            </Box>
           
           </Flex>
           <Box mt={"1rem"}>
            <Text fontWeight={"bold"} fontSize="22px">INVESTMENT COUNTDOWN</Text>
            
            <Heading size="4xl">23:59:59</Heading>
            
            <Flex>
              <Text w="90px" textAlign={"center"}>Hours</Text>
              <Text  w="100px" textAlign={"center"}>Minutes</Text>
              <Text  w="100px" textAlign={"center"}>Seconds</Text>
              <Button colorScheme={"blackAlpha"} mt="-1.2rem" ml="0.5rem" borderRadius="40">Add tokens to Metamask</Button>
            </Flex>
            
           </Box>
          </ModalBody>

          <ModalFooter>
          
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </p></>);
}

export default DashboardVenture