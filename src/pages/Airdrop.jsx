import { Heading,Flex,Text, Spacer } from "@chakra-ui/react";
import SideBar from "../components/SideBar";
import AirdropCard from "../components/AirdropCard";
const Airdrop = () => {

    return(<><p>
        <Flex><SideBar/><Spacer/>
        <Flex  flexWrap={"wrap"} ml="1rem" mt="2rem"  w="100%"  flexDirection={"column"}>
<Heading size={"lg"} >Airdrop Projects</Heading>
<Text size={"sm"}  color="gray">Participate In Our Exclusive Airdrops</Text><br></br>
<Flex flexWrap={"wrap"} gap='10' alignItems='center'>
<AirdropCard/> <AirdropCard/> <AirdropCard/>    </Flex>
</Flex>
</Flex>
        
        
       
    </p></>);
}

export default Airdrop