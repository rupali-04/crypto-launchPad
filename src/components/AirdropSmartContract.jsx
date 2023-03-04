import { Flex,Text,Box,Divider,Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import {IoIosArrowDown} from "react-icons/io";

import { useState } from "react";
const AirdropSmartContract = () =>{
    const [show,setShow] = useState("none");
    return(

        <>
            
  <Flex w="100%" gap="10" mt="1rem" fontWeight={"bold"}>
    <Text w="200px">Honey-bite smart contract</Text>
    <Text w="200px">Project smart contract</Text>
    <Text w="200px">No of token</Text>
   
    <Text w="100px">Status</Text>
  </Flex> <Divider mt="1rem" h="0.09rem"  bg={"black"}/>
  <Flex w="100%" gap="10" mt="1rem">
    <Text w="200px">0xdafea4....98bc5</Text>
    <Text w="200px">0xdafea4....98bc5</Text>
    <Text w="200px"> 80000000</Text>
  
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

export default AirdropSmartContract;