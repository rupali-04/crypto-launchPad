import SideBar from "../../components/SideBar";
import { Text,Flex,HStack, Box, Button,Modal,ModalContent,ModalOverlay,ModalHeader,ModalCloseButton,ModalBody,ModalFooter, Divider } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import DashboardNav from "../../components/DashboardNav";
import WalletDetails from "../../components/WalletDetails";
import { useDisclosure } from "@chakra-ui/react";

const DashboardAirdrop = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(<><p><Flex><SideBar/>
     <Flex flexWrap={"wrap"} flexDirection={"column"}>
        <WalletDetails/>
        <DashboardNav data="airdrop"/>
        <Flex p="2"  flexWrap="wrap" justifyContent={"flex-start"}  >
    <HStack spacing={"20"}  w={"max-content"} h={"max-content"} textAlign="center" p="2"  >


<Box ><Text fontWeight={"bold"} size={"sm"}>Project Name</Text><Box pt="2"><Button onClick={onOpen} variant={"none"} size={"sm"} color="blue.400">MUON NETWORK</Button></Box><Box pt="2"><Button  variant={"none"} size={"sm"} color="blue.400">MUON NETWORK</Button></Box></Box> 
<Box><Text fontWeight={"bold"} size={"sm"}>Airdrop Price</Text><Text pt="4"  size={"sm"}>325,000</Text><Text pt="4" size={"sm"}>325,000</Text></Box>
<Box><Text fontWeight={"bold"} size={"sm"}>No. of Token</Text><Text pt="4"  size={"sm"}>325,000</Text><Text pt="4" size={"sm"}>325,000</Text></Box>
<Box><Text fontWeight={"bold"} size={"sm"}>Cliff Period</Text><Text pt="4" size={"sm"}>25%</Text><Text pt="4" size={"sm"}>25%</Text></Box>
<Box><Text fontWeight={"bold"} size={"sm"}>Prize Money</Text><Text pt="4"  size={"sm"}>325,000</Text><Text pt="4" size={"sm"}>325,000</Text></Box>
<Box><Text fontWeight={"bold"} size={"sm"}>Add Token to Metamask</Text><Box pt="2"><Button size={"sm"}  colorScheme="blackAlpha">Add</Button></Box><Box pt="2"><Button size={"sm"} colorScheme="blackAlpha">Add</Button></Box></Box>

</HStack>



</Flex>

</Flex>
      </Flex>

      <Modal  closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered size={"3xl"}>
        <ModalOverlay bg={"blackAlpha.400"}/>
        <ModalContent fontFamily={'Inter'}>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
           <Flex direction="column">
           <Box>
            <Flex gap={"10"} justifyContent={"center"}>
                <Box textAlign={"center"}><Text color={"gray"} >Project Name</Text></Box>
                <Box textAlign={"center"}><Text color={"gray"}>Cliff Period</Text></Box>
                <Box textAlign={"center"}><Text color={"gray"}>Clame Date</Text></Box>
                <Box textAlign={"center"}><Text color={"gray"}>Clame Prize</Text></Box>
                
                </Flex><Divider m="2" ml={"100"} mr="100" h="0.09rem" w="100" bg={"black"}/>
                <Flex gap={"10"} justifyContent={"center"} mt="0.5rem">
                <Box textAlign={"center"} mt="0.25rem"><Text>MUON NETWORK</Text></Box>
                <Box textAlign={"center"} mt="0.25rem"><Text>60 Days</Text></Box>
                <Box textAlign={"center"} mt="0.25rem"><Text>Jan 12, 2023</Text></Box>
                <Box textAlign={"center"} ><Button borderRadius={"40"} colorScheme={"blue"}>Clame Prize</Button></Box>
                
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

export default DashboardAirdrop