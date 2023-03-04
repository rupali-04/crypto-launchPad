import { Card,CardHeader,Flex,Avatar,Spacer,Box,Heading,Text,IconButton,CardBody,CardFooter,Button, ButtonGroup } from "@chakra-ui/react";
import {TiSocialLinkedin,TiSocialFacebook,TiSocialTwitter} from 'react-icons/ti';
import {FaTelegramPlane} from 'react-icons/fa';
import {AiOutlineGlobal} from 'react-icons/ai';
import {Timestamp} from "firebase/firestore";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Cards = ({data}) =>{
const [remainingTime,setTime] = useState("0:00:000");

useEffect(()=>{
  const d = data.data.fcfsClose.toMillis() - Date.now();
  const hours = Math.floor(d / 3600000); // 1 hour = 3600000 milliseconds
const minutes = Math.floor((d % 3600000) / 60000); // 1 minute = 60000 milliseconds
const t  = `${hours}:${minutes}:00`;
setTime(t);
},1000)

  
    return (

        <>
         <Link to={`/project/ido?id=${data.id}`}>
            <Card id={data.id} maxW={"360px"} bg={"#F1F1F1"} color="black" borderRadius={"0"} shadow="0">
  <CardHeader>
    <Flex >
      <Flex flex='1' gap='2' alignItems='center' flexWrap='wrap'>
      
        <Box>
          <Heading size='md'>{data.data.tokenName}</Heading>
          <Text fontSize={"10"} color={"gray"}>${data.data.tokenSymbol}</Text>
         <Box h={"8px"}></Box>
          <ButtonGroup p="-2" >
          <IconButton
    bg={"#333"}
    color="white"
        mr={"-2"}
  aria-label='website-icon'
  size='sm'
  
  icon={<AiOutlineGlobal />}
/> <Spacer />
          <IconButton
    mr={"-2"}
   bg={"#333"}
   color="white"
  aria-label='inkedin-icon'
  size='sm'
  
  icon={<TiSocialLinkedin />}
/> <Spacer />
<IconButton
    mr={"-2"}
   bg={"#333"}
   color="white"
  aria-label='twitter-icon'
  size='sm'
  icon={<TiSocialTwitter />}
/> <Spacer />
<IconButton
    bg={"#333"}
    color="white"
    mr={"-2"}
  aria-label='facebook-icon'
  size='sm'
  icon={<TiSocialFacebook />}
/> <Spacer />
<IconButton
    bg={"#333"}
    color="white"
    mr={"-2"}
  aria-label='telegram-icon'
  size='sm'
  icon={<FaTelegramPlane/>}
/>
          </ButtonGroup>
        </Box>
      </Flex>
      <Avatar size={"xl"} m={"2"} name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

    </Flex>
  </CardHeader>
  <CardBody>
    <Text fontSize={"14px"} mt="-8">
    {data.data.projectDetails}
    </Text>
  </CardBody>
  <Flex pr={"24"} pl={"1"} >
  
    <Text pl={"4"} fontSize={"14px"}>Total Raise</Text>
  
  <Spacer />
  
  <Text fontSize={"14px"} fontWeight={"bold"} pt="1px">{data.data.totalRaise} BNB</Text>
  
</Flex>
<Flex pr={"24"} pl={"1"}>
 
    <Text pl={"4"} fontSize={"14px"}>Price</Text>
  
  <Spacer />
  
  <Text fontSize={"12px"} fontWeight={"bold"} pt="1px">1{data.data.tokenSymbol} = {data.data.tokenPrice} BNB</Text>
  
</Flex>
<Flex pr={"24"} pl={"1"}> 
  
    <Text pl={"4"} fontSize={"14px"}>Starting Date</Text>
  
  <Spacer />
 
  <Text fontSize={"12px"} fontWeight={"bold"} pt="1px">{data.data.fcfsOpen.toDate().toLocaleString()}</Text>
 
</Flex>
  {data.data.projectStatus === "upcoming" ? <CardFooter></CardFooter> : <Flex mt="0.5rem" textAlign={"center"} bg="#19492E" direction="column" color="white"><Text   fontSize={"12px"}>COUNTDOWN</Text><Text lineHeight={"0rem"} mt="0.25rem" mb="0.75rem" fontWeight={"bold"} fontSize={"14px"} >{remainingTime}</Text></Flex>}
  
</Card> </Link>   
        </>
    );
}


export default Cards;


