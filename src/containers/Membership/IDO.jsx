import SideBar from "../../components/SideBar";
import { Text,Flex,Spacer } from "@chakra-ui/react";
import MembershipNav from "../../components/MembershipNav";
import MembershipCard from "../../components/MembershipCard";
const MembershipIDO = () => {
    const d = {type: "IDO SPECIAL",price: "$250",total:"5 IDOs",description: "This plan helps you with IDOs Investment benifits that helps you to get some exclusive benifits for the IDOs", h1: "Investment Limit", value1: "$1000 Per IDOs", h2: "Early Access", value2: "24 Hr", h3: "Time Limit", value3: "NO" };

    return(<><p><Flex><SideBar/><Spacer />
    
    <Flex flexWrap={"wrap"} ml="1rem"  w="100%"  flexDirection={"column"}>
        <MembershipNav data={"ido"}/>
        <Text mt={"1rem"} fontWeight={"bold"} fontSize="22px">IDOs Plans</Text>
            <Flex  mt="1rem"  flexWrap={"wrap"} gap='10' alignItems='center' >
            <MembershipCard data={d} />
  </Flex>
           
        </Flex>
        </Flex>

     
    </p></>);
}

export default MembershipIDO