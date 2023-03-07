import SideBar from "../../components/SideBar";
import { Text,Flex,HStack, Box, Button,Modal,ModalContent,ModalOverlay,ModalHeader,ModalCloseButton,ModalBody,ModalFooter } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react";
import DashboardNav from "../../components/DashboardNav";
import WalletDetails from "../../components/WalletDetails";
import { useDisclosure } from "@chakra-ui/react";
import app from '../../firebaseDatabase';
import { collection, query, where, getDoc, getDocs  } from "firebase/firestore";
import {getFirestore,doc } from "firebase/firestore";
import { useSelector } from "react-redux";



const db = getFirestore(app);

const IDOPage = ({data}) => {
  const wallet = useSelector(state => state.wallet);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [loading,setLoading] = useState();
    const [investmentData,setInvestment] = useState([]);
    const [companyData,setCompany] = useState([]);
    

    useEffect(()=>{
      getData();
    },[data]);


    const getData = async() =>{
      setLoading(true);
     
      if(data){

          try{
            data.idoInvestment.map(async (e,i)=>{
              const investmentRef = collection(db, "investment");
    
              // Reference the specific document by its ID
              const documentRef = doc(investmentRef,e.investmentId);
              const companyRef = collection(db, "company");
              console.log("ee",e.investmentId.split(" "),e.companyId.split);  
              // Reference the specific document by its ID
              const companyDoc = doc(companyRef,e.companyId);
              
              // Retrieve the data from the document
              const d = await getDoc(documentRef);
              const c = await getDoc(companyDoc);
              console.log("sssss",d.exists(), c.exists(),e);
                if(d.exists() && c.exists()){
                  console.log("Venture",d.data(),c.data());
                  setInvestment([...investmentData,d.data()]);
                  setCompany([...companyData,c.data()]);
                 
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

    
    let projectList;
    if(loading != true && investmentData.length > 0 && companyData.length > 0){
      console.log("invest",investmentData,companyData);
      projectList =  <HStack  w={"max-content"} h={"max-content"} textAlign="center"  >
  <Box w="150px" pt="2"><Button onClick={onOpen} variant={"none"} size={"sm"} color="blue.400">{companyData[0].tokenName}</Button></Box> 
  <Box w="150px"><Text pt="4" size={"sm"}>{investmentData[0].tokenPrice} FTM</Text></Box>
  <Box w="150px"><Text pt="4" size={"sm"}>{investmentData[0].totalHolding} FTM</Text></Box>
  <Box w="150px"><Text pt="4"  size={"sm"}>{investmentData[0].totalTokensHold}</Text></Box>
  <Box w="150px"><Text pt="4" size={"sm"}>{investmentData[0].totalClaimed}%</Text></Box>
  <Box w="250px"><Box pt="2"><Button size={"sm"}  colorScheme="blackAlpha">Add</Button></Box></Box>
  </HStack>
    }else if( loading != true && investmentData.length === 0 && companyData.length === 0){
      console.log("dddd",investmentData.length,companyData.length);
      projectList = <Flex mt="1rem">No IDO investment</Flex>;
    }
    else{
      console.log("investmentData",investmentData);
      projectList = <Flex mt="1rem">Loading......</Flex>;
    }
    
   
    return(<><p>
     <Flex p="4"  flexWrap="wrap" justifyContent={"flex-start"}  >
      <HStack  w={"max-content"} h={"max-content"} textAlign="center"  >
  
  <Box w="150px"><Text fontWeight={"bold"} size={"sm"}>Project Name</Text></Box> 
  <Box w="150px"><Text fontWeight={"bold"}  size={"sm"}>IDO Price</Text></Box>
  <Box w="150px"><Text fontWeight={"bold"} size={"sm"}>Total Holding</Text></Box>
  <Box w="150px"><Text fontWeight={"bold"} size={"sm"}>No. of Token</Text></Box>
  <Box w="150px"><Text fontWeight={"bold"} size={"sm"}>Total Claimed</Text></Box>
  <Box w="250px"><Text fontWeight={"bold"} size={"sm"}>Add Token to Metamask</Text></Box>
  </HStack>
  
  {projectList}
  
  </Flex>
<Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered size={"3xl"}>
        <ModalOverlay bg={"blackAlpha.400"}/>
        <ModalContent fontFamily={'Inter'}>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
           <Flex direction="column">
          

            <Flex justifyContent={"center"}>
                <Box textAlign={"center"} w="250px"><Text fontWeight={"bold"}>NO</Text></Box>
                <Box textAlign={"center"} w="250px"><Text fontWeight={"bold"}>Allocation</Text></Box>
                <Box textAlign={"center"} w="250px"><Text fontWeight={"bold"}>Percentage</Text></Box>
                <Box textAlign={"center"} w="250px"><Text fontWeight={"bold"}>Date</Text></Box>
                <Box textAlign={"center"} w="250px"><Text fontWeight={"bold"}>Clamied</Text></Box>
                <Box textAlign={"center"} w="250px"><Text fontWeight={"bold"}>Action</Text></Box>
            </Flex>
            {
              investmentData.length && loading != true ?
               investmentData.map((ele)=>{
                const investD =  ele.claimAllocation.map((e,i)=>{
                 console.log(e);
                 
                  var allocationList = <Flex  justifyContent={"center"}>
                  <Text textAlign={"center"} w="250px">{i+1}</Text>
                  <Text textAlign={"center"} w="250px">{e.Allocation}</Text>
                  <Text textAlign={"center"} w="250px">{e.Percentage}</Text>
                  <Text textAlign={"center"} w="250px">{e.claimDate.toDate().toString().split('G')[0]}</Text>
                  <Box textAlign={"center"} w="250px">{e.status == false ? <Text>Not Claimed</Text> : <Text>Claimed</Text>}</Box>
                  <Box textAlign={"center"} w="250px">{e.status == false ?  <Button size={"sm"}  colorScheme="twitter">Claim Tokens</Button> : <Text>Claimed</Text>}</Box>
                </Flex>
                return allocationList;
                })
                return investD;
              }) : ""
            }
            
            
            
           
             
           </Flex>
          </ModalBody>

          <ModalFooter>
           
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </p></>);
}

export default IDOPage