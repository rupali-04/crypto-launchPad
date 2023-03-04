import { Textarea,Modal,ModalOverlay,ModalContent,Input, Menu,MenuButton,MenuList,MenuItem, Heading,Flex,Text, Avatar,Box,Button ,IconButton,Spacer,Wrap,WrapItem,Center, Divider, ModalBody, ModalFooter, ModalCloseButton} from "@chakra-ui/react";
import { HStack,ButtonGroup } from "@chakra-ui/react";

import {TfiWallet} from 'react-icons/tfi';
import {BsPersonCircle} from 'react-icons/bs';
import {FiCopy} from 'react-icons/fi';
import DashboardNav from "../../../components/DashboardNav";
import {IoIosArrowDown} from "react-icons/io";
import AdminNav from "../../../components/AdminNav";
import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import AdminBiddingNav from "../../../components/AdminBiddingNav";
import AdminBar from "../../../components/AdminBar";
import ProjectFundsDetails from "../../../components/ProjectFundsDetails";
import { Link } from "react-router-dom";

const AdminAirdropEdit = () =>{
    const { isOpen, onOpen, onClose } = useDisclosure();
    return(<>
        <p>
         <Flex><AdminBar/>
<Flex flexWrap={"wrap"} ml="2rem" overflowX={"hidden"} flexDirection={"column"}>
 <Flex>
 <Flex m="1rem" fontSize={"24px"}></Flex><Spacer/>
     <Flex m="1rem" ><Box display='flex'   flexWrap={"wrap"} flexDirection={"column"}>
                 <Button  leftIcon={<BsPersonCircle></BsPersonCircle>} size='lg'  colorScheme='gray' fontSize={"20"} variant='outline' borderRadius='40'> 0xd23...45e78 <IconButton  fontSize={"14px"} pt="1"  aria-label='Copy button' variant={"none"} icon={<FiCopy />}/></Button> 
                 </Box>
                 </Flex>   
  
 </Flex>
   
    <Flex ml="1rem" direction={"column"}>
    <HStack w={"max-content"} h={"max-content"}  pt="0" >

 
  
<ButtonGroup bg="gray.200" gap="4" variant='unstyled' w="100%" >
 
<Link to="/admin/dashboard/airdrop"><Button  borderRadius={"0"} pl="2rem" pr="2rem"  >ADD NEW AIRDROP</Button></Link>
  <Link to="/admin/dashboard/airdrop/open"><Button  borderRadius={"0"} bg="#1F94FF" color="white" pl="2rem" pr="2rem">OPEN AIRDROP</Button></Link>
  <Link to="/admin/dashboard/airdrop/close"><Button borderRadius={"0"}   pl="2rem" pr="2rem">CLOSE AIRDROP</Button></Link>
  </ButtonGroup>
<Spacer />

</HStack>
<Flex bg="lightgray" direction={"column"} w="1100px" mt="1rem" mb="2rem">
   <Text bg="gray" textAlign={"center"} color="white">AIRDROP DETAILS</Text>
   <Flex justifyContent={"center"} gap="4" mt="1rem">

    <Button colorScheme={"blue"} borderRadius="0">AIRDROP INFORMATION</Button>
    <Link to="/admin/dashboard/airdrop/funds"><Button colorScheme={"blackAlpha"} borderRadius="0">FUNDING INFORMATION</Button></Link>
   </Flex>
   <Flex ml="1rem" mt="1rem" gap="8">
    <Text>TOKEN SMART CONTRACT</Text>
    <Text>TOKEN SYMBOL</Text>
   </Flex>
   <Flex ml="1rem" mt="1rem" gap="8">
    <Text>TOKEN NAME</Text>
    <Text>TOKEN SUPPLY</Text>
   </Flex><Flex ml="1rem" mt="1rem" gap="8">
    <Text>PROJECT SHORT DETAILS</Text>
    <Text>CHAIN TYPE</Text>
   </Flex>
   
   <Flex ml="1rem" mt="0.25rem">eg: ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</Flex>
   <Flex ml="1rem" mt="1rem" gap="8">
    <Text>CLIFF PERIOD</Text>
    <Text>TGE [PERCENTAGE]</Text>
   </Flex>
   <Flex ml="1rem" mt="1rem" gap="8">
    <Text>LINEAR VEST [PERCENTAGE]</Text>
    <Text>MAXIMUM INVESTMENT</Text>
   </Flex>
   
   <Flex ml="1rem" mt="1rem" gap="8">
    <Text>SWAP RATE OR TOKEN PRICE</Text>
    <Text>SOCIAL MEDIA</Text>
   </Flex>

   <Flex ml="1rem" mt="1rem" gap="8">
    <Text>STEP-BY-STEP GUIDE</Text>
    
   </Flex>
   
   <Flex ml="1rem" mt="0.25rem">eg: dddddddddddddddDDDDDDDDSWddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</Flex>
   <Flex ml="1rem" mt="1rem" gap="8">
    <Text>PRIZE MONEY</Text>
    
   </Flex>
        
        <ButtonGroup m="1rem" mb="2rem"  gap="2" >
            <Button colorScheme={"blue"} borderRadius="0" >EDIT</Button>
            <Button colorScheme={"blue"} borderRadius="0" >CANCEL</Button><Spacer/>
            <Button colorScheme={"blue"} borderRadius="0" >HIDE FROM WEBSITE</Button>
        </ButtonGroup>
    </Flex>
    
   

</Flex>
</Flex>
</Flex>

    </p>
    </>)
}

export default AdminAirdropEdit;