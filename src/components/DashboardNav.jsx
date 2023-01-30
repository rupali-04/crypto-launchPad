import { HStack,ButtonGroup,Button,Spacer } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const DashboardNav = ({data}) =>{
    return(

        <>
             <HStack w={"max-content"} h={"max-content"}  p={"2"} pt="0" >

 
  
<ButtonGroup  gap='2' variant='outline'>
 
  <Link to="/dashboard"><Button borderRadius='40' colorScheme={data === "ido" ? "twitter" : "blackAlpha"}>IDO Project Details</Button></Link>
  <Link to="/dashboard/airdrop"><Button borderRadius='40' colorScheme={data === "airdrop" ? "twitter" : "blackAlpha"}>Airdrop Details</Button></Link>
  <Link to="/dashboard/venture"><Button borderRadius='40' colorScheme={data === "venture" ? "twitter" : "blackAlpha"}>Honey-Bite Venture Details</Button></Link>
  </ButtonGroup>
<Spacer />

</HStack>
        </>

    )
}

export default DashboardNav;