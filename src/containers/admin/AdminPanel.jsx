import { Modal,ModalOverlay,ModalContent, Menu,MenuButton,MenuList,MenuItem, Heading,Flex,Text, Avatar,Box,Button ,IconButton,Spacer,Wrap,WrapItem,Center, Divider, ModalBody} from "@chakra-ui/react";
import { HStack,ButtonGroup } from "@chakra-ui/react";
import Logo from "../../images/Logo.jpg";
import {TfiWallet} from 'react-icons/tfi';
import {BsPersonCircle} from 'react-icons/bs';
import {FiCopy} from 'react-icons/fi';
import DashboardNav from "../../components/DashboardNav";
import {IoIosArrowDown} from "react-icons/io";
import AdminNav from "../../components/AdminNav";
import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import AdminBiddingNav from "../../components/AdminBiddingNav";
import AdminBar from "../../components/AdminBar";
import ProjectFundsDetails from "../../components/ProjectFundsDetails";

const AdminPanel = () =>{
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show,setShow] = useState("none");
  const [showd,setShowd] = useState("none");
    return( <><p>
     
     <Flex><AdminBar/>
<Flex flexWrap={"wrap"} ml="2rem" overflowX={"hidden"} flexDirection={"column"}>
 <Flex>
 <Flex m="1rem" fontSize={"24px"}></Flex><Spacer/>
     <Flex m="1rem" ><Box display='flex'   flexWrap={"wrap"} flexDirection={"column"}>
                 <Button  leftIcon={<BsPersonCircle></BsPersonCircle>} size='lg'  colorScheme='gray' fontSize={"20"} variant='outline' borderRadius='40'> 0xd23...45e78 <IconButton  fontSize={"14px"} pt="1"  aria-label='Copy button' variant={"none"} icon={<FiCopy />}/></Button> 
                 </Box>
                 </Flex>   
  
 </Flex>
    <ProjectFundsDetails/>
    <Flex ml="1rem" direction={"column"}>
    <HStack w={"max-content"} h={"max-content"}  pt="0" >

 
  
<ButtonGroup bg="gray.200" gap="4" variant='unstyled' w="1000px">
 
  <Button bg="#1F94FF" borderRadius={"0"} pl="2rem" pr="2rem" color="white">IDO FUND DETAILS</Button>
  <Button borderRadius={"0"} pl="2rem" pr="2rem">AIRDROP FUND DETAILS</Button>
  <Button borderRadius={"0"}  pl="2rem" pr="2rem">HONEY-BITE VENTURE FUND DETAILS </Button>
  </ButtonGroup>
<Spacer />

</HStack>
<Flex direction={"row"}  w="1000px" fontWeight="bold" mt="0.5rem">
      <Text w="50px" >No</Text>  <Spacer/>
      <Text w="200px" >Project Name</Text><Spacer/>
      <Text w="200px" >Smart Contract</Text><Spacer/>
      <Text w="200px">Total Fund Raise</Text><Spacer/>
      <Text w="200px">View Details</Text>
</Flex>

<Flex direction={"row"} w="1000px" mt="0.5rem">
<Text w="50px">1</Text><Spacer/>
      <Text w="200px">Script Network</Text><Spacer/>
      <Text w="200px">0xdafea4....98bc5</Text><Spacer/>
      <Text w="200px">50,000 BUSD</Text><Spacer/>
      <Box w="200px"><Button w="0" color="blue.400" variant={"unstyled"}  mt="-0.5rem" onClick={onOpen} >View</Button></Box>
</Flex>
<Flex direction={"row"} w="1000px" mt="0.5rem">
<Text w="50px">2</Text><Spacer/>
      <Text w="200px">Script Network</Text><Spacer/>
      <Text w="200px">0xdafea4....98bc5</Text><Spacer/>
      <Text w="200px">50,000 BUSD</Text><Spacer/>
      <Box w="200px"><Button w="0" color="blue.400" variant={"unstyled"} onClick={onOpen}  mt="-0.5rem">View</Button></Box>
</Flex>

<Text mt="0.5rem">Honey-Bite Venture Biding Details</Text>
<HStack w={"max-content"} h={"max-content"}  pt="0" >

 
  
<ButtonGroup bg="gray.200" gap="4" variant='unstyled' w="550px" mt="1rem">
 
  <Button bg="#1F94FF" borderRadius={"0"} pl="2rem" pr="2rem" color="white">Pending Bid</Button>
  <Button borderRadius={"0"} pl="2rem" pr="2rem">Accepted Bid</Button>
  <Button borderRadius={"0"}  pl="2rem" pr="2rem">Cancelled Bid</Button>
  </ButtonGroup>
<Spacer />

</HStack>
<Flex direction={"row"} w="1000px" mt="1rem" fontWeight={"bold"}>
<Text w="200px">Bidding Profile</Text><Spacer/>
      <Text w="200px">Project Name</Text><Spacer/>
      <Text w="200px">Bidding Price</Text><Spacer/>
      <Text w="200px">Bidding Amount</Text><Spacer/>
      <Box w="200px"><Text>Bidding Status</Text></Box>
</Flex>

<Flex direction={"row"} w="1000px" mt="1rem">
    <Text w="200px">0xADFG....32e23</Text><Spacer/>
    <Text w="200px">Script Network</Text><Spacer/>
    <Text w="200px">0.01 BUSD</Text><Spacer/>
    <Text w="200px">$10,500</Text><Spacer/>
   <Flex direction={"column"} w="200px"><Button  fontWeight={"300"} color="white"  bg="#1F94FF" onClick={()=>{show === "visible" ? setShow("none") :setShow("visible")}} variant={"unstyled"} borderRadius="0" mt="-0.5rem" w="120px" rightIcon={<IoIosArrowDown/>} >Pending</Button>
   <Box display={show}>
   <Button bg="gray.100" fontWeight={"300"}  variant={"unstyled"} borderRadius="0" mt="0.5rem" w="120px" mb="1rem">Accept Bid</Button><Button bg="gray.100" fontWeight={"300"} variant={"unstyled"} borderRadius="0" mt="-0.5rem" w="120px" >Cancel Bid</Button>
   </Box>
   </Flex>
   </Flex>
   <Text mt="0.5rem">New Project Application</Text>
<HStack w={"max-content"} h={"max-content"}  pt="0" >

 
  
<ButtonGroup bg="gray.200" gap="4" variant='unstyled' w="550px" mt="1rem">
 
  <Button bg="#1F94FF" borderRadius={"0"} pl="2rem" pr="2rem" color="white">Pending</Button>
  <Button borderRadius={"0"} pl="2rem" pr="2rem">Accepted</Button>
  <Button borderRadius={"0"}  pl="2rem" pr="2rem">Cancelled</Button>
  </ButtonGroup>
<Spacer />

</HStack>
<Flex direction={"row"} w="1000px" mt="1rem" fontWeight={"bold"}>
<Text w="200px">Project Name</Text><Spacer/>
      <Text w="200px">Founder Name</Text><Spacer/>
      <Text w="200px">Token Price</Text><Spacer/>
      <Text w="200px">Telegram Id</Text><Spacer/>
      <Box w="200px"><Text>Project Status</Text></Box>
      <Text w="200px">Details</Text>
</Flex>

<Flex direction={"row"} w="1000px" mt="1rem">
    <Text w="200px">Script Network</Text><Spacer/>
    <Text w="200px">Jhon Dones</Text><Spacer/>
    <Text w="200px">0.01 BUSD</Text><Spacer/>
    <Text w="200px">@jfon</Text><Spacer/>
   <Flex direction={"column"} w="200px"><Button  fontWeight={"300"} color="white"  bg="#1F94FF" onClick={()=>{showd === "visible" ? setShowd("none") :setShowd("visible")}} variant={"unstyled"} borderRadius="0" mt="-0.5rem" w="120px" rightIcon={<IoIosArrowDown/>} >Pending</Button>
   <Box display={showd}>
   <Button bg="gray.100" fontWeight={"300"}  variant={"unstyled"} borderRadius="0" mt="0.5rem" w="120px" mb="1rem">Accept</Button><Button bg="gray.100" fontWeight={"300"} variant={"unstyled"} borderRadius="0" mt="-0.5rem" w="120px" >Cancel</Button>
   </Box>
   
   </Flex>
   <Box w="200px"><Button w="0" color="blue.400" variant={"unstyled"} onClick={onOpen}  mt="-0.5rem">View</Button></Box>
   </Flex>

    </Flex>
 
  
  </Flex>
</Flex>

<Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose} isCentered size={"3xl"} >
        <ModalOverlay bg={"blackAlpha.400"}/>
        <ModalContent bg="gray.200" color={"black"} fontFamily={'Inter'} borderRadius="0">
          <ModalBody p="0">
          <Flex direction={"row"}  fontWeight="bold" bg="gray.300" p="0.25rem">
      <Text w="80px" >No</Text>  <Spacer/>
      <Text w="200px" >Sender</Text><Spacer/>
      <Text w="200px" >Receiver</Text><Spacer/>
      <Text w="200px">No of Token</Text><Spacer/>
      <Text w="200px">Amount</Text>
</Flex>

<Flex direction={"row"} mt="0.5rem" p="0.25rem"> 
<Text w="80px">1</Text><Spacer/>
      <Text w="200px">0xdafea4....98bc5</Text><Spacer/>
      <Text w="200px">0xdafea4....98bc5</Text><Spacer/>
      <Text w="200px">50,000</Text><Spacer/>
      <Text  w="200px">15000 BUSD</Text>
    
</Flex>

<Flex gap="4" mt="1rem" justifyContent={"center"}><Button variant={"unstyled"} h="0">Previous Page</Button><Text color="blue.500">1</Text><Text>2</Text><Button h="0" variant={"unstyled"}>Next Page</Button></Flex>
          </ModalBody>          
        </ModalContent>
      </Modal>
    
    
   </p>         
</>
   )
}

export default AdminPanel;