
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import Cards from '../components/Cards';
import {
   Button,HStack,Flex,Spacer, Box, ButtonGroup, Heading
  } from '@chakra-ui/react'
import {GrSearch} from "react-icons/gr"
import { useDisclosure} from '@chakra-ui/react';

const HomePage = () => {
    const { onOpen} = useDisclosure()
    return (
        <div>
            <Flex><SideBar/><Spacer />
<Flex flexWrap={"wrap"} flexDirection={"column"}>
    <NavBar/><br></br>
  <Heading size={"lg"} ml="4">Upcoming IDO</Heading><br></br>
  <Flex flexWrap={"wrap"} gap='10' alignItems='center' pl={"10"}>
  <Cards/>  </Flex>
  </Flex>
</Flex>
            
            
           
        </div>
    );
  }
  
  export default HomePage;
  