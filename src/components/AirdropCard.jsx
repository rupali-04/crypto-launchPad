import { Card,CardHeader,Input,Flex,Avatar,Spacer,Box,Heading,Text,Divider,IconButton,CardBody,CardFooter,Button, ButtonGroup,Modal,ModalContent,ModalOverlay,ModalHeader,ModalCloseButton,ModalBody,ModalFooter } from "@chakra-ui/react";
import {TiSocialLinkedin,TiSocialFacebook,TiSocialTwitter} from 'react-icons/ti';
import {FaTelegramPlane} from 'react-icons/fa';
import {AiOutlineGlobal} from 'react-icons/ai';
import { useDisclosure } from "@chakra-ui/react";
const AirdropCard = () =>{
  const { isOpen, onOpen, onClose } = useDisclosure()
    return (

        <>
            <Card  maxW={"360px"} bg={"#F1F1F1"} color="black" onClick={onOpen} cursor="pointer">
            <Text bg={"black"} color="white" textAlign={"center"}>Airdrop Project</Text> 
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
  <br></br>

<Flex gap="20"> 
  
    <Text pl={"8"} fontSize={"14px"}>Starting Date</Text>
  

 
  <Text fontSize={"14px"} fontWeight={"bold"} pt="1px" >Mar 24, 2023</Text>
 
</Flex>
</CardBody>
 
</Card>   
<Modal closeOnOverlayClick={false} isOpen={isOpen}  onClose={onClose} isCentered size={"3xl"} >
        <ModalOverlay bg={"blackAlpha.400"}/>
        <ModalContent bg="#3B72FF" color="white" borderRadius="40px">
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <Flex>
            <Flex direction={"column"}>  
              <Flex><Avatar size={"2xl"} m={"2"} name='Segun Adebayo' src='https://bit.ly/sage-adebayo' /></Flex>
              <Heading textAlign={"center"} size={"md"}>Prize Money</Heading>
              <Flex ><Text>1st $5000</Text><Spacer/><Text >1</Text></Flex>
              <Flex ><Text>2nd $3000</Text><Spacer/><Text>1</Text></Flex>
              <Flex ><Text>3rd $1250</Text><Spacer/><Text>1</Text></Flex>
              <Flex ><Text>4th $500</Text><Spacer/><Text>5</Text></Flex>
              <Flex ><Text>5th $25</Text><Spacer/><Text>25</Text></Flex>
            </Flex>
            <Flex direction={"column"} ml="1rem">

             <Flex> <Heading size={"lg"} >WeWay</Heading><Spacer/> <Flex direction={"column"} mr="3rem"><Button borderRadius={"40px"} colorScheme={"blackAlpha"} w="250px">Invest Now</Button><Text textAlign={"center"} fontSize={"12px"} color="gray.200">Maximum investment $5* </Text></Flex></Flex>

              <Text>IDO Price: 0.02 BUSD</Text>
              <Flex p="-2" gap="2">
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
/>
          </Flex>
          <Text mt="1rem" color="gray.100" >This Project helps you to infinite scalability whilst keeping optimal decentralization from the Ethereum network.
ZKasino has confirmed to launch an own token called “ZKAS” and has very high 
potential to do an airdrop. </Text>

<Text mt="2rem">STEP-BY-STEP GUIDE</Text>
              <Text fontSize={"14px"} color="gray.100" ml="1rem" mt="0.5rem">1.Connect your Metamask Wallet</Text>
              <Text fontSize={"14px"} color="gray.100" ml="1rem">2.Invest 5 USDCT in WeWay</Text>
              <Text fontSize={"14px"} color="gray.100" ml="1rem">3.Join WeWay telegram group & channel</Text>
              <Text fontSize={"14px"} color="gray.100" ml="1rem">4.Like WeWay twitter account</Text>
            </Flex>
            <Flex>
            
            </Flex>
          </Flex>
          
           
          </ModalBody>

        <ModalFooter>
          <Text color="gray.300" fontSize={"12px"}>Terms & Conditions : Everyone get token $5 value token.</Text>
        </ModalFooter>
        </ModalContent>
      </Modal>
    
        </>
    );
}


export default AirdropCard;


