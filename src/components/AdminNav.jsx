import { HStack,ButtonGroup,Button,Spacer } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const AdminNav = ({data}) =>{
    return(

        <>
             <HStack w={"max-content"} h={"max-content"}  p={"2"} pt="0" >

 
  
<ButtonGroup  gap='2' variant='outline'>
 
  <Button borderRadius='40' colorScheme={data === "ido" ? "twitter" : "blackAlpha"}>IDO Project Fund Details</Button>
  <Button borderRadius='40' colorScheme={data === "airdrop" ? "twitter" : "blackAlpha"}>Airdrop Fund Details</Button>
  <Button borderRadius='40' colorScheme={data === "venture" ? "twitter" : "blackAlpha"}>Honey-Bite Fund Venture Details</Button>
  </ButtonGroup>
<Spacer />

</HStack>
        </>

    )
}

export default AdminNav;