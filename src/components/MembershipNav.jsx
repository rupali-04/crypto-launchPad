import {
    Button,HStack,Flex,Spacer, Box, ButtonGroup,InputGroup,InputLeftElement,Input
   } from '@chakra-ui/react'
 import {GrSearch} from "react-icons/gr"
import { Link } from 'react-router-dom';
 
const MembershipNav = ({data}) =>{
    return (

        <>
        <HStack  h={"max-content"}  pt="3rem" >
<Flex w="100%" gap='2'>
 
  
  <ButtonGroup  gap='2' variant='outline'>
    {console.log(data)}
    <Link to="/membership/all"><Button borderRadius='40' colorScheme={data == "all" ? "twitter" : "blackAlpha"} >All Plan</Button></Link>
    <Link to="/membership/venture"><Button borderRadius='40' colorScheme={data == "venture" ? "twitter" : "blackAlpha"}>Venture Plan</Button></Link>
    <Link to="/membership/ido"><Button borderRadius='40' colorScheme={data == "ido" ? "twitter" : "blackAlpha"}>IDOs Plan</Button></Link>
  </ButtonGroup>
</Flex>
</HStack>

        </>
    );
}

export default MembershipNav;
  