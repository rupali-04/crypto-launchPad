import { Box,Flex,Text, Button, Spacer,VStack,Wrap, WrapItem,Center } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const ProjectCommisionDetails = () =>{
    
    return(<>
        {/* <Flex  p="4"  ml="80" flexWrap="wrap" justifyContent="center" >
            <Box>
        <Flex minWidth='max-content' alignItems='center' gap='4' pb="4" >
       
            <Box bg={"blue.50"} p="6" textAlign={"center"}><Text fontWeight={"bold"} >Wallet Address</Text><Text>0x000000000000000000</Text></Box> 
            <Box bg={"blue.50"} p="6" textAlign={"center"}><Text fontWeight={"bold"} >Wallet Balance</Text><Text>$1000</Text></Box> 
            <Box bg={"blue.50"} p="6" textAlign={"center"}><Text fontWeight={"bold"} >Chain</Text><Text>Polygon</Text></Box> 
            <Box bg={"blue.50"} p="6" textAlign={"center"}><Text fontWeight={"bold"} >KYC Status</Text><Text><Link to="/dashboard/profile/kyc"><Button borderRadius='20' h={"25px"} variant='solid'  fontSize="12px"  colorScheme="red" >Pending</Button></Link></Text></Box> 
            <Box bg={"blue.50"} p="6" textAlign={"center"}><Text fontWeight={"bold"} >Membership</Text><Text><Button isActive={"false"} borderRadius='20' variant='outline'  h={"25px"}  fontSize="12px" colorScheme="green" >Active</Button></Text></Box> 
         
            </Flex></Box> 
            <Flex minWidth='max-content' alignItems='center' gap='4' >
           
            <Box bg={"blue.50"} p="6" textAlign={"center"}><Text fontWeight={"bold"} >Total IDO Investment</Text><Text>$4000</Text></Box><Spacer />
            <Box bg={"blue.50"} p="6" textAlign={"center"}><Text fontWeight={"bold"} >Airdrop Investment</Text><Text>$45263</Text></Box><Spacer />
            <Box bg={"blue.50"} p="6" textAlign={"center"}><Text fontWeight={"bold"} >No. of Airdrop</Text><Text>45</Text></Box><Spacer />
            <Box bg={"blue.50"} p="6" textAlign={"center"}><Text fontWeight={"bold"} >Honey-Bite Venture Investment</Text><Text>$6500</Text></Box><Spacer />
            
            
            </Flex>
           
            </Flex> */}
            <Wrap spacing='20px' p="1rem" pt="2rem" >
  <WrapItem>
    <Box w="230px" h="11vh" bg="gray.100" p="1.2rem" mr="1rem">
    <Box textAlign={"left"}><Text fontWeight={"bold"} >Total Commission</Text><Text fontWeight={"bold"} color={"#1F94FF"}>90,000 BUSD</Text></Box> 
    </Box>
  </WrapItem>
  <WrapItem>
    <Box w="230px" h="11vh" bg="gray.100" p="1.2rem" mr="1rem">
    <Box textAlign={"left"}><Text fontWeight={"bold"} >IDO Commission</Text><Text fontWeight={"bold"} color={"#1F94FF"}>30,000 BUSD</Text></Box> 
    </Box>
  </WrapItem>
  <WrapItem>
    <Box w="230px" h="11vh" bg="gray.100" p="1.2rem" mr="1rem">
    <Box textAlign={"left"}><Text fontWeight={"bold"} >Airdrop Commission</Text><Text fontWeight={"bold"} color={"#1F94FF"}>5000 BUSD</Text></Box> 
    </Box>
  </WrapItem>
  <WrapItem>
    <Box w="230px" h="11vh" bg="gray.100" p="1.2rem" mr="1rem">
    <Box textAlign={"left"}><Text fontWeight={"bold"} >Venture Commission</Text><Text fontWeight={"bold"} color={"#1F94FF"}>50,000 BUSD</Text></Box> 
    </Box>
  </WrapItem>
  
</Wrap>
    </>)
}

export default ProjectCommisionDetails;