import { HStack,ButtonGroup,Button,Spacer } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const AdminUserNav = () =>{
    return(

        <>
             <HStack w={"max-content"} h={"max-content"}  pt="0" >

 
  
<ButtonGroup bg="gray.200"  gap='2' variant='unstyled' >
 
  <Link to="/admin/dashboard/user"><Button bg="#1F94FF" borderRadius={"0"} p="0.5rem" pl="2rem" pr="2rem" color="white">All User</Button></Link>
  <Link to="/admin/dashboard/user/unverified"><Button borderRadius={"0"} p="0.5rem" pl="2rem" pr="2rem">Unverified User</Button></Link>
  <Link to="/admin/dashboard/user/verified"><Button borderRadius={"0"} p="0.5rem" pl="2rem" pr="2rem">Verified User</Button></Link>
  <Link to="/admin/dashboard/user/pending"><Button borderRadius={"0"} p="0.5rem" pl="2rem" pr="2rem">Pending Verification</Button></Link>
  </ButtonGroup>
<Spacer />

</HStack>
        </>

    )
}

export default AdminUserNav;