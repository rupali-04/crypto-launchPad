import { HStack,ButtonGroup,Button,Spacer } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const AdminBiddingNav = ({data}) =>{
    return(

        <>
             <HStack w={"max-content"} h={"max-content"}  pt="0" >

 
  
<ButtonGroup bg="gray.200"  gap='2' variant='unstyled' >
 
  <Button bg="#1F94FF" borderRadius={"0"} p="0.5rem" pl="2rem" pr="2rem" color="white">Pending Bid</Button>
  <Button borderRadius={"0"} p="0.5rem" pl="2rem" pr="2rem">Accepted Bid</Button>
  <Button borderRadius={"0"} p="0.5rem" pl="2rem" pr="2rem">Cancelled Bid</Button>
  </ButtonGroup>
<Spacer />

</HStack>
        </>

    )
}

export default AdminBiddingNav;