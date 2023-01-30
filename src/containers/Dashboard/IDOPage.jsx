import SideBar from "../../components/SideBar";
import { Text,Flex,HStack, Box, Button,Modal,ModalContent,ModalOverlay,ModalHeader,ModalCloseButton,ModalBody,ModalFooter } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react";
import DashboardNav from "../../components/DashboardNav";
import WalletDetails from "../../components/WalletDetails";
import { useDisclosure } from "@chakra-ui/react";

const IDOPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
   
   

    return(<><p><Flex><SideBar />
    <Flex flexWrap={"wrap"} flexDirection={"column"} w="100%">
        <WalletDetails/>
    <DashboardNav data="ido"/>
    <Flex p="2"  flexWrap="wrap" justifyContent={"flex-start"}  >
    <HStack spacing={"20"}  w={"max-content"} h={"max-content"} textAlign="center" p="2"  >

<Box 
><Text fontWeight={"bold"} size={"sm"}>Project Name</Text><Box pt="2"><Button onClick={onOpen} variant={"none"} size={"sm"} color="blue.400">MUON NETWORK</Button></Box><Box pt="2"><Button onClick={onOpen} variant={"none"} size={"sm"} color="blue.400">MUON NETWORK</Button></Box></Box> 
<Box ><Text fontWeight={"bold"}  size={"sm"}>IDO Price</Text><Text pt="4" size={"sm"}>$0.02</Text><Text pt="4"  size={"sm"}>$0.02</Text></Box>
<Box><Text fontWeight={"bold"} size={"sm"}>Total Holding</Text><Text pt="4" size={"sm"}>$6250</Text><Text pt="4" size={"sm"}>$6250</Text></Box>
<Box><Text fontWeight={"bold"} size={"sm"}>No. of Token</Text><Text pt="4"  size={"sm"}>325,000</Text><Text pt="4" size={"sm"}>325,000</Text></Box>
<Box><Text fontWeight={"bold"} size={"sm"}>Total Claimed</Text><Text pt="4" size={"sm"}>25%</Text><Text pt="4" size={"sm"}>25%</Text></Box>
<Box><Text fontWeight={"bold"} size={"sm"}>Add Token to Metamask</Text><Box pt="2"><Button size={"sm"}  colorScheme="blackAlpha">Add</Button></Box><Box pt="2"><Button size={"sm"} colorScheme="blackAlpha">Add</Button></Box></Box>
</HStack>


</Flex>
</Flex>
</Flex>
<Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered size={"3xl"}>
        <ModalOverlay bg={"blackAlpha.400"}/>
        <ModalContent fontFamily={'Inter'}>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
           <Flex direction="column">
           <Box>
            <Flex gap={"10"} justifyContent={"center"}>
                <Box textAlign={"center"}><Text fontWeight={"bold"}>NO</Text><Text>1</Text><Text>2</Text></Box>
                <Box textAlign={"center"}><Text fontWeight={"bold"}>Allocation</Text><Text>$10000</Text><Text>$100</Text></Box>
                <Box textAlign={"center"}><Text fontWeight={"bold"}>Percentage</Text><Text>25%</Text><Text>5%</Text></Box>
                <Box textAlign={"center"}><Text fontWeight={"bold"}>IDOStartDate</Text><Text>24-12-2022</Text><Text>29-12-2022</Text></Box>
                <Box textAlign={"center"}><Text fontWeight={"bold"}>Clamied</Text><Text>81,125</Text><Text>0</Text></Box>
                <Box textAlign={"center"}><Text fontWeight={"bold"}>Action</Text><Text>Complete</Text><Button size={"sm"}  colorScheme="twitter">Claim Tokens</Button></Box>
            </Flex>
            </Box>
           
           </Flex>
          </ModalBody>

          <ModalFooter>
           
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </p></>);
}

export default IDOPage