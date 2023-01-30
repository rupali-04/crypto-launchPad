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
import AdminMembershipNav from "../../../components/AdminMembershipNav";

const MembershipAddUser = () =>{
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
    <AdminMembershipNav/>
<Flex p="2rem" bg="lightgray" direction={"column"} w="1100px" mt="1rem" mb="2rem">
<Text>ADD USER UNDER MEMBERSHIP [MANUALLY]</Text>
   <Flex mt="2rem" gap="4">
<Flex direction={"column"} >
    <Text>Search Plan</Text>
    <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="440px"/>
</Flex>
<Flex direction={"column"}>
    <Text>Search User</Text>
    <Input bg="blue.400" color="gray.100" borderRadius={"0"} w="440px"/>
</Flex>
</Flex>
        
            <Button mt="1rem" w="max-content" colorScheme={"blue"} borderRadius="0" >Submit</Button>
           
    </Flex>
      

</Flex>
</Flex>
</Flex>

    </p>
    </>)
}

export default MembershipAddUser;