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
const AdminIDO = () =>{
    
  const { isOpen, onOpen, onClose } = useDisclosure();
 
return(<><p>
         <Flex><AdminBar/>
<Flex mt="1rem" ml="2rem" direction={"column"}>
 <Flex>
 <Flex m="1rem" fontSize={"24px"}></Flex><Spacer/>
     <Flex m="1rem" ><Box display='flex'   flexWrap={"wrap"} flexDirection={"column"}>
                 <Button  leftIcon={<BsPersonCircle></BsPersonCircle>} size='lg'  colorScheme='gray' fontSize={"20"} variant='outline' borderRadius='40'> 0xd23...45e78 <IconButton  fontSize={"14px"} pt="1"  aria-label='Copy button' variant={"none"} icon={<FiCopy />}/></Button> 
                 </Box>
                 </Flex>   
  
 </Flex>
   
    <Flex ml="1rem" w="100%" direction={"column"}>
    <HStack w="100%" h={"max-content"}  pt="0" >

 
  
<ButtonGroup bg="gray.200" gap="4" variant='unstyled' w="100%">
 
  <Link to="/admin/dashboard/ido"><Button bg="#1F94FF" borderRadius={"0"} pl="2rem" pr="2rem" color="white">ADD NEW PROJECT</Button></Link>
  <Link to="/admin/dashboard/ido/open"><Button borderRadius={"0"} pl="2rem" pr="2rem">OPEN PROJECT</Button></Link>
  <Link to="/admin/dashboard/ido/close"><Button borderRadius={"0"}  pl="2rem" pr="2rem">CLOSE PROJECT </Button></Link>
  </ButtonGroup>
<Spacer />

</HStack>
<Flex mt="1rem">
    <Text>SECTION 1</Text>
</Flex>
<Flex gap="8" mt="1rem">
    <Flex direction="column">
        <Text>HONEY-BITE SMART CONNECT</Text>
        <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="450px"/>
    </Flex>
    <Flex direction="column">
        <Text>TOKEN SMART CONNECT</Text>
        <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="450px"/>
    </Flex>
</Flex>

<Flex gap="8" mt="1rem">
    <Flex direction={"column"} >
        <Text>PROJECT OR, TOKEN NAME</Text>
        <Input  bg="blue.400" color="gray.100" borderRadius={"0"} w="450px"/>

    </Flex>
    <Flex direction={"column"} mr="2rem">
    <Text>TOKEN SYMBOL</Text>
    <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="450px"/>
    </Flex>
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

    <Flex mt="1rem">
    <Text>SECTION 2</Text>
    </Flex>

<Flex gap="8" mt="1rem">
    <Flex direction="column">
        <Text>FCFS OPENS</Text>
        <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="450px"/>
    </Flex>
    <Flex direction="column">
        <Text>FCFS CLOSES</Text>
        <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="450px"/>
    </Flex>
</Flex>
<Flex gap="8" mt="1rem">
    <Flex direction="column">
        <Text>EARLY ACCESS</Text>
        <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="450px"/>
    </Flex>
    <Flex direction="column">
        <Text>SWAP RATE OR TOKEN PRICE</Text>
        <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="450px"/>
    </Flex>
</Flex>
<Flex gap="8" mt="1rem">
    <Flex direction="column">
        <Text>TOTAL RAISE</Text>
        <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="450px"/>
    </Flex>
    <Flex direction="column">
        <Text>ACCESS TYPE</Text>
        <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="450px"/>
    </Flex>
</Flex>


<Flex mt="1rem">
    <Text>SECTION 3</Text>
    </Flex>
<Flex mt="1rem">
    <Box p="0.75rem" bg={"orange"} >PROJECT FAQ</Box>
</Flex>
<Flex direction={"column"}>
    <Text mt="1rem">What is SCRIPT NETWORK ?</Text>
    <Box p="1rem" w="930px" mt="0.25rem" bg="blue.400"><Text>This is a Netowrk that helps you to invest in different project without worring about the future, It is a demo project right now and a demo description I hope this will help you to understand what exactly  this section dose.</Text></Box>
</Flex>
<Flex mt="1rem">

    <Button colorScheme={"blue"} borderRadius="0" onClick={onOpen}>ADD NEW FQA</Button>
</Flex>

<Flex mt="1rem">
    <Text>SECTION 4</Text>
    </Flex>
    <Flex mt="1rem">
    <Box p="0.75rem" bg={"orange"} >TEAM & PARTNERS</Box>
</Flex>
    <Flex gap="8" mt="1rem">
    <Flex direction="column">
        <Text>Upload Team Image</Text>
        <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="450px"/>
    </Flex>
</Flex>
<Flex gap="8" mt="1rem">
    <Flex direction="column">
        <Text>Upload Partner Image</Text>
        <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="450px"/>
    </Flex>
</Flex>


<Flex mt="1rem">
    <Text>SECTION 5</Text>
    </Flex>
    <Flex mt="1rem" >
    <Box p="0.75rem" bg={"orange"} >METRICS</Box>
    
</Flex>
<Flex direction={"column"} mt="1rem">
<Text>DOCUMENTED TOKEN DISTRIBUTION</Text>
    <Text>Data provided by project</Text>
</Flex>
<Flex direction={"column"} mt="1rem">
<Flex gap="8" mt="1rem">
    <Flex direction="column">
       
        <Input placeholder="Enter Name" _placeholder={{ color: 'gray.300' }} size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="450px"/>
    </Flex>
    <Flex direction="column">
        
        <Input size='md' bg="blue.400" placeholder="Enter Percentage"  _placeholder={{ color: 'gray.300' }} color="gray.100" borderRadius={"0"} w="450px"/>
    </Flex>
</Flex>

    <Flex>
    <Button borderRadius={"0"} mt="0.5rem" colorScheme={"blue"}>ADD NEW</Button>
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

export default AdminIDO;