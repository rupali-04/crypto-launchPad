
import SideBar from '../../components/SideBar';
import VentureNavBar from '../../components/VentureNavBar';
import VentureCard from '../../components/VentureCard';
import {
   Button,HStack,Flex,Spacer, Box, ButtonGroup, Heading
  } from '@chakra-ui/react'
import {GrSearch} from "react-icons/gr"
import { useDisclosure} from '@chakra-ui/react';

const Venture = () => {
    const { onOpen} = useDisclosure()
    return (<>
        <p>
            <Flex><SideBar/><Spacer />
<Flex flexWrap={"wrap"} flexDirection={"column"} ml="1rem" w="100%">
    <VentureNavBar data={"upcoming"}/><br></br>
  <Heading size={"lg"} >Upcoming Venture Projects</Heading><br></br>
  <Flex flexWrap={"wrap"} gap='10' alignItems='center'>
  <VentureCard/> <VentureCard/> <VentureCard/>    </Flex>
  </Flex>
</Flex>
            
            
           
        </p>
        </>
    );
  }
  
  export default Venture;
  