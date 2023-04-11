import SideBar from "../../components/SideBar";
import { Text,Flex,HStack, Box, Button,Modal,ModalContent,ModalOverlay,ModalHeader,ModalCloseButton,ModalBody,ModalFooter, Divider } from "@chakra-ui/react";
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

const DashboardAirdrop = ({data}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ r1, setR1 ] = useState(false);
    const wallet = useSelector(state => state.wallet);
    const [loading,setLoading] = useState();
    const [investmentData,setInvestment] = useState([]);
    const [companyData,setCompany] = useState([]);
    const [companyId,setId] = useState(-1);
    

    useEffect(()=>{
      getData();
    },[data]);


    const getData = async() =>{
      setLoading(true);
     
      if(data){

          try{
            setInvestment([]);
            setCompany([]);
            console.log(investmentData,companyData,"tryyyy");
            data.airdropInvestment.map(async (e,i)=>{
              const investmentRef = collection(db, "investment");
    
              // Reference the specific document by its ID
              const documentRef = doc(investmentRef,e.investmentId);
              const companyRef = collection(db, "company");
              console.log("ee",e.investmentId.split(" "),e.companyId);  
              // Reference the specific document by its ID
              const companyDoc = doc(companyRef,e.companyId);
              
              // Retrieve the data from the document
              const d = await getDoc(documentRef);
              const c = await getDoc(companyDoc);
              console.log("sssss",d.exists(), c.exists(),e);
                if(d.exists() && c.exists()){
                  console.log("Airdrop",d.data(),c.data());
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

    
    let projectList = [];
    if(loading != true && investmentData.length > 0 && companyData.length > 0){
      console.log("investAir",investmentData,companyData);
      projectList = [];
     
     investmentData.map((e,i)=>{
      const t = <Flex key={i} justifyContent="center" >
      <Box w="150px" textAlign={"center"} pt="2"><Button onClick={()=>{onOpen();setId(i)}} variant={"none"} size={"sm"} color="blue.400">{e.companyName}</Button></Box> 
      <Box w="150px" textAlign={"center"}><Text pt="4">{e.airdropPrice} FTM</Text></Box>
      <Box w="150px" textAlign={"center"}><Text pt="4">{e.investmentTokens} FTM</Text></Box>
      <Box w="150px" textAlign={"center"}><Text pt="4">{companyData[i].cliffPeriod}</Text></Box>
      <Box w="150px" textAlign={"center"}><Text pt="4"></Text>{`${e.winnerStatusDetails.status}`}</Box>
      <Box w="250px" textAlign={"center"}><Box pt="2"><Button size={"sm"}  colorScheme="blackAlpha">Add</Button></Box></Box>
      </Flex>
      projectList.push(t);
     })
     console.log("pro",projectList);
    }else if( loading != true && investmentData.length === 0 && companyData.length === 0){
      console.log("dddd",investmentData.length,companyData.length);
      projectList.push(<Flex mt="1rem">No Airdrop investment</Flex>);
    }
    else{
      console.log("investmentData",investmentData);
      projectList.push(<Flex mt="1rem">Loading.....</Flex>);
    }
  
    return(<><p>
     
        <Flex p="2"  flexWrap="wrap" justifyContent={"flex-start"}  >
   

        <Flex  justifyContent={"center"} >
        <Box w="150px" textAlign={"center"}><Text fontWeight={"bold"} >Project Name</Text></Box> 
        <Box w="150px" textAlign={"center"}><Text fontWeight={"bold"} >Airdrop Price</Text></Box>
        <Box w="150px" textAlign={"center"}><Text fontWeight={"bold"} >No. of Token</Text></Box>
        <Box w="150px" textAlign={"center"}><Text fontWeight={"bold"} >Cliff Period</Text></Box>
        <Box w="150px" textAlign={"center"}><Text fontWeight={"bold"} >Prize Money</Text></Box>
        <Box w="250px" textAlign={"center"}><Text fontWeight={"bold"} >Add Token to Metamask</Text></Box>

</Flex>

{loading != true && projectList.length > 0 ? projectList.map((e,i)=>{
      
      console.log(e);
     return e;
}) : "" }

      </Flex>
      
      <Modal  closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered size={"3xl"}>
        <ModalOverlay bg={"blackAlpha.400"}/>
        <ModalContent fontFamily={'Inter'}>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
           <Flex direction="column">
           <Box>
            <Flex  justifyContent={"center"}>
                <Box w="250px" textAlign={"center"}><Text color={"gray"} >Airdrop Allocation</Text></Box>
                <Box w="250px" textAlign={"center"}><Text color={"gray"}>Percentage</Text></Box>
                <Box w="250px" textAlign={"center"}><Text color={"gray"}>Date</Text></Box>
                <Box w="250px" textAlign={"center"}><Text color={"gray"}>Claimed</Text></Box>
                <Box w="250px" textAlign={"center"}><Text color={"gray"}>Action</Text></Box>
                
                </Flex><Divider mt="1rem" h="0.09rem"  bg={"black"}/>
                {loading != true && investmentData.length > 0 && companyData.length > 0 && companyId != -1 ?  
               
               investmentData[companyId].claimAllocation.map((el,i)=>{
                    var t = <Flex  justifyContent={"center"} mt="0.5rem">
                <Box w="250px" textAlign={"center"} mt="0.25rem"><Text>{el.Amount} {companyData[companyId].tokenSymbol}</Text></Box>
                <Box w="250px" textAlign={"center"} mt="0.25rem"><Text>{el.Percentage}%</Text></Box>
                <Box w="250px" textAlign={"center"} mt="0.25rem"><Text>{el.claimDate.toDate().toString().split('G')[0]}</Text></Box>
                <Box w="250px" textAlign={"center"} mt="0.25rem"><Text>{el.status == true ? el.Amount : 0.000}</Text></Box>
                
                <Box w="250px" textAlign={"center"} ><Button borderRadius={"40"} colorScheme="blue" variant="solid">Claim Token</Button></Box>
                
                </Flex>
                return t;
                  })
                 
                
                 : "" }
               
                
            </Box>
           
           </Flex>
          </ModalBody>    <ModalBody >
          <Flex direction="column">
           <Box>
            <Flex  justifyContent={"center"}>
                <Box w="250px" textAlign={"center"}><Text color={"gray"} >Project Name</Text></Box>
                <Box w="250px" textAlign={"center"}><Text color={"gray"}>Prize Money</Text></Box>
                <Box w="250px" textAlign={"center"}><Text color={"gray"}>Cliff Period</Text></Box>
                <Box w="250px" textAlign={"center"}><Text color={"gray"}>Claim Prize</Text></Box>
                
                </Flex><Divider mt="1rem" h="0.09rem"  bg={"black"}/>
                { companyId != -1 ? investmentData[companyId].winnerStatusDetails.status == true ?  <Flex  justifyContent={"center"} mt="0.5rem">
                <Box w="250px" textAlign={"center"} mt="0.25rem"><Text>{companyData[companyId].tokenName}</Text></Box>
                <Box w="250px" textAlign={"center"} mt="0.25rem"><Text>{investmentData[companyId].winnerStatusDetails.prizePosition} {investmentData[companyId].winnerStatusDetails.prizeAmount} {companyData[companyId].tokenSymbol}</Text></Box>
                <Box w="250px" textAlign={"center"} mt="0.25rem"><Text>{companyData[companyId].TGE}% TGT {companyData[companyId].cliffPeriod}% PER {companyData[companyId].linearVestPeriod}</Text></Box>
                <Box w="250px" textAlign={"center"} ><Button borderRadius={"40"} onClick={()=>{setR1(true)}} colorScheme="blue">Claim Prize</Button></Box>
                
                </Flex> : "" : ""}
                  
            
               

            </Box>
           
           </Flex>
      
           
           
          </ModalBody>
          
          <ModalFooter>
          <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal closeOnOverlayClick={true} isOpen={r1} isCentered size={"3xl"}>
      <ModalOverlay bg={"blackAlpha.400"}/>
        <ModalContent fontFamily={'Inter'}>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <Flex direction="column">
           <Box>
            <Flex  justifyContent={"center"}>
                <Box w="250px" textAlign={"center"}><Text color={"gray"} >Prize Allocation</Text></Box>
                <Box w="250px" textAlign={"center"}><Text color={"gray"}>Percentage</Text></Box>
                <Box w="250px" textAlign={"center"}><Text color={"gray"}>Date</Text></Box>
                <Box w="250px" textAlign={"center"}><Text color={"gray"}>Claimed</Text></Box>
                <Box w="250px" textAlign={"center"}><Text color={"gray"}>Action</Text></Box>
                
                </Flex><Divider mt="1rem" h="0.09rem"  bg={"black"}/>
                { companyId != -1 ? investmentData[companyId].winnerStatusDetails.status == true ?
                investmentData[companyId].winnerStatusDetails.claimStatusDetails.map((e)=>{
                  const t = <Flex  justifyContent={"center"} mt="0.5rem">
                <Box w="250px" textAlign={"center"} mt="0.25rem"><Text>{e.Amount} {companyData[companyId].tokenSymbol}</Text></Box>
                <Box w="250px" textAlign={"center"} mt="0.25rem"><Text>{e.Percentage} %</Text></Box>
                <Box w="250px" textAlign={"center"} mt="0.25rem"><Text>{e.claimDate.toDate().toString().split('G')[0]}</Text></Box>
                <Box w="250px" textAlign={"center"} mt="0.25rem"><Text>{e.status === true ? e.Amount : 0.000} </Text></Box>
                <Box w="250px" textAlign={"center"} ><Button borderRadius={"40"} variant='solid' colorScheme={"blue"}>Claim Token</Button></Box>
                
                </Flex>
                return t;
                })
                 : "" :""}
              

            </Box>
           
           </Flex>
      
           
          
            </ModalBody>
            <ModalFooter>
          <Button onClick={()=>{setR1(false)}}>Cancel</Button>
          </ModalFooter>
            </ModalContent>
      </Modal>
    </p></>);
}

export default DashboardAirdrop