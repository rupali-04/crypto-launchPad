import {
    Button,HStack,Flex,Spacer, Box, ButtonGroup,InputGroup,InputLeftElement,Input
   } from '@chakra-ui/react'
 import {GrSearch} from "react-icons/gr"
import { Link } from 'react-router-dom';
 
const VentureNavBar = ({data}) =>{
    return (

        <>
        <HStack h={"max-content"}  pt="3rem">
        <Flex  w="100%" gap='2'  >
 
  
  <ButtonGroup  gap='2' variant='outline'>
    {console.log(data)}
    <Link to="/venture"><Button borderRadius='40' colorScheme={data == "upcoming" ? "twitter" : "blackAlpha"} >Upcoming Venture</Button></Link>
    <Link to="/activeVenture"><Button borderRadius='40' colorScheme={data == "active" ? "twitter" : "blackAlpha"}>Active Venture</Button></Link>
    <Button borderRadius='40' colorScheme='blackAlpha'>Ended Venture</Button>
  </ButtonGroup>
</Flex>
</HStack>

        </>
    );
}

export default VentureNavBar;
  