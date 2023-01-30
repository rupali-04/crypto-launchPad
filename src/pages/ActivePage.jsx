import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Cards from '../components/Cards';
import {
    Button,HStack,Flex,Spacer, Box, ButtonGroup, Heading
   } from '@chakra-ui/react'
 import {GrSearch} from "react-icons/gr"
const ActivePage = () => {

    return(<><p> <Flex><SideBar/><Spacer />
    <Flex flexWrap={"wrap"} ml="1rem" w="100%" flexDirection={"column"}>
        <NavBar data={"active"}/><br></br>
      <Heading size={"lg"} >Active IDO</Heading><br></br>
      <Flex flexWrap={"wrap"} gap='10' alignItems='center'>
      <Cards/>   </Flex>
      </Flex>
    </Flex>
    
   


    </p>
                </>)
}

export default ActivePage;