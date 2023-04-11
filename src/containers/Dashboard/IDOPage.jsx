import SideBar from "../../components/SideBar";
import { Text,Flex,HStack, Box, Button,Modal,ModalContent,ModalOverlay,ModalHeader,ModalCloseButton,ModalBody,ModalFooter } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react";
import DashboardNav from "../../components/DashboardNav";
import WalletDetails from "../../components/WalletDetails";
import { useDisclosure } from "@chakra-ui/react";
import app from '../../firebaseDatabase';
import { collection, query, where, getDoc, getDocs,updateDoc,increment  } from "firebase/firestore";
import {getFirestore,doc } from "firebase/firestore";
import { useSelector } from "react-redux";
import {IABI} from '../../ABIs/IABI';
import { ethers } from "ethers";



const db = getFirestore(app);

const IDOPage = ({data}) => {
  const wallet = useSelector(state => state.wallet);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [loading,setLoading] = useState();
    const [projectList,setProject] = useState([]);
    const [claimAllocationList,setClaims] = useState([]);
    const [claimNumber,setClaimNumber] = useState(0);
    const [companyData,setCompany] = useState([]);
    const [investmentData,setInvestment] = useState([]);
    const [allocationNumber,setAllocationNumber] = useState(0);
   
    useEffect(()=>{
      getData();
    },[data]);

    //console.log("ssssssssssssssssss",data);
 
//let projectList = [];
    const getData = async() =>{
      setLoading(true);
     
      if(data){
        let arr = [];
        let cArr = [];
        let companyArr = [];
          try{
            let newArray;
            data.idoInvestment.map(async (e,i)=>{

              console.log("dddd",i,e);
              const investmentRef = collection(db, "investment");
    
              // Reference the specific document by its ID
              const documentRef = doc(investmentRef,e.investmentId);
              const companyRef = collection(db, "company");
              const companyDoc = doc(companyRef,e.companyId);
              
              // Retrieve the data from the document
              const d = await getDoc(documentRef);
              const c = await getDoc(companyDoc);
              
            
             // console.log("sssss",d.exists(), c.exists(),e);
                if(d.exists() && c.exists()){
                  console.log(i,d.data(),c.data().tokenName);
                   //newArray = [...arr];
                  //console.log(newArray);
                  
                  let cNewArr = d.data().claimAllocation;
                  cArr.push(cNewArr);
                  companyArr.push(c.data());
                  newArray = <HStack key={i}  w={"max-content"} h={"max-content"} textAlign="center"  >
                  <Box w="150px" pt="2"><Button onClick={()=>{setClaimNumber(i);onOpen()}} variant={"none"} size={"sm"} color="blue.400">{c.data().tokenName}</Button></Box> 
                  <Box w="150px"><Text pt="4" size={"sm"}>{d.data().tokenPrice.toFixed(2)} FTM</Text></Box>
                  <Box w="150px"><Text pt="4" size={"sm"}>{d.data().totalHolding} FTM</Text></Box>
                  <Box w="150px"><Text pt="4"  size={"sm"}>{d.data().totalTokensHold.toFixed(2)}</Text></Box>
                  <Box w="150px"><Text pt="4" size={"sm"}>{d.data().totalClaimed}%</Text></Box>
                  <Box w="250px"><Box pt="2"><Button size={"sm"}  colorScheme="blackAlpha">Add</Button></Box></Box>
                  </HStack>;
                  arr.push(newArray);
                  setInvestment([...investmentData,newArray]);
                  
                
                  //  projectList.push(<HStack key={i}  w={"max-content"} h={"max-content"} textAlign="center"  >
                  // <Box w="150px" pt="2"><Button onClick={onOpen} variant={"none"} size={"sm"} color="blue.400">{c.data().tokenName}</Button></Box> 
                  //   <Box w="150px"><Text pt="4" size={"sm"}>{d.data().tokenPrice} FTM</Text></Box>
                  //   <Box w="150px"><Text pt="4" size={"sm"}>{d.data().totalHolding} FTM</Text></Box>
                  //   <Box w="150px"><Text pt="4"  size={"sm"}>{d.data().totalTokensHold}</Text></Box>
                  //   <Box w="150px"><Text pt="4" size={"sm"}>{d.data().totalClaimed}%</Text></Box>
                  //   <Box w="250px"><Box pt="2"><Button size={"sm"}  colorScheme="blackAlpha">Add</Button></Box></Box>
                  //   </HStack>);
                console.log(projectList)
                }else{
                  console.log("No Documents Found");
                 
                }
            console.log(e);
            })
            setCompany(companyArr);
            setProject(arr);
            setClaims(cArr);
            setLoading(false);
          }catch(err){
            console.log(err);
          }
        
      setLoading(false);
      //console.log("end",data);
      }
    }

    const saveToDB = async (tx) =>{
      
      // await updateDoc(cRef,{
      //   totalRaise: increment(investmentAmount),
      //   totalTokensAvailable: increment(-(investmentAmount / comapnyData.tokenPrice))
      // })
      let projectId = data.idoInvestment[claimNumber].companyId;
      let investmentId = data.idoInvestment[claimNumber].investmentId;
      const cRef = doc(db, "company",projectId);
      const iRef = doc(db,"investment",investmentId);

      await updateDoc(iRef,{
        [`claimAllocation[${claimNumber}].status`]: true,
        totalClaimed: increment(claimAllocationList[claimNumber][allocationNumber].Allocation)
      })
    
      
    }

    const handleClaimTokens = async () =>{
      console.log(companyData[claimNumber],data.idoInvestment.claimAllocation[claimNumber][allocationNumber]);
      const IDOClaim = new ethers.Contract(companyData[claimNumber].honeyBiteSmartContract, IABI, wallet.signer); 
      console.log(IDOClaim);
      let privateKey = "0x5a188b93a4d239709fc8527012db2d0216fb127a6d17578dda348d321d0beb36"
      let w = new ethers.Wallet(privateKey);
      const timePeriod = Math.floor(new Date().getTime() / 1000.0);
      let messageHash = IDOClaim.getMessageHashForClaim(wallet.address,companyData[claimNumber].tokenAddress,timePeriod,claimAllocationList[claimNumber][allocationNumber].Allocation);
      const messageHashBytes = ethers.utils.arrayify(messageHash);

      const sign = await w.signMessage(messageHashBytes);
      try{
        const tx = await IDOClaim.claimToken(wallet.address,companyData[claimNumber].tokenAddress,timePeriod,claimAllocationList[claimNumber][allocationNumber].Allocation,sign);
        tx.wait();

        saveToDB(tx);
      }catch(err){
        console.log(err);
      }
    }

    
    let p = [];
    if(loading != true && projectList.length > 0 ){
     // console.log("invest",investmentData,companyData);
     var i =0;
     projectList.map((e)=>{
     p.push(e);
    }
        );
        i++;
   
      
        
    }else if( loading != true && investmentData.length === 0 && companyData.length === 0 && projectList.length === 0){
     // console.log("dddd",investmentData.length,companyData.length);
      p.push(<Flex mt="1rem">No IDO investment</Flex>);
    }
    else{
      //console.log("investmentData",investmentData);
      p = [];
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
  
  {p != [] && loading != true ? p.map((e)=>{console.log(p)
    return e}) : <Flex mt="1rem">Loading......</Flex>}
  
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
            {claimAllocationList.length > 0 &&
              loading != true ?
                claimAllocationList[claimNumber].map((e,i)=>{
                  console.log(claimAllocationList);
                 console.log(i,e,claimNumber);
                 
                  var allocationList = <Flex  justifyContent={"center"} mt="2rem" >
                  <Text textAlign={"center"} w="250px">{i+1}</Text>
                  <Text textAlign={"center"} w="250px">{e.Allocation.toFixed(2)}</Text>
                  <Text textAlign={"center"} w="250px">{e.Percentage}</Text>
                  <Text textAlign={"center"} w="250px">{e.claimDate.toDate().toString().split('G')[0]}</Text>
                  <Box textAlign={"center"} w="250px">{e.status == false ? <Text>Not Claimed</Text> : <Text>Claimed</Text>}</Box>
                  <Box textAlign={"center"} w="250px">{e.status == false ?  <Button size={"sm"}  colorScheme="twitter" onClick={()=>{setAllocationNumber(i);handleClaimTokens()}}>Claim Tokens</Button> : <Text>Claimed</Text>}</Box>
                </Flex>
                return allocationList;
             
                
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