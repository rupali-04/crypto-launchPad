import { HStack,ButtonGroup,Flex,Text, Avatar,Box,Button ,IconButton,Spacer,Wrap,WrapItem,Center, Divider} from "@chakra-ui/react";
import Logo from "../images/Logo.jpg";
import {TfiWallet} from 'react-icons/tfi';
import {BsPersonCircle} from 'react-icons/bs';
import {FiCopy} from 'react-icons/fi';
import CompanySmartContractNav from "../components/CompanySmartContractNav";
import DashboardNav from "../components/DashboardNav";
import {IoIosArrowDown} from "react-icons/io";
import AdminNav from "../components/AdminNav";
import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import AdminBiddingNav from "../components/AdminBiddingNav";
import AdminInsuranceNav from "../components/AdminInsuranceNav";
import IDOSmartContract from "../components/IDOSmartContract";
import AirdropSmartContract from "../components/AirdropSmartContract";
import VentureSmartContract from "../components/VentureSmartContract";
const CompanyPanel = () =>{
  const [contract,setContract] = useState("ido"); 
  const [show,setShow] = useState("none");
    return(<>
    <Flex fontFamily={'Inter'} direction={"column"} w="100%" p="1rem">
    <Flex>
    <Flex m="1rem" fontSize={"24px"}><Avatar src={Logo} size="lg"></Avatar><Flex direction={"column"} mt="0.35rem"><Text mt="0.25rem">HoneyBite</Text><Text mt="-0.30rem" fontSize="10px">A Revolution For New Era</Text></Flex></Flex><Spacer/>
     <Flex m="1rem"><Box display='flex'   flexWrap={"wrap"} flexDirection={"column"}>
                 <Button  leftIcon={<BsPersonCircle></BsPersonCircle>} size='lg'  colorScheme='gray' fontSize={"20"} variant='outline' borderRadius='40'> 0xd23...45e78 <IconButton  fontSize={"14px"} pt="1"  aria-label='Copy button' variant={"none"} icon={<FiCopy />}/></Button> 
                 <Box fontWeight={"bold"} ml="2rem" p="0.5rem" mt="0.25rem" w="150px" textAlign={"left"} fontSize='md' bg="gray.200"><Flex><Text>Chain : </Text><Text ml="0.2rem" color="blue.500">Binance</Text></Flex> </Box>
                 <Box fontWeight={"bold"} ml="2rem" p="0.5rem" mt="0.25rem" w="150px" textAlign={"left"} fontSize='lg' bg="gray.200"><Text>Logout </Text></Box>
                 </Box></Flex>   
    </Flex>
    <Flex  flexWrap="wrap" direction={"column"} alignItems={"center"}  >
    <Wrap  spacing='5rem'   >
  <WrapItem >
    <Center bg="gray.100" p="1rem" fontSize={"18px"}>
    <Box w="200px"><Text fontWeight={"bold"} >IDO Fund</Text><Text fontWeight={"bold"} color={"#1F94FF"}>30,000 USD</Text></Box> 
    </Center>
  </WrapItem>
  <WrapItem>
    <Center bg='gray.100' p="1rem" fontSize={"18px"}>
    <Box w="200px"><Text fontWeight={"bold"} >Airdrop Fund</Text><Text fontWeight={"bold"} color={"#1F94FF"}>300 USD</Text></Box> 
    </Center>
  </WrapItem>
  <WrapItem>
    <Center bg='gray.100' p="1rem" fontSize={"18px"}>
    <Box w="200px"><Text fontWeight={"bold"} >Venture Fund</Text><Text fontWeight={"bold"} color={"#1F94FF"}>30,000 USD</Text></Box> 
    </Center>
  </WrapItem>
  
</Wrap>
<Box mt="2rem" a><Box ><AdminNav data="ido"/></Box>
<Flex fontWeight={"bold"} bg="gray.200" p="0.5rem" gap="9">
<Text  w="50px">No</Text>
<Text  w="200px">Sender</Text>
<Text  w="200px">Receiver</Text>
<Text  w="200px">No of Token</Text>
<Text  w="200px">Amount</Text>
</Flex>
<Flex p="0.5rem" bg="gray.100" gap="9">
<Text  w="50px">1</Text>
<Text  w="200px">0x124854....4486484</Text>
<Text  w="200px">0x124854....4486484</Text>
<Text  w="200px">120,000</Text>
<Text  w="200px">15000 USD</Text>
</Flex>

<Flex p="0.5rem" bg="gray.100" gap="9">
<Text  w="50px">2</Text>
<Text  w="200px">0x124854....4486484</Text>
<Text  w="200px">0x124854....4486484</Text>
<Text  w="200px">120,000</Text>
<Text  w="200px">15000 USD</Text>
</Flex>
<Flex gap="4" justifyContent={"end"}><Button variant={"unstyled"} h="0">Previous Page</Button><Text color="blue.500">1</Text><Text>2</Text><Button h="0" variant={"unstyled"}>Next Page</Button></Flex>
<Flex direction={"column"} p="2rem"><Text pb="1rem" fontWeight={"bold"} fontSize="18px">Honey-Bite Venture Biding Details</Text>
<AdminBiddingNav/>
<Flex direction={"column"}>
  <Flex pt="1rem">
    <Text w="150px">Bidding Profile</Text><Spacer/>
    <Text w="150px">Project Name</Text><Spacer/>
    <Text w="150px">Bidding Price</Text><Spacer/>
    <Text w="150px">Bidding Amount</Text><Spacer/>
    <Text w="150px">Bidding Status</Text><Spacer/>
    </Flex><Divider h="0.095rem" mt="0.5rem" bg={"black"}/>
    <Flex pt="1rem">
    <Text w="150px">0xADFG....32e23</Text><Spacer/>
    <Text w="150px">Script Network</Text><Spacer/>
    <Text w="150px">0.01 BUSD</Text><Spacer/>
    <Text w="150px">$10,500</Text><Spacer/>
   <Flex direction={"column"} w="150px"><Button  fontWeight={"300"} color="white"  bg="#1F94FF" onClick={()=>{show === "visible" ? setShow("none") :setShow("visible")}} variant={"unstyled"} borderRadius="0" mt="-0.5rem" w="120px" rightIcon={<IoIosArrowDown/>} >Pending</Button>
   <Box display={show}>
   <Button bg="gray.100" fontWeight={"300"}  variant={"unstyled"} borderRadius="0" mt="0.5rem" w="120px" mb="1rem">Accept Bid</Button><Button bg="gray.100" fontWeight={"300"} variant={"unstyled"} borderRadius="0" mt="-0.5rem" w="120px" >Cancel Bid</Button>
   </Box>
   </Flex><Spacer/>
   
    </Flex>

</Flex>


</Flex>
<Flex direction={"column"} p="2rem">
  <Text fontWeight={"bold"}  fontSize="18px" >INSURANCE AMOUNT CLAIM</Text>
  <Box mt="1rem"><AdminInsuranceNav/></Box>
  <Flex w="100%" gap="10" mt="1rem" fontWeight={"bold"}>
    <Text w="100px">No</Text>
    <Text w="100px">Project Name</Text>
    <Text w="150px">Smart Contract</Text>
    <Text w="100px">Total Raised</Text>
    <Text w="150px">Insurance Lock</Text>
    <Text w="150px">Available Amount</Text>
    <Text w="100px">Claim Details</Text>
    <Text w="100px">Locked Time</Text>
  </Flex> <Divider mt="1rem" h="0.09rem"  bg={"black"}/>
  <Flex w="100%" gap="10" mt="1rem">
    <Text w="100px">1</Text>
    <Text w="100px">Script Network</Text>
    <Text w="150px">0xdafea4....98bc5 </Text>
    <Text w="100px">200 FTM</Text>
    <Text w="150px">20 FTM</Text>
    <Text w="150px">25 FTM</Text>
    <Button w="100px" size={"sm"} bg="blue.400" color={"white"} borderRadius="40px">Claim Amount</Button>
    <Text w="100px">90 Days</Text>
  </Flex>
  <Flex>

  </Flex>
  <Flex direction={"column"} pt="2rem">
  <Text fontWeight={"bold"}  fontSize="18px" >SMART CONTRACT DETAILS</Text>
  <Box  mt="1rem"> <HStack w={"max-content"} h={"max-content"}  pt="0" >

 
<ButtonGroup  bg="gray.200"  gap={"4"}variant='unstyled'>
 
  {contract === "ido" ? <Button bg="#1F94FF" borderRadius={"0"} p="0.5rem" pl="2rem" pr="2rem" onClick={()=>{setContract("ido")}} color="white">IDO SMART CONTRACT</Button> : <Button bg="gray.200" borderRadius={"0"} p="0.5rem" pl="2rem" pr="2rem" onClick={()=>{setContract("ido")}} >IDO SMART CONTRACT</Button>}
  {contract === "airdrop" ? <Button bg="#1F94FF" color="white" borderRadius={"0"} p="0.5rem" pl="2rem" pr="2rem" onClick={()=>{setContract("airdrop")}}>AIRDROP SMART CONTRACT</Button> : <Button bg="gray.200" borderRadius={"0"} p="0.5rem" pl="2rem" pr="2rem" onClick={()=>{setContract("airdrop")}}>AIRDROP SMART CONTRACT</Button>}
  {contract === "venture" ? <Button bg="#1F94FF" color="white" borderRadius={"0"} p="0.5rem" pl="2rem" pr="2rem" onClick={()=>{setContract("venture")}}>VENTURE SMART CONTRACT</Button> : <Button bg="gray.200" borderRadius={"0"} p="0.5rem" pl="2rem" pr="2rem" onClick={()=>{setContract("venture")}}>VENTURE SMART CONTRACT</Button>}
  </ButtonGroup>
<Spacer />

</HStack></Box>
  {contract === "ido" ? <IDOSmartContract/> : contract === "airdrop" ? <AirdropSmartContract/> : contract === "venture" ? <VentureSmartContract/> : ""}
  </Flex>
</Flex>

</Box>

</Flex>
    </Flex>
    </>)
}

export default CompanyPanel;