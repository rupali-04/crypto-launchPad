import {
    Button,HStack,Flex,Spacer, Box, ButtonGroup,InputGroup,InputLeftElement,Input
   } from '@chakra-ui/react'
 import {GrSearch} from "react-icons/gr"
import { Link } from 'react-router-dom';
 
const NavBar = ({data}) =>{
    return (

        <>
        <HStack h={"max-content"}   pt="3rem" >
<Flex  w="100%" gap='2'  >
 
  
  <ButtonGroup  gap='2' variant='outline'>
    
    <Link to="/"><Button borderRadius='40' colorScheme={data == "upcoming" ? "twitter" : "blackAlpha"} >Upcoming IDO</Button></Link>
    <Link to="/active"><Button borderRadius='40' colorScheme={data == "active" ? "twitter" : "blackAlpha"}>Active IDO</Button></Link>
    <Button borderRadius='40' colorScheme='blackAlpha'>Ended IDO</Button>
  </ButtonGroup><Spacer />
  <Box mr={"4"} > 
  {/* <Button mr="4" borderRadius='40' leftIcon={<GrSearch></GrSearch>} variant='outline' colorScheme='black'>Search</Button> */}
  <InputGroup >
    <InputLeftElement
      pointerEvents='none'
      children={<GrSearch color='gray.300' />}
    />
    <Input borderRadius={"40"} w={"130px"}  type='search' placeholder='Search' />
  </InputGroup>
  </Box>
</Flex>
</HStack>

        </>
    );
}

export default NavBar;
  