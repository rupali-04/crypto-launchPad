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
import AdminVentureCard from "../../../components/adminVentureCard";
const AdminVentureClose = () =>{
    return(<><p>
        <Flex>
            <AdminBar/>
            <Flex mt="1rem" ml="2rem" direction={"column"}>
            <Flex flexWrap={"wrap"} ml="2rem" overflowX={"hidden"} flexDirection={"column"}>
 <Flex >
 <Flex m="1rem" fontSize="24px" direction="column"></Flex><Spacer/>
     <Flex m="1rem" ><Box display='flex'   flexWrap={"wrap"} flexDirection={"column"}>
                 <Button  leftIcon={<BsPersonCircle></BsPersonCircle>} size='lg'  colorScheme='gray' fontSize={"20"} variant='outline' borderRadius='40'> 0xd23...45e78 <IconButton  fontSize={"14px"} pt="1"  aria-label='Copy button' variant={"none"} icon={<FiCopy />}/></Button> 
                 </Box>
                 </Flex>   
  
 </Flex>
   
    <Flex ml="1rem" direction={"column"}>
    <HStack w={"max-content"} h={"max-content"}  pt="0" >

 
  
<ButtonGroup bg="gray.200" gap="4" variant='unstyled' >
 
<Link to="/admin/dashboard/venture"><Button  borderRadius={"0"} pl="2rem" pr="2rem">ADD NEW VENTURE</Button></Link>
  <Link to="/admin/dashboard/venture/open"><Button borderRadius={"0"} pl="2rem" pr="2rem">OPEN VENTURE</Button></Link>
  <Link to="/admin/dashboard/venture/close"><Button borderRadius={"0"}  pl="2rem" pr="2rem" bg="#1F94FF" color="white">CLOSE VENTURE </Button></Link>
  </ButtonGroup>
<Spacer />

</HStack>
</Flex>
</Flex>
<Flex mt="1rem" ml="3rem" gap="4" wrap={"wrap"}>
            <AdminVentureCard/> <AdminVentureCard/> <AdminVentureCard/>
            
            </Flex>
            </Flex>
        </Flex>
        </p>
    </>)
}

export default AdminVentureClose;