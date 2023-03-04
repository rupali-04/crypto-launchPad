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

const AdminIDOFunds = () =>{
    const { isOpen, onOpen, onClose } = useDisclosure();
    return(<>
        <p>
         <Flex><AdminBar/>
<Flex mt="1rem" ml="2rem" direction={"column"}>
 <Flex>
 <Flex m="1rem" fontSize={"24px"}></Flex><Spacer/>
     <Flex m="1rem" ><Box display='flex'   flexWrap={"wrap"} flexDirection={"column"}>
                 <Button  leftIcon={<BsPersonCircle></BsPersonCircle>} size='lg'  colorScheme='gray' fontSize={"20"} variant='outline' borderRadius='40'> 0xd23...45e78 <IconButton  fontSize={"14px"} pt="1"  aria-label='Copy button' variant={"none"} icon={<FiCopy />}/></Button> 
                 </Box>
                 </Flex>   
  
 </Flex>
   
    <Flex ml="1rem" direction={"column"}>
    <HStack w={"max-content"} h={"max-content"}  pt="0" >

 
  
<ButtonGroup bg="gray.200" gap="4" variant='unstyled'>
 
<Link to="/admin/dashboard/ido"><Button  borderRadius={"0"} pl="2rem" pr="2rem" >ADD NEW PROJECT</Button></Link>
  <Link to="/admin/dashboard/ido/open"><Button borderRadius={"0"} pl="2rem" pr="2rem" bg="#1F94FF" color="white">OPEN PROJECT</Button></Link>
  <Link to="/admin/dashboard/ido/close"><Button borderRadius={"0"}  pl="2rem" pr="2rem" >CLOSE PROJECT </Button></Link>
  </ButtonGroup>
<Spacer />

</HStack>
<Flex bg="lightgray" direction={"column"} w="1100px" mt="1rem" mb="2rem">
   <Text bg="gray" textAlign={"center"} color="white">VENTURE DETAILS</Text>
   <Flex justifyContent={"center"} gap="4" mt="1rem">

    <Link to="/admin/dashboard/ido/edit"><Button colorScheme={"blue"} borderRadius="0">PROJECT INFORMATION</Button></Link>
    <Link to="/admin/dashboard/ido/funds"> <Button colorScheme={"blackAlpha"} borderRadius="0">FUNDING INFORMATION</Button></Link>
   </Flex>
   <Flex ml="1rem" mt="1rem" gap="8">
    <Text></Text>
   
   </Flex>
   
   <Flex ml="1rem" mt="1.5rem"   >
    <Text w="10%"  >NO</Text>
    <Text  w="25%">WALLET ADDRESS</Text>
    <Text w="25%">ACTIVE PLAN</Text>
    <Text w="25%">VERIFICATION STATUS</Text>
    <Text w="25%">INVESTMENT</Text>
   </Flex><Divider h="0.15rem" w="90%" mt="0.25rem" ml="1rem"  bg={"black"}/>
   <Flex ml="1rem"  mt="0.75rem" >
    <Text w="10%"   p="0">1</Text>
    <Text w="25%">0xdss77deqewr....5484884f8</Text>
    <Text w="25%">IDO PLAN</Text>
    <Text w="25%">VERIFIED</Text>
    <Text w="25%">5 BUSD</Text>
   </Flex>
   <Divider h="0.15rem" w="1020px" mt="2rem" ml="1rem"  bg={"black"}/>
   <Flex justifyContent="end" mt="1rem" mr="5rem">
    <Text>TOTAL RAISE 42500 BUSD</Text>
   </Flex>
   <Flex>
    <Flex gap="2" alignItems={"center"} mb="1rem" justifyContent={"center"} mt="2rem" w="1100px">  
        <Button variant={"unstyled"}>PREVIOUS PAGE</Button>
        <Text >1</Text>
        <Text >2</Text>
        <Button variant={"unstyled"}>NEXT PAGE</Button>
    
    </Flex>
   </Flex>
      

</Flex>
</Flex>
</Flex>
</Flex>
    </p>
    </>)
}

export default AdminIDOFunds;