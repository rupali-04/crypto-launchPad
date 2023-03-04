import { Flex, Heading,Text,Divider, Button } from "@chakra-ui/react";
const ProjectBid = () =>{
    return(<>
        <Flex fontFamily={'Inter'} direction={"column"} gap="4">
                <Heading fontFamily={'Inter'} size={"sm"}>YOUR BIDDING DETAILS</Heading>
                <Flex gap="4">
                    <Text w="150px">Project Name</Text>
                    <Text w="150px">Bidding Price</Text>
                    <Text w="150px">Bidding Amount</Text>
                    <Text w="150px">Bidding Status</Text>
                  
                </Flex><Divider h="0.095rem" mt="0rem" bg={"black"}/>
                <Flex gap="4" fontWeight={"bold"}>
                    <Text w="150px">SCRIPT NETWORK</Text>
                    <Text w="150px">0.01 BUSD</Text>
                    <Text w="150px">$10,500</Text>
                    <Text w="150px">Pending</Text>
                  
                   
                </Flex>
                
        </Flex>
    </>)
}

export default ProjectBid;