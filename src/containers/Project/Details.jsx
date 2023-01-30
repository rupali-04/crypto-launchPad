import { Card,CardHeader,Flex,Avatar,Spacer,Box,Heading,Text,IconButton,CardBody,CardFooter,Button, ButtonGroup } from "@chakra-ui/react";
import {TiSocialLinkedin,TiSocialFacebook,TiSocialTwitter} from 'react-icons/ti';
import {FaTelegramPlane} from 'react-icons/fa';
import {AiOutlineGlobal} from 'react-icons/ai'

const Details = () =>{
    return (<> <Card bg="white" variant = {"filled"} maxW={"360px"} color="black">
    <CardHeader>
      <Flex >
        <Flex flex='1' gap='2' alignItems='center' flexWrap='wrap'>
        
          <Box>
            <Heading size='md'>MUON NETWORK</Heading>
            <Text fontSize={"10"} color={"gray"}>$HAL</Text>
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
       This is a Demo IDO of Muon Network, working on it and stay tune with us will be coming live soon.
       This is our demo side hopw it will be a sucess soon
      </Text>
    </CardBody>
    
    
  </Card></>)
}

export default Details;