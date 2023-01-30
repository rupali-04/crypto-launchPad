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
import ProjectCommisionDetails from "../../components/ProjectCommisionDetails";

const AdminCommision = () =>{
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
 <HStack w={"max-content"} h={"max-content"}  pt="0" >

 
  
<ButtonGroup bg="gray.200" gap="4" variant='unstyled' w="1000px">
 
  <Button bg="#1F94FF" borderRadius={"0"} pl="2rem" pr="2rem" color="white">IDO PROJECT</Button>
  <Button borderRadius={"0"} pl="2rem" pr="2rem">AIRDROP PROJECT</Button>
  <Button borderRadius={"0"}  pl="2rem" pr="2rem">HONEY-BITE VENTURE PROJECT </Button>
  </ButtonGroup>
<Spacer />

</HStack>
    <ProjectCommisionDetails/>
    <Text ml="1rem" fontWeight={"bold"}>IDO Project Commission</Text>
    <Flex ml="1rem" direction={"column"}>
    
<Flex direction={"row"} bg="gray" pl="0.25rem" color="white"  w="1000px" fontWeight="bold" mt="0.5rem">
      <Text w="50px" >No</Text>  <Spacer/>
      <Text w="200px" >Project Name</Text><Spacer/>
      <Text w="200px" >Smart Contract</Text><Spacer/>
      <Text w="200px">Total Raise</Text><Spacer/>
      <Text w="200px">Commission</Text>
      <Text w="200px">Percentage</Text>
</Flex>

<Flex direction={"row"} w="1000px" mt="0.5rem" pl="0.25rem">
<Text w="50px">1</Text><Spacer/>
      <Text w="200px">Script Network</Text><Spacer/>
      <Text w="200px">0xdafea4....98bc5</Text><Spacer/>
      <Text w="200px">50,000 BUSD</Text><Spacer/>
      <Text w="200px">5000 BUSD</Text><Spacer/>
      <Text w="200px">5%</Text>
</Flex>

</Flex>
</Flex>
</Flex>
    
   </p>         
</>
   )
}

export default AdminCommision;