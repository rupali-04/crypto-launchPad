import { Box,Flex,Text, Button, Spacer,VStack,Wrap, WrapItem,Center } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const ProjectFundsDetails = () =>{
    
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
    <Box textAlign={"left"}><Text fontWeight={"bold"} >Wallet Balance</Text><Text fontWeight={"bold"} color={"#1F94FF"}>90,000 BUSD</Text></Box> 
    </Box>
  </WrapItem>
  <WrapItem>
    <Box w="230px" h="11vh" bg="gray.100" p="1.2rem" mr="1rem">
    <Box textAlign={"left"}><Text fontWeight={"bold"} >IDO Fund</Text><Text fontWeight={"bold"} color={"#1F94FF"}>30,000 BUSD</Text></Box> 
    </Box>
  </WrapItem>
  <WrapItem>
    <Box w="230px" h="11vh" bg="gray.100" p="1.2rem" mr="1rem">
    <Box textAlign={"left"}><Text fontWeight={"bold"} >Airdrop Fund</Text><Text fontWeight={"bold"} color={"#1F94FF"}>5000 BUSD</Text></Box> 
    </Box>
  </WrapItem>
  <WrapItem>
    <Box w="230px" h="11vh" bg="gray.100" p="1.2rem" mr="1rem">
    <Box textAlign={"left"}><Text fontWeight={"bold"} >Venture Fund</Text><Text fontWeight={"bold"} color={"#1F94FF"}>50,000 BUSD</Text></Box> 
    </Box>
  </WrapItem>
  <WrapItem>
    <Box w="230px" h="11vh" bg="gray.100" p="1.2rem" mr="1rem">
    <Box textAlign={"left"}><Text fontWeight={"bold"} >Verified User</Text><Text fontWeight={"bold"} color={"#1F94FF"}>700</Text></Box> 
    </Box>
  </WrapItem>
  <WrapItem>
    <Box w="230px" h="11vh" bg="gray.100" p="1.2rem" mr="1rem">
    <Box textAlign={"left"}><Text fontWeight={"bold"} >Unverified User</Text><Text fontWeight={"bold"} color={"#1F94FF"}>6500</Text></Box><Spacer />
    </Box>
  </WrapItem>
  <WrapItem>
    <Box w="230px" h="11vh" bg="gray.100" p="1.2rem" mr="1rem">
    <Box textAlign={"left"}><Text fontWeight={"bold"} >Pending Verification</Text><Text fontWeight={"bold"} color={"#1F94FF"}>100</Text></Box><Spacer />
    </Box>
  </WrapItem>
  <WrapItem>
    <Box w="230px" h="11vh" bg="gray.100" p="1.2rem" mr="1rem">
    <Box textAlign={"left"}><Text fontWeight={"bold"}>Total User</Text><Text fontWeight={"bold"} color={"#1F94FF"}>7450</Text></Box><Spacer />
    </Box>
  </WrapItem>
  
</Wrap>
    </>)
}

export default ProjectFundsDetails;