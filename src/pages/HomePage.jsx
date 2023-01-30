
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import Cards from '../components/Cards';
import {
   Button,HStack,Flex,Spacer, Box, ButtonGroup, Heading
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { useDisclosure} from '@chakra-ui/react';

const HomePage = () => {
    const { onOpen} = useDisclosure()
    return (<><p>
     
     <Flex ><SideBar/> <Spacer />
<Flex  flexWrap={"wrap"} ml="1rem"  w="100%"  flexDirection={"column"}>
    <NavBar data={"upcoming"}/><br></br>
  <Heading  size={"lg"} >Upcoming IDO</Heading><br></br>
  <Flex  flexWrap={"wrap"} gap='10' alignItems='center' >
 <Cards/> <Cards/> <Cards/>    </Flex>
  </Flex>
</Flex>
   </p>         
</>
           
        
    );
  }
  
  export default HomePage;
  