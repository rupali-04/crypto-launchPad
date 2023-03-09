import { Input,Flex,Heading,Divider,Stack,ButtonGroup,Button,Spacer,Text,Card, CardHeader, CardBody, CardFooter, Box, HStack, ListItem, UnorderedList } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import app from '../firebaseDatabase';
import { collection, query, where, getDoc,doc,addDoc ,updateDoc} from "firebase/firestore";
import {getFirestore} from "firebase/firestore";
import { ethers } from "ethers";
import {MABI} from '../ABIs/MABI';
const mAdd = '0xDB0f4a54eb7020A4215Eb68f3178Dd751E48b6fA';
const db = getFirestore(app);

const MembershipCard = ({data}) =>{
    const wallet = useSelector(state => state.wallet);

    const handleMembership = async () =>{
      const userRef = collection(db, "user");
        const uRef = doc(userRef,wallet.address);
        const d = await getDoc(uRef);
        if(d.exists()){
          if(d.data().membershipStatus === false){
            const MembershipPurchase = new ethers.Contract(mAdd, MABI, wallet.signer);
            console.log(MembershipPurchase);
            let privateKey = "0x5a188b93a4d239709fc8527012db2d0216fb127a6d17578dda348d321d0beb36"
            let w = new ethers.Wallet(privateKey);
            const timePeriod = Math.floor(new Date().getTime() / 1000.0);
            const hashData = await MembershipPurchase.getMessageHash(
              wallet.address,
              timePeriod,
              ethers.utils.parseEther(`${0.0002}`)
            );  
            const messageHashBytes = ethers.utils.arrayify(hashData);
            const sign = await w.signMessage(messageHashBytes);
            try{
              const tx = await MembershipPurchase.buyMembership(wallet.address,1,timePeriod, ethers.utils.parseEther(`${0.0002}`).toBigInt(),sign,{value: ethers.utils.parseEther(`${0.0002}`)})
              await tx.wait();
              console.log(tx);
              await updateDoc(uRef,{
                membershipStatus: true
              });
            
              // saveToDB(tx);
   
  }catch(err){
    console.log(err);
  }
          }
        }
    }
    
    return(

        <>
        <Flex direction={"column"}>
                <Card maxW={"sm"} h="lg" borderRadius={"0"} shadow="0"   bg="gray.100" alignItems={"center"} textAlign="center" >
  <CardBody p="0">
    <Stack m="0" spacing='3'>
      <Text  fontStyle={"normal"} fontWeight="bold" pt="1rem">{data.type}</Text>
    <Flex p="0.5rem" direction={"column"} bg="gray" textAlign={"center"} color="white"><Text  fontSize={"14px"} textDecoration={"line-through"} textDecorationColor="red" textDecorationThickness={"0.06rem"}>Normally 0.2 FTM</Text><Text p="1rem" fontSize={"40"} >{data.price}</Text><Text fontSize={"14px"} pt="0.5rem">50% Savings</Text></Flex>
      <Text p="0.5rem" fontSize={"14px"}>
        {data.description}
      </Text>
        <Flex pl="0.75rem" >
     <UnorderedList textAlign={"left"}  >
      <ListItem>Vaild for only 1 IDO</ListItem>
      <ListItem>Investment limit $1000 per IDO</ListItem>
      <ListItem>Early access before 24Hr</ListItem>
      <ListItem>No expiry date</ListItem>
      <ListItem>No service charge</ListItem>
     </UnorderedList>
     </Flex>
   
    </Stack>
  </CardBody>
 
  <CardFooter>
    
      <Button onClick={()=>{handleMembership()}} borderRadius={"40"} bg="blue.400" color={"white"}>
        Buy Now
      </Button>
     
    
  </CardFooter>
 
</Card>
{/* <Flex bg="white" mt="0.5rem"><Input borderRadius={"40"} placeholder="ENTER PROMO CODE "></Input><Button bg="blue.400" color={"white"} fontSize="14px" borderRadius={"40px"}>Apply Now</Button></Flex> */}
</Flex>
        </>

    )
}

export default MembershipCard;