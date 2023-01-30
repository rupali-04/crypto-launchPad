import SideBar from "../../components/SideBar";
import { Text,Flex,HStack,Avatar, Box, Button,Modal,ModalContent,Spacer,IconButton,ModalOverlay,ModalHeader,ModalCloseButton,ModalBody,ModalFooter, Divider, Center, Heading } from "@chakra-ui/react";
import {TiSocialLinkedin,TiSocialFacebook,TiSocialTwitter} from 'react-icons/ti';
import {FaTelegramPlane} from 'react-icons/fa';
import {AiOutlineGlobal} from 'react-icons/ai';

import { Link } from 'react-router-dom';
import DashboardNav from "../../components/DashboardNav";
import WalletDetails from "../../components/WalletDetails";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

const DashboardVenture = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [r1,setR1] = useState(false);
    return(<><p><Flex><SideBar/>
     <Flex flexWrap={"wrap"} flexDirection={"column"}>
        <WalletDetails/>
        <DashboardNav data="venture"/>
        <Flex p="2" flexWrap="wrap" justifyContent={"flex-start"}  >
    <HStack spacing={"20"}  w={"max-content"} h={"max-content"} textAlign="center" p="2"  >


<Box ><Text fontWeight={"bold"} size={"sm"}>Project Name</Text><Box pt="2"><Button  onClick={onOpen}  variant={"none"} size={"sm"} color="blue.400">MUON NETWORK</Button></Box><Box pt="2"><Button  variant={"none"} size={"sm"} color="blue.400">UKISS</Button></Box></Box> 
<Box><Text fontWeight={"bold"} size={"sm"}>Bidding Price</Text><Text pt="4"  size={"sm"}>$0.02</Text><Text pt="4" size={"sm"}>$0.01</Text></Box>
<Box><Text fontWeight={"bold"} size={"sm"}>Investment</Text><Text pt="4"  size={"sm"}>10,000 BUSD</Text><Text pt="4" size={"sm"}>1,000 BUSD</Text></Box>
<Box><Text fontWeight={"bold"} size={"sm"}>View Status</Text><Box pt="2"><Button size={"sm"} variant="none"  color="green">ACCEPTED</Button></Box><Box pt="2"><Button size={"sm"} variant="none"  color="red">CANCELLED</Button></Box></Box>

<Box><Text fontWeight={"bold"} size={"sm"}>Action</Text><Box pt="2"><Button borderRadius={"40"} size={"sm"} colorScheme="blue">Invest Now</Button></Box><Box pt="2"><Button borderRadius={"40"} size={"sm"} colorScheme="blue" disabled>Invest Now</Button></Box></Box>
<Box><Text fontWeight={"bold"} size={"sm"}>Investment Countdown</Text><Text pt="4"  size={"sm"}>23:59:59</Text><Text pt="4" size={"sm"}>0:0:0</Text></Box>
</HStack>


</Flex>
</Flex>
    </Flex>
    <Modal closeOnOverlayClick={false} isOpen={r1} onClose={false} isCentered size={"3xl"}>
        <ModalOverlay bg={"blackAlpha.400"}/>
        <ModalContent bg="blue.400" color={"gray.100"} fontFamily={'Inter'}>
          <ModalHeader><Text fontSize={"12px"} textAlign="center" color={"gray.300"}>CONGRATULATIONS "USERNAME"</Text> </ModalHeader>
         
          <ModalBody pb={6}>
            <Flex direction={"column"}>
            <Flex>
            <Avatar size={"2xl"} m={"2"} name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
            <Flex direction={"column"}><Text fontWeight={"black"} fontSize="34px">MUON NETWORK</Text>  <Flex p="-2" gap="2">
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
/></Flex>
</Flex>
</Flex>
<Text>Harmony Launcher is the world first decentralized launchpad to feature the concept of initial Game Offerings (IGO) & Initial Decentralized Exchange Offerings (IDO) on the Harmony Blockchain</Text>
         <Flex mt="0.5rem">
          <Text color={"gray.300"}>BIDDING STATUS:</Text>
          <Text ml="0.75rem">ACCEPTED</Text>
         </Flex>
         <Flex  >
          <Text color={"gray.300"}>BIDDING PRICE:</Text>
          <Text ml="0.75rem">$0.02 USDT</Text>
         </Flex>
         <Flex  gap="4">
          <Text color={"gray.300"}>INVESTMENT AMOUNT:</Text>
          <Text>10,000 USDT</Text>
         </Flex>
          
         <Flex direction={"column"}>
          <Text color={"gray.300"}>INVESTMENT COUNTDOWN</Text>
          <Flex direction={"column"}><Flex><Heading >23:59:59</Heading><Spacer/><Box><Button w="350px" colorScheme={"blackAlpha"} borderRadius="40px">Invest Now</Button><Text fontSize={"10px"} color="gray.300" textAlign={"center"}>Invest minimum 60% amount of Investment amount [Bidding Amount]</Text></Box></Flex><Flex fontSize={"10px"} color="gray.300" gap="5" mt="-1rem"><Text>Hours</Text><Text>Minutes</Text><Text>Seconds</Text></Flex></Flex>
         </Flex>
            </Flex>
          
          </ModalBody>
          <Flex m="0.5rem" >
          <Text color={"gray.300"} mt="1rem" textAlign={"center"} w="800px">Honey-Bite Venture Investment</Text>
          
          <Spacer/>
            <Button onClick={()=>{setR1(false)}} w="max-content" borderRadius="40px" colorScheme="blackAlpha">Cancel</Button>
            </Flex>
                  </ModalContent>
      </Modal>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered size={"3xl"}>
        <ModalOverlay bg={"blackAlpha.400"}/>
        <ModalContent fontFamily={'Inter'}>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
           <Flex direction="column">
           <Box>
            <Flex gap={"20"}  >
                <Box ><Text color={"gray"}>Project Name</Text></Box>
                <Box ><Text color={"gray"}>Vesting Period</Text></Box>
                <Box ><Text color={"gray"}>Clame Prize</Text></Box>
            </Flex>
            <Divider mt="2" mb="2" mr="280" h="0.09rem" w="100" bg={"black"}/> 
            <Flex gap={"20"}>
                <Box ><Text fontWeight={"bold"} >MUON NETWORK</Text></Box>
                <Flex ml="-10" w={"90px"}><Text>10% at TGE, 3 months cliff, 6% per month</Text></Flex>
                <Box><Button borderRadius={"40"} ml="-1rem" colorScheme={"blue"} onClick={()=>{onClose();setR1(true)}}>Invest Now</Button></Box>
            </Flex>
            </Box>
           
           </Flex>
           <Box mt={"1rem"}>
            <Text fontWeight={"bold"} fontSize="22px">INVESTMENT COUNTDOWN</Text>
            
            <Heading size="4xl">23:59:59</Heading>
            
            <Flex>
              <Text w="90px" textAlign={"center"}>Hours</Text>
              <Text  w="100px" textAlign={"center"}>Minutes</Text>
              <Text  w="100px" textAlign={"center"}>Seconds</Text>
              <Button colorScheme={"blackAlpha"} mt="-1.2rem" ml="0.5rem" borderRadius="40">Add tokens to Metamask</Button>
            </Flex>
            
           </Box>
          </ModalBody>

          <ModalFooter>
          
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </p></>);
}

export default DashboardVenture