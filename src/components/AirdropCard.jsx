import { Card,CardHeader,Input,Flex,Avatar,Spacer,Box,Heading,Text,Divider,IconButton,CardBody,CardFooter,Button, ButtonGroup,Modal,ModalContent,ModalOverlay,ModalHeader,ModalCloseButton,ModalBody,ModalFooter } from "@chakra-ui/react";
import {TiSocialLinkedin,TiSocialFacebook,TiSocialTwitter} from 'react-icons/ti';
import {FaTelegramPlane} from 'react-icons/fa';
import {AiOutlineGlobal} from 'react-icons/ai';
import { useDisclosure } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import {AABI} from '../ABIs/AABI';
import { ethers } from "ethers";
import { useState } from "react";

const AirdropCard = ({data}) =>{
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [investmentAmt,setInvestmentAmount] = useState();
  const wallet = useSelector(state => state.wallet);
  console.log(data);
  const handleInvestment = async(e) =>{
    
    const AirdropPurchase = new ethers.Contract("0xa343cF90bC6A87Ebed64A09AfC56A08D107EF4DF", AABI, wallet.signer);
    let privateKey = "0x5a188b93a4d239709fc8527012db2d0216fb127a6d17578dda348d321d0beb36"
    let w = new ethers.Wallet(privateKey);
    const timePeriod = Math.floor(new Date().getTime() / 1000.0);
    const tTokens =  ethers.utils.parseEther(`${0.0002}`)
    let com = ethers.utils.parseEther(`${0.0002}`);
    let pay = ethers.utils.parseEther(`${parseFloat(investmentAmt)}`);
    const hashData = await AirdropPurchase.getMessageHashForPurchase(wallet.address,'0x8A29B5B896020a0259C582db2443df8670C19e02',timePeriod,tTokens,com,pay);
    console.log(hashData);
    const messageHashBytes = ethers.utils.arrayify(hashData);
    let tPPrice = ethers.utils.parseEther(`${0.0002+parseFloat(investmentAmt)}`);

    const sign = await w.signMessage(messageHashBytes);
    let tx; 
    try{
      tx = await AirdropPurchase.purchaseToken(wallet.address,'0x8A29B5B896020a0259C582db2443df8670C19e02', timePeriod,tTokens.toBigInt(),com.toBigInt(),pay.toBigInt(),sign,{ value: tPPrice
      });
      tx.wait();
      console.log(tx);
    }catch(err){
      console.log(err);
    }
   
  }
  return (

        <>
            <Card  maxW={"360px"} bg={"#F1F1F1"} color="black" shadow={"0"} cursor="pointer" borderRadius={"0"}>
           
  <CardHeader p="0">
    <Box onClick={()=>{console.log("Print")}} bg="blue.400" textAlign={"center"} color="white">Price List</Box>
    <Flex p="1rem" onClick={onOpen}>
      <Flex flex='1' gap='2' alignItems='center' flexWrap='wrap'>
      
        <Box>
          <Heading size='md'>{data.data.tokenName}</Heading>
          <Text fontSize={"10"} color={"gray"}>${data.data.tokenSymbol}</Text>
         <Box h={"8px"}></Box>
          <ButtonGroup p="-2" >
          <IconButton
    bg={"#333"}
    color="white"
        mr={"-2"}
  aria-label='website-icon'
  size='sm'
  
  icon={<AiOutlineGlobal />}
/> <Spacer />
          <IconButton
    mr={"-2"}
   bg={"#333"}
   color="white"
  aria-label='inkedin-icon'
  size='sm'
  
  icon={<TiSocialLinkedin />}
/> <Spacer />
<IconButton
    mr={"-2"}
   bg={"#333"}
   color="white"
  aria-label='twitter-icon'
  size='sm'
  icon={<TiSocialTwitter />}
/> <Spacer />
<IconButton
    bg={"#333"}
    color="white"
    mr={"-2"}
  aria-label='facebook-icon'
  size='sm'
  icon={<TiSocialFacebook />}
/> <Spacer />
<IconButton
    bg={"#333"}
    color="white"
    mr={"-2"}
  aria-label='telegram-icon'
  size='sm'
  icon={<FaTelegramPlane/>}
/>
          </ButtonGroup>
        </Box>
      </Flex>
      <Avatar size={"xl"} m={"2"} name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

    </Flex>
  </CardHeader>
  <CardBody onClick={onOpen}>
    <Text fontSize={"14px"} mt="-8">
    {data.data.projectDetails}
    </Text>
  <br></br>

<Flex gap="20"> 
  
    <Text pl={"8"} fontSize={"14px"}>Starting Date</Text>
  

 
  <Text fontSize={"14px"} fontWeight={"bold"} pt="1px" >{data.data.startDate.toDate().toString().split('G')[0]}</Text>
 
</Flex>
</CardBody >
<Text bg={"#19492E"} color="white" textAlign={"center"}>Airdrop Project</Text> 
</Card>   
<Modal closeOnOverlayClick={false} isOpen={isOpen}  onClose={onClose} isCentered size={"3xl"} >
        <ModalOverlay bg={"blackAlpha.400"}/>
        <ModalContent bg="#3B72FF" color="white" borderRadius="40px">
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <Flex>
            <Flex direction={"column"}>  
              <Flex><Avatar size={"2xl"} m={"2"} name='Segun Adebayo' src='https://bit.ly/sage-adebayo' /></Flex>
              <Heading textAlign={"center"} size={"md"}>Prize Money</Heading>
              <Flex ><Text>1st $5000</Text><Spacer/><Text >1</Text></Flex>
              <Flex ><Text>2nd $3000</Text><Spacer/><Text>1</Text></Flex>
              <Flex ><Text>3rd $1250</Text><Spacer/><Text>1</Text></Flex>
              <Flex ><Text>4th $500</Text><Spacer/><Text>5</Text></Flex>
              <Flex ><Text>5th $25</Text><Spacer/><Text>25</Text></Flex>
            </Flex>
            <Flex direction={"column"} ml="1rem">

             <Flex> <Heading size={"lg"} >WeWay</Heading><Spacer/> <Flex direction={"column"} mr="3rem"><Input placeholder="Enter Investment Amount" onChange={(e)=>{setInvestmentAmount(e.target.value)}} mb="0.5rem" sx={{
        backgroundColor: 'gray.100',
        borderRadius: '40px',
        padding: '0.5rem 1rem',
        border: '1px solid gray',
        fontSize: '1rem',
       color: 'black'
      }}></Input><Button borderRadius={"40px"} colorScheme={"blackAlpha"} w="250px" onClick={(e)=>{handleInvestment(e)}}>Invest Now</Button><Text textAlign={"center"} fontSize={"12px"} color="gray.200">Maximum investment $5* </Text></Flex></Flex>

              <Text>IDO Price: 0.02 BUSD</Text>
              <Flex p="-2" gap="2">
          <IconButton
    bg={"white"}
    color="#333"
  
        mt="0.5rem"
  aria-label='website-icon'
  size='sm'
  
  icon={<AiOutlineGlobal />}
/> 
          <IconButton
   
    
    bg={"white"}
    color="#333"
    mt="0.5rem"
  aria-label='inkedin-icon'
  size='sm'
  
  icon={<TiSocialLinkedin />}
/> 
<IconButton
  
    
    bg={"white"}
    color="#333"
    mt="0.5rem"
  aria-label='twitter-icon'
  size='sm'
  icon={<TiSocialTwitter />}
/> 
<IconButton
   
   bg={"white"}
   color="#333"
    
   mt="0.5rem"
  aria-label='facebook-icon'
  size='sm'
  icon={<TiSocialFacebook />}
/> 
<IconButton
   
   bg={"white"}
   color="#333"
   size="sm"
   mt="0.5rem"
  
  aria-label='telegram-icon'
  
  icon={<FaTelegramPlane/>}
/>
          </Flex>
          <Text mt="1rem" color="gray.100" >This Project helps you to infinite scalability whilst keeping optimal decentralization from the Ethereum network.
ZKasino has confirmed to launch an own token called “ZKAS” and has very high 
potential to do an airdrop. </Text>

<Text mt="2rem">STEP-BY-STEP GUIDE</Text>
              <Text fontSize={"14px"} color="gray.100" ml="1rem" mt="0.5rem">1.Connect your Metamask Wallet</Text>
              <Text fontSize={"14px"} color="gray.100" ml="1rem">2.Invest 5 USDCT in WeWay</Text>
              <Text fontSize={"14px"} color="gray.100" ml="1rem">3.Join WeWay telegram group & channel</Text>
              <Text fontSize={"14px"} color="gray.100" ml="1rem">4.Like WeWay twitter account</Text>
            </Flex>
            <Flex>
            
            </Flex>
          </Flex>
          
           
          </ModalBody>

        <ModalFooter>
          <Text color="gray.300" fontSize={"12px"}>Terms & Conditions : Everyone get token $5 value token.</Text>
        </ModalFooter>
        </ModalContent>
      </Modal>
    
        </>
    );
}


export default AirdropCard;


