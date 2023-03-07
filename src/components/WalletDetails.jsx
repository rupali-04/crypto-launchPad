import { Box,Flex,Text, Button, Spacer,VStack,Wrap, WrapItem,Center } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { ethers } from "ethers";
import { useEffect, useState } from "react";


const WalletDetails = (data) =>{
    const wallet = useSelector(state => state.wallet);
    const [balance,setBalance] = useState(0);
    
    useEffect(()=>{
        async function bal() {
            console.log("wwwww",await wallet.signer.getBalance());
            setBalance(await wallet.signer.getBalance());    
           
        }
        bal();
    },[wallet]);
    
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
            <Flex wrap={"wrap"} direction="row" p="2rem"  >
    
    <Box bg="gray.100" textAlign={"center"} p="1.5rem"><Text fontWeight={"bold"} >Wallet Address</Text><Text fontWeight={"bold"} color={"#1F94FF"}>{`${wallet.address}`}</Text></Box> <Spacer/>
    

  
    <Box bg="gray.100" textAlign={"center"} p="1.5rem"><Text fontWeight={"bold"} >Wallet Balance</Text><Text fontWeight={"bold"} color={"#1F94FF"}>{`${ethers.utils.formatEther(balance)}`}</Text></Box> <Spacer/>
 
 
    <Box bg="gray.100" textAlign={"center"} p="1.5rem"><Text fontWeight={"bold"} >Chain</Text><Text fontWeight={"bold"} color={"#1F94FF"}>{`${wallet.chainId}`}</Text></Box> <Spacer/>
   
 
    <Box bg="gray.100" textAlign={"center"} p="1.5rem"><Text fontWeight={"bold"} >KYC Status</Text><Text><Link to="/dashboard/profile/kyc">{data.data.kycStatus ? <Button isActive={"false"} borderRadius='20' variant='outline'  h={"25px"}  fontSize="12px" colorScheme="green" >Active</Button> : <Button borderRadius='20' h={"25px"} variant='solid'  fontSize="12px"  colorScheme="red" >Pending</Button>}</Link></Text></Box> <Spacer/>
   
  
    <Box bg="gray.100" textAlign={"center"} p="1.5rem"><Text fontWeight={"bold"} >Membership</Text><Text >{data.data.membershipStatus ? <Button isActive={"false"} borderRadius='20' variant='outline'  h={"25px"}  fontSize="12px" colorScheme="green" >Active</Button> : <Button borderRadius='20' h={"25px"} variant='solid'  fontSize="12px"  colorScheme="red" >Pending</Button>}</Text></Box> <Spacer/>
   </Flex>
   <Flex wrap={"wrap"} direction="row" p="2rem" pt="1rem">
  
    <Box bg="gray.100" textAlign={"center"} p="1.5rem"><Text fontWeight={"bold"} >Total IDO Investment</Text><Text fontWeight={"bold"} color={"#1F94FF"}>{data.data.totalIDOInvestment.Ethereum} FTM</Text></Box><Spacer/>
   
 
    <Box bg="gray.100" textAlign={"center"} p="1.5rem"><Text fontWeight={"bold"} >Airdrop Investment</Text><Text fontWeight={"bold"} color={"#1F94FF"}>{data.data.totalAirdropInvestment.Ethereum} FTM</Text></Box><Spacer/>
   
 
    <Box bg="gray.100" textAlign={"center"} p="1.5rem"><Text fontWeight={"bold"}>No. of Airdrop</Text><Text fontWeight={"bold"} color={"#1F94FF"}>{data.data.totalAirdrops.Ethereum}</Text></Box><Spacer/>
   
  
    <Box bg="gray.100" textAlign={"center"} p="1.5rem"><Text fontWeight={"bold"} >Honey-Bite Venture Investment</Text><Text fontWeight={"bold"} color={"#1F94FF"}>{data.data.totalVentureInvestment.Ethereum} FTM</Text></Box><Spacer/>
   
</Flex>
    </>)
}

export default WalletDetails;