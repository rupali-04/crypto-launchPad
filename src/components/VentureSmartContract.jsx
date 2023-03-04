import { Flex,Text,Box,Divider,Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import {IoIosArrowDown} from "react-icons/io";

import { useState } from "react";
const VentureSmartContract = () =>{
    const [show,setShow] = useState("none");
    return(

        <>
            
  <Flex w="100%" gap="10" mt="1rem" fontWeight={"bold"}>
    <Text w="150px">Honey-bite smart contract</Text>
    <Text w="150px">Project smart contract</Text>
    <Text w="150px">No of token</Text>
    <Text w="150px">Total Amount</Text>
    <Text w="150px">Insurance Lock</Text>
    <Text w="100px">Locked Time</Text>
    <Text w="100px">Status</Text>
  </Flex> <Divider mt="1rem" h="0.09rem"  bg={"black"}/>
  <Flex w="100%" gap="10" mt="1rem">
    <Text w="150px">0xfafea4....99bc5</Text>
    <Text w="150px">0xeafea4....78bc5</Text>
    <Text w="150px"> 80000000</Text>
    <Text w="150px">200 BNB</Text>
    <Text w="150px">30%</Text>
    <Text w="100px">90 Days</Text>
    <Flex direction={"column"} w="100px"><Button  fontWeight={"300"} color="white"  bg="#1F94FF" onClick={()=>{show === "visible" ? setShow("none") :setShow("visible")}} variant={"unstyled"} borderRadius="0" mt="-0.5rem" w="120px" rightIcon={<IoIosArrowDown/>} >Pending</Button>
   <Box display={show}>
   <Button bg="gray.100" fontWeight={"300"}  variant={"unstyled"} borderRadius="0" mt="0.5rem" w="120px" mb="1rem">Accept Bid</Button><Button bg="gray.100" fontWeight={"300"} variant={"unstyled"} borderRadius="0" mt="-0.5rem" w="120px" >Cancel Bid</Button>
   </Box>
   </Flex>
  </Flex>
  <Flex>

  </Flex>

        </>

    )
}

export default VentureSmartContract;