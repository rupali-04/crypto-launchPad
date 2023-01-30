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

const MembershipPlanEdit = () =>{
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
<Flex bg="lightgray" direction={"column"} w="1100px" mt="1rem" mb="2rem">
   <Text bg="gray" textAlign={"center"} color="white">PLAN DETAILS</Text>
   <Flex justifyContent={"center"} gap="4" mt="1rem">

    <Link to="/admin/dashboard/membership/edit"><Button colorScheme={"blue"} borderRadius="0">PLAN INFORMATION</Button></Link>
   <Link to={"/admin/dashboard/membership/users"}> <Button colorScheme={"blackAlpha"} borderRadius="0">USER INFORMATION</Button></Link>
   </Flex>
   <Flex mt="2rem" justifyContent={"space-between"}>
<Flex direction={"column"} >
    <Text>Plan Name</Text>
    <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="540px"/>
</Flex>
<Flex direction={"column"}>
    <Text>Membership Plan Type</Text>
    <Input bg="blue.400" color="gray.100" borderRadius={"0"} w="540px"/>
</Flex>
</Flex>
<Flex mt="2rem" justifyContent={"space-between"}>
<Flex direction={"column"} >
    <Text>Plan Price</Text>
    <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="540px"/>
</Flex>
<Flex direction={"column"}>
    <Text>No of IDO</Text>
    <Input bg="blue.400" color="gray.100" borderRadius={"0"} w="540px"/>
</Flex>
</Flex>
<Flex direction="column" mt="1rem" >
    <Text>PROJECT SHORT DETAILS</Text>
    <Textarea  bg="blue.400" color="gray.100" borderRadius={"0"} w="1100px"/>
</Flex>
<Flex mt="2rem" justifyContent={"space-between"}>
<Flex direction={"column"} >
    <Text>Investment Limit</Text>
    <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="540px"/>
</Flex>
<Flex direction={"column"}>
    <Text>Early Access</Text>
    <Input bg="blue.400" color="gray.100" borderRadius={"0"} w="540px"/>
</Flex>
</Flex>
<Flex mt="2rem" justifyContent={"space-between"}>
<Flex direction={"column"} >
    <Text>Time Limit</Text>
    <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="540px"/>
</Flex>
<Flex direction={"column"}>
    <Text>Bidding Limit</Text>
    <Input bg="blue.400" color="gray.100" borderRadius={"0"} w="540px"/>
</Flex>
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

export default MembershipPlanEdit;