import { Heading,Flex} from "@chakra-ui/react";
import KycBar from "../../../components/KycBar";
import SideBar from "../../../components/SideBar";
import KycBlock1 from "../../../components/KycBlock1";
import KycBlock2 from "../../../components/KycBlock2";
import KycBlock3 from "../../../components/KycBlock3";

const ProfileKyc = () =>{

return (<><div>
    <Flex><SideBar/>
<Flex flexWrap={"wrap"} flexDirection={"column"} ><br></br>
<Heading size={"lg"} ml="2rem">KYC Verification</Heading>
<KycBar/>
<Flex flexWrap={"wrap"} flexDirection={"column"}>
<KycBlock1/>
<KycBlock2/> 
<KycBlock3/>
</Flex>
</Flex>
</Flex>

    
   
</div></>)
}

export default ProfileKyc;