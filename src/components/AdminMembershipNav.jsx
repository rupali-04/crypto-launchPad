import { HStack,ButtonGroup,Button,Spacer,Flex } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const AdminMembershipNav = () =>{
    return(

        <>
             <HStack  h={"max-content"}  pt="0" >

 
  
<ButtonGroup bg="gray.200" w="1150px"  gap='2' variant='unstyled' >
 
<Link to="/admin/dashboard/membership"><Button bg="#1F94FF" borderRadius={"0"} p="0.5rem" pl="2rem" pr="2rem" color="white">ADD NEW PLAN</Button></Link>
  <Link to="/admin/dashboard/membership/active"><Button borderRadius={"0"} p="0.5rem" pl="2rem" pr="2rem">ACTIVE PLAN</Button></Link>
  <Link to="/admin/dashboard/membership/adduser"><Button borderRadius={"0"} p="0.5rem" pl="2rem" pr="2rem">ADD USER</Button></Link>
  <Link to="/admin/dashboard/membership/cancel"><Button borderRadius={"0"} p="0.5rem" pl="2rem" pr="2rem">CANCEL MEMBERSHIP</Button></Link>
  </ButtonGroup>
<Spacer />

</HStack>
        </>

    )
}

export default AdminMembershipNav;