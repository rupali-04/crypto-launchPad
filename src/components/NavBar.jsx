import {
    Button,HStack,Flex,Spacer, Box, ButtonGroup,InputGroup,InputLeftElement,Input
   } from '@chakra-ui/react'
 import {GrSearch} from "react-icons/gr"
 
const NavBar = () =>{
    return (

        <>
        <HStack w={"max-content"} h={"max-content"}  p={"2"} pt="20">
<Flex minWidth='165vh' alignItems='center' gap='2'>
 
  
  <ButtonGroup  gap='2' variant='outline'>
    <Button borderRadius='40' colorScheme='twitter' >Upcoming IDO</Button>
    <Button borderRadius='40' colorScheme='black'>Active IDO</Button>
    <Button borderRadius='40' colorScheme='black'>Ended IDO</Button>
  </ButtonGroup><Spacer />
  <Box mr={"4"}>
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
  