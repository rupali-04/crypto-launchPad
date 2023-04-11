import { Input,Flex,Heading,Divider,Stack,ButtonGroup,Button,Spacer,Text,Card, CardHeader, CardBody, CardFooter, Box, HStack, ListItem, UnorderedList } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import app from '../firebaseDatabase';
import { collection, query, where, getDoc,doc,addDoc ,updateDoc,arrayUnion} from "firebase/firestore";
import {getFirestore} from "firebase/firestore";
import { ethers } from "ethers";
import {MABI} from '../ABIs/MABI';
import { AggregatorABI } from "../ABIs/AggregatorABI";
const mAdd = '0xDB0f4a54eb7020A4215Eb68f3178Dd751E48b6fA';
const db = getFirestore(app);
const MembershipCard = ({data}) =>{
    const wallet = useSelector(state => state.wallet);
    const [chainPrice,setChainPrice] = useState(0);
 

    const FindPrice = () =>{
      const Aggaddr = "0xe04676B9A9A2973BCb0D1478b5E1E9098BBB7f3D"
      const priceFeed = new ethers.Contract(Aggaddr, AggregatorABI, wallet.signer);
      priceFeed.latestAnswer().then((roundData) => {
        // Do something with roundData
        setChainPrice(roundData/100000000);
        console.log("Latest Round Data", roundData/100000000);
      })
    
    }
    const handleMembership = async () =>{

      console.log("111111");
      const userRef = collection(db, "user");
        const uRef = doc(userRef,wallet.address);
        const d = await getDoc(uRef);
        console.log("222222222");
     
        console.log("ddd",data.type);
        
        if(d.exists()){
          const mT = data.type;
       
          if(d.data().membershipStatus[data.type].membershipStatus === false && d.data().kycStatus.kycStatus == "Active"){
            console.log("23333333333333");
            const MembershipPurchase = new ethers.Contract(mAdd, MABI, wallet.signer);
            console.log(MembershipPurchase);
            FindPrice();
            let privateKey = "0x5a188b93a4d239709fc8527012db2d0216fb127a6d17578dda348d321d0beb36"
            let w = new ethers.Wallet(privateKey);
            const timePeriod = Math.floor(new Date().getTime() / 1000.0);
            const hashData = await MembershipPurchase.getMessageHash(
              wallet.address,
              timePeriod,
              ethers.utils.parseEther(`${(data.price * chainPrice)}`)
            );  
            const messageHashBytes = ethers.utils.arrayify(hashData);
            const sign = await w.signMessage(messageHashBytes);
            try{
              const tx = await MembershipPurchase.buyMembership(wallet.address,1,timePeriod, ethers.utils.parseEther(`${(data.price * chainPrice)}`).toBigInt(),sign,{value: ethers.utils.parseEther(`${(data.price * chainPrice)}`)})
              await tx.wait();
              console.log(tx);
          
         
              await updateDoc(uRef,{
                membershipStatus:{...d.data().membershipStatus,
                  [data.type]: {
                    'membershipId': data.id,
                    'membershipStatus': true,
                  },
                }
                  

              })
              alert("Congratulations for becoming member");
              // saveToDB(tx);
   
  }catch(err){
    console.log(err);
  }
          }else{
            console.log("KYCStatus",d.data().kycStatus.kycStatus);
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
    <Flex p="0.5rem" direction={"column"} bg="gray" textAlign={"center"} color="white"><Text  fontSize={"14px"} textDecoration={"line-through"} textDecorationColor="red" textDecorationThickness={"0.06rem"}>Normally ${data.earlyPrice}</Text><Text p="1rem" fontSize={"40"} >${data.price}</Text><Text fontSize={"14px"} pt="0.5rem">{((data.earlyPrice - data.price)*100) / data.earlyPrice }% Savings</Text></Flex>
      <Text p="0.5rem" fontSize={"14px"}>
        {data.description}
      </Text>
        <Flex pl="0.75rem" >
     <UnorderedList textAlign={"left"}  >
      <ListItem>Vaild for only {data.total_project} {data.type}</ListItem>
      <ListItem>Investment limit ${data.investment_Limit} per {data.type}</ListItem>
      <ListItem>Early access before {data.early_Access}Hr</ListItem>
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