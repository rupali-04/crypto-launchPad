import { Flex, Heading,Text,Divider, Button } from "@chakra-ui/react";
const ProjectAllocation = () =>{
    return(<>
        <Flex direction={"column"} gap="2" fontFamily={'Inter'}>
                <Heading fontFamily={'Inter'} size={"md"}>YOUR ALLOCATION</Heading>
                <Flex gap="4">
                    <Text w="150px">No</Text>
                    <Text w="150px">Allocation</Text>
                    <Text w="150px">Percentage</Text>
                    <Text w="150px">Date</Text>
                    <Text w="150px">Claimed</Text>
                    <Text w="150px">Action</Text>
                </Flex><Divider h="0.095rem" mt="0rem" bg={"black"}/>
                <Flex gap="4">
                    <Text w="150px">1</Text>
                    <Text w="150px">81,125 MUN</Text>
                    <Text w="150px">25.00%</Text>
                    <Text w="150px">04-12-2022</Text>
                    <Text w="150px">81,125 MUN</Text>
                    <Button w="130px" h="max-content" p="0.25rem" colorScheme={"gray.800"} color="black" isActive="false" borderRadius="40">Complete</Button>
                </Flex>
                <Flex gap="4">
                    <Text w="150px">2</Text>
                    <Text w="150px">81,125 MUN</Text>
                    <Text w="150px">25.00%</Text>
                    <Text w="150px">06-1-2023</Text>
                    <Text w="150px">0.000 MUN</Text>
                    <Button w="130px" h="max-content" p="0.25rem" colorScheme={"blue"} borderRadius="40">Claim Tokens</Button>
                </Flex><Flex gap="4">
                    <Text w="150px">3</Text>
                    <Text w="150px">81,125 MUN</Text>
                    <Text w="150px">25.00%</Text>
                    <Text w="150px">04-2-2023</Text>
                    <Text w="150px">0.000 MUN</Text>
                    <Button w="130px" h="max-content" p="0.25rem" colorScheme={"blue"} borderRadius="40">Claim Tokens</Button>
                </Flex><Flex gap="4">
                    <Text w="150px">4</Text>
                    <Text w="150px">81,125 MUN</Text>
                    <Text w="150px">25.00%</Text>
                    <Text w="150px">04-3-2023</Text>
                    <Text w="150px">0.0000 MUN</Text>
                    <Button w="130px" h="max-content" p="0.25rem" colorScheme={"blue"} borderRadius="40">Claim Tokens</Button>
                </Flex>
        </Flex>
    </>)
}

export default ProjectAllocation;