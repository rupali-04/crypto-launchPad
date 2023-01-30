import { Textarea,ModalHeader,Modal,ModalOverlay,ModalContent,Input, Menu,MenuButton,MenuList,MenuItem, Heading,Flex,Text, Avatar,Box,Button ,IconButton,Spacer,Wrap,WrapItem,Center, Divider, ModalBody, ModalFooter, ModalCloseButton} from "@chakra-ui/react";
import { HStack,ButtonGroup } from "@chakra-ui/react";
import AdminUserNav from "../../../components/AdminUserNav";
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
import AdminMembershipNav from "../../../components/AdminMembershipNav";

const UserDetails = () =>{
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
    <AdminUserNav/>
<Flex bg="lightgray" direction={"column"} w="1100px" mt="1rem" mb="2rem" pb="1rem">
   
   <Flex ml="1rem" mt="1rem" gap="8">
    <Text></Text>
   
   </Flex>
   <Flex ml="1rem" mt="1rem" gap="4" >
    <Text w="100px" >NO</Text>
    <Text w="200px">WALLET ADDRESS</Text>
    <Text w="200px">Email ID</Text>
    <Text w="200px">Verification Status</Text>
    
    <Text w="200px">DETAILS</Text>
   </Flex><Divider h="0.15rem" w="1020px" mt="0.25rem" ml="1rem"  bg={"black"}/>
   <Flex ml="1rem" gap="4" mt="0.75rem" >
    <Text w="100px">1</Text>
    <Text w="200px">0xDwe3...fwef</Text>
    <Text w="200px">info@gmail.com</Text>
    <Text w="200px">Verified</Text>
   
   <Box  w="200px" > <Button variant={"link"}  colorScheme={"blue"} borderRadius="0" onClick={onOpen}>View</Button></Box>
   </Flex>
      

</Flex>
</Flex>
</Flex>
</Flex>

<Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose} isCentered size={"3xl"}>
        <ModalOverlay bg={"blackAlpha.400"}/>
        <ModalContent fontFamily={'Inter'}>
          <ModalHeader bg="gray" color={"white"} p="0" pb="1rem"><Text textAlign="center" fontSize={"16px"} >USER'S DETAILS</Text></ModalHeader>
         
          <ModalBody pb={6}>
           <Flex direction={"row"} gap="4">

           
            <Flex gap="2" >
                <Text fontWeight={"bold"}>WALLET ADDRESS</Text>
                <Text>0x58dewwk58....555</Text>
            </Flex>
            <Flex gap="2" >
                <Text fontWeight={"bold"}>FULL NAME</Text>
                <Text>PULKIT DAS</Text>
            </Flex>
            </Flex>
            <Flex direction={"row"} gap="4">

           
<Flex gap="2" >
    <Text fontWeight={"bold"}>ACTIVE PLAN</Text>
    <Text>IDO SPECIAL</Text>
</Flex>
<Flex gap="2" >
    <Text fontWeight={"bold"}>ACTIVE PLAN DATE</Text>
    <Text>15 JAN 2023</Text>
</Flex>
</Flex> <Flex direction={"row"} gap="4">

           
<Flex gap="2" >
    <Text fontWeight={"bold"}>STATUS</Text>
    <Text>VERIFIED</Text>
</Flex>
<Flex gap="2" >
    <Text fontWeight={"bold"}>TOTAL INVESTMENT</Text>
    <Text>45000 BUSD</Text>
</Flex>
</Flex>
<Flex direction={"row"} gap="4">

           
<Flex gap="2" >
    <Text fontWeight={"bold"}>STATUS</Text>
    <Text>VERIFIED</Text>
</Flex>
<Flex gap="2" >
    <Text fontWeight={"bold"}>TOTAL INVESTMENT</Text>
    <Text>45000 BUSD</Text>
</Flex>
</Flex>
<Flex direction={"row"} gap="4">

   <Box>        
<Flex gap="2" >
    <Text fontWeight={"bold"}>STATUS</Text>
    <Text>VERIFIED</Text>
</Flex>
<Flex gap="2" >
    <Text fontWeight={"bold"}>STATUS</Text>
    <Text>VERIFIED</Text>
</Flex>
</Box>
<Box>
<Flex gap="2" >
    <Text fontWeight={"bold"}>TOTAL INVESTMENT</Text>
    <Text>45000 BUSD</Text>
</Flex>
 
</Box>
</Flex>
          </ModalBody>

         
        </ModalContent>
      </Modal>

    </p>
    </>)
}

export default UserDetails;