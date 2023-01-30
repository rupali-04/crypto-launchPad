import SideBar from "../../components/SideBar";
import { Heading,Flex,Text,Box, Spacer } from "@chakra-ui/react";
import MembershipNav from "../../components/MembershipNav";
import MembershipCard from "../../components/MembershipCard";
const MembershipVenture = () => {
    const d = {type: "VENTURE SPECIAL",price: "$350",total:"3 Ventures",description: "This plan helps you with ventures Investment benifits that helps you to get some exclusive benifits for the ventures", h1: "Ventures Invest", value1: "5 Ventures Only", h2: "Bidding Limit", value2: "5", h3: "Investment Limit", value3: "No Limit" };
    return(<><p><Flex><SideBar/>
    <Spacer/>
    <Flex flexWrap={"wrap"} ml="1rem"  w="100%"  flexDirection={"column"}>
        <MembershipNav data={"venture"}/>
            <Text mt={"1rem"} fontWeight={"bold"} fontSize="22px">Venture Plans</Text>
            <Flex flexWrap={"wrap"} mt="1rem" gap='10' alignItems='center' >
            <MembershipCard data={d}/>
            </Flex>
        </Flex>
        </Flex>
    </p></>);
}

export default MembershipVenture;