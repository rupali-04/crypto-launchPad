import { Card,CardHeader,Flex,Avatar,Spacer,Box,Heading,Text,IconButton,CardBody,CardFooter,Button, ButtonGroup } from "@chakra-ui/react";
import {TiSocialLinkedin,TiSocialFacebook,TiSocialTwitter} from 'react-icons/ti';
import {FaTelegramPlane} from 'react-icons/fa';
import {AiOutlineGlobal} from 'react-icons/ai';
import { useEffect, useState } from "react";



const Details = (data) =>{
  
  useEffect(()=>{
    console.log(data.data.tokenName);
  },[])
    return (<> <Card fontFamily={'Inter'} bg="white" variant = {"filled"} maxW={"360px"} color="black">
    <CardHeader fontFamily={'Inter'}>
      <Flex >
        <Flex flex='1' gap='2' alignItems='center' flexWrap='wrap'>
        
          <Box>
            <Heading fontFamily={'Inter'} size='md'>{data.data.tokenName}</Heading>
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
    <CardBody >
      <Text fontSize={"14px"} mt="-8">{data != null ? data.data.projectDetails : ""}
      </Text>
    </CardBody>
    
    
  </Card></>)
}

export default Details;