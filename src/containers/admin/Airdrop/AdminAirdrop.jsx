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
const AdminAirdrop = () =>{
    
  const { isOpen, onOpen, onClose } = useDisclosure();
 
return(<><p>
         <Flex flexWrap={"wrap"}><AdminBar/>
<Flex flexWrap={"wrap"} ml="2rem"  overflowX={"auto"} flexDirection={"column"}>
 <Flex wrap={"wrap"}>
 <Flex m="1rem" fontSize={"24px"}></Flex><Spacer/>
     <Flex m="1rem" wrap={"wrap"}><Box display='flex'   flexWrap={"wrap"} flexDirection={"column"}>
                 <Button  leftIcon={<BsPersonCircle></BsPersonCircle>} size='lg'  colorScheme='gray' fontSize={"20"} variant='outline' borderRadius='40'> 0xd23...45e78 <IconButton  fontSize={"14px"} pt="1"  aria-label='Copy button' variant={"none"} icon={<FiCopy />}/></Button> 
                 </Box>
                 </Flex>   
  
 </Flex>
   
    <Flex ml="1rem" flexWrap={"wrap"} direction={"column"} >
    <HStack w={"max-content"} h={"max-content"} flexWrap={"wrap"}  pt="0" >

 
  
<ButtonGroup bg="gray.200" gap="4" variant='unstyled' w="1100px">
 
  <Link to="/admin/dashboard/airdrop"><Button bg="#1F94FF" borderRadius={"0"} pl="2rem" pr="2rem" color="white">ADD NEW AIRDROP</Button></Link>
  <Link to="/admin/dashboard/airdrop/open"><Button borderRadius={"0"} pl="2rem" pr="2rem">OPEN AIRDROP</Button></Link>
  <Link to="/admin/dashboard/airdrop/close"><Button borderRadius={"0"}  pl="2rem" pr="2rem">CLOSE AIRDROP</Button></Link>
  </ButtonGroup>
<Spacer />

</HStack>
<Flex mt="1rem" flexWrap={"wrap"}>
    <Text>SECTION 1</Text>
</Flex>
<Flex gap="8" mt="1rem" flexWrap={"wrap"}>
    <Box direction="column" >
        <Text>HONEY-BITE SMART CONNECT</Text>
        <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="450px"/>
    </Box>
    <Box direction="column">
        <Text>TOKEN SMART CONNECT</Text>
        <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="450px"/>
    </Box>
</Flex>

<Flex gap="8" mt="1rem" wrap={"wrap"} >
    <Box wrap={"wrap"} direction={"column"} >
        <Text>PROJECT OR, TOKEN NAME</Text>
        <Input  bg="blue.400" color="gray.100" borderRadius={"0"} w="450px"/>

    </Box>
    <Box wrap={"wrap"} direction={"column"} mr="2rem">
    <Text>TOKEN SYMBOL</Text>
    <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="450px"/>
    </Box>
</Flex>
<Flex direction="column" mt="1rem">
    <Text>PROJECT SHORT DETAILS</Text>
    <Textarea  bg="blue.400" color="gray.100" borderRadius={"0"} w="930px"/>
</Flex>
<Flex gap="4" mt="1rem">
    <Flex direction={"column"} >
        <Text>CLIFF PERIOD</Text>
        <Input  bg="blue.400" color="gray.100" borderRadius={"0"} w="300px"/>

    </Flex>
    <Flex direction={"column"} >
    <Text>TGE[PERCENTAGE]</Text>
    <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="300px"/>
    </Flex>
    <Flex direction={"column"} mr="2rem">
    <Text>LINEAR VEST [PERCENTAGE]</Text>
    <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="300px"/>
    </Flex>
</Flex>
<Flex gap="8" mt="1rem">
    <Flex direction="column">
        <Text>KYC REQUIREMENTS</Text>
        <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="450px"/>
    </Flex>
    <Flex direction="column">
        <Text>INSURANCE</Text>
        <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="450px"/>
    </Flex>
</Flex>


<Flex gap="8" mt="1rem">
    <Flex direction="column">
        <Text>Social Media</Text>
        <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="930px"/>
    </Flex></Flex>

    <Flex direction="column" mt="1rem">
    <Text>STEP-BY-STEP GUIDE</Text>
    <Textarea  bg="blue.400" color="gray.100" borderRadius={"0"} w="930px"/>
</Flex>

<Flex  mt="1rem" gap="8">
    <Flex direction="column">    <Text w="450px">PRIZE MONEY</Text>
    <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} />
    <Button borderRadius={"0"} mt="0.5rem" mb="2rem" colorScheme={"blue"}>ADD NEW</Button>
    </Flex>
    <Flex direction="column">    <Text>TOKEN PRICE</Text>
    <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="450px"/>
    <Text mt="1rem">MAXIMUM INVESTMENT</Text>
    <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="450px"/>
    
    </Flex>

</Flex>


<Flex mt="1rem">
    <Button borderRadius={"0"} mt="0.5rem" mb="2rem" colorScheme={"blue"}>Submit</Button>
    </Flex>

<Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose} isCentered >
        <ModalOverlay bg={"blackAlpha.400"}/>
        <ModalContent bg="blue.400" color={"black"} fontFamily={'Inter'} borderRadius="0">
          <ModalCloseButton/>
          <ModalBody p="0">
            <Flex p="1rem" w="max-content" direction={"column"}>
            <Text color={"white"}>Enter Your Question</Text>
            <Input borderRadius={"0"}  bg="gray.200" />
            </Flex>
            <Flex p="1rem" w="max-content" direction={"column"}>
            <Text color="white">Enter Your Answer</Text>
            <Textarea borderRadius={"0"} bg="gray.200" />
            </Flex>
          </ModalBody>   
          <ModalFooter>
            <Button colorScheme={"blackAlpha"} onClick={onOpen}>Save</Button>
        </ModalFooter>       
        </ModalContent>
      </Modal>
    

</Flex>
</Flex>
</Flex>

    </p></>)
}

export default AdminAirdrop;