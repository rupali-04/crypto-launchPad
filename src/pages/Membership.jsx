import SideBar from "../components/SideBar";
import { Heading,Flex,Text,Box } from "@chakra-ui/react";
import MembershipNav from "../components/MembershipNav";
import MembershipCard from "../components/MembershipCard";
const Membership = () => {
    const d1 = {type: "VENTURE SPECIAL",price: "$350",total:"3 Ventures",description: "This plan helps you with ventures Investment benifits that helps you to get some exclusive benifits for the ventures", h1: "Ventures Invest", value1: "5 Ventures Only", h2: "Bidding Limit", value2: "5", h3: "Investment Limit", value3: "No Limit" };
    const d2 = {type: "IDO SPECIAL",price: "0.1 FTM",total:"1 IDOs",description: "This plan helps you with IDOs Investment benifits that helps you to get some exclusive benifits for the IDOs", h1: "Investment Limit", value1: "$1000 Per IDOs", h2: "Early Access", value2: "24 Hr", h3: "Time Limit", value3: "NO" };

    return(<><p><Flex  fontFamily={'Inter'}><SideBar/>
    
    <Flex flexWrap={"wrap"} ml="3rem"  w="100%"  flexDirection={"column"}>
        <MembershipNav data={"all"}/>
        <Text mt={"1rem"} fontWeight={"bold"} fontSize="22px">Choose a membership plan</Text>
        <Text fontSize="14px" color={"gray.500"}>Select a plan that will best fit for your need</Text>
           
            <Flex  mt="1rem"  flexWrap={"wrap"} gap='10' alignItems='center' >
            {/* <MembershipCard data={d1} />   */}
            <MembershipCard data={d2} />
  
            </Flex>
        </Flex> </Flex>
    </p></>);
}

export default Membership