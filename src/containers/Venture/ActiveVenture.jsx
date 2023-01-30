
import SideBar from '../../components/SideBar';
import VentureNavBar from '../../components/VentureNavBar';
import VentureCard from '../../components/VentureCard';
import {
   Button,HStack,Flex,Spacer, Box, ButtonGroup, Heading
  } from '@chakra-ui/react'
import {GrSearch} from "react-icons/gr"
import { useDisclosure} from '@chakra-ui/react';

const ActiveVenture = () => {
    const { onOpen} = useDisclosure()
    return (
        <p>
            <Flex><SideBar/><Spacer />
<Flex flexWrap={"wrap"} ml="1rem"  w="100%"  flexDirection={"column"}>
    <VentureNavBar data={"active"}/><br></br>
  <Heading size={"lg"} >Active Venture Projects</Heading><br></br>
  <Flex flexWrap={"wrap"} gap='10' alignItems='center' >
  <VentureCard/> <VentureCard/> <VentureCard/> <VentureCard/> <VentureCard/> <VentureCard/>    </Flex>
  </Flex>
</Flex>


            
            
           
        </p>
    );
  }
  
  export default ActiveVenture;
  