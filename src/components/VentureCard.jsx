import { Card,CardHeader,Flex,Avatar,Spacer,Box,Heading,Text,IconButton,CardBody,CardFooter,Button, ButtonGroup } from "@chakra-ui/react";
import {TiSocialLinkedin,TiSocialFacebook,TiSocialTwitter} from 'react-icons/ti';
import {FaTelegramPlane} from 'react-icons/fa';
import {AiOutlineGlobal} from 'react-icons/ai';
import { Link } from "react-router-dom";
const VentureCard = ({data}) =>{
  console.log(data);
    return (

        <>
        <Link to={`/project/venture?id=${data.id}`}>
            <Card maxW={"360px"} bg={"#F1F1F1"} color="black" borderRadius={"0"} shadow="0">
            
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
  <br></br>

<Flex gap="20"> 
  
    <Text pl={"4"} fontSize={"14px"}>Starting Date</Text>
  

 
  <Text fontSize={"14px"} fontWeight={"bold"} pt="1px" >{data.data.bidStartDate.toDate().toLocaleString().split(',')[0]}</Text>
 
</Flex>
<Flex gap="4"> 
  
    <Text pl={"4"} fontSize={"14px"}>Minimum Bidding Price</Text>
  

 
  <Text fontSize={"14px"} fontWeight={"bold"} pt="1px" >1 {data.data.tokenSymbol} = {data.data.bidRange.minValue} BNB</Text>
 
</Flex>


</CardBody>
<Flex p="0.5rem" direction={"column"} alignItems="center" bg="gray.900" justifyItems={"center"} color="gray.100" fontSize={"13px"} >Need membership for placing a bid</Flex> 
</Card>  
</Link>  
        </>
    );
}


export default VentureCard;


