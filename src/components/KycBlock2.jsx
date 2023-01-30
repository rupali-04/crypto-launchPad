import {AiOutlineCloudUpload,AiOutlineCheckCircle} from "react-icons/ai";
import {Flex,Text, IconButton,Input, Button} from "@chakra-ui/react";

const KycBlock2 =() =>{
    return(<>
    
    <Text ml="2rem" fontWeight={"bold"} fontSize="24px" mt="1rem">Upload Documents</Text>
    <Text ml="2rem" color={"gray.400"} fontSize="12">Should be your government issued photo identity</Text>
    <Flex ml="2rem" mt="2rem" gap={"4"}>
    <Flex flexWrap={"wrap"} flexDirection={"column"}>    
    <IconButton aria-label='Upload Front' colorScheme={"blue"} w="130px" h="130px" fontSize={"30"} icon={<AiOutlineCloudUpload />} />
    <Text color={"gray"} textAlign="center" fontSize={"10"}>National Id Front</Text>
    </Flex>
    <Flex flexWrap={"wrap"} flexDirection={"column"}>
    <IconButton aria-label='Upload Front' colorScheme={"blue"} w="130px" h="130px" fontSize={"30"} icon={<AiOutlineCloudUpload />} />
    <Text color={"gray"} textAlign="center" fontSize={"10"}>National Id Back</Text>
    </Flex>
    <Flex flexWrap={"wrap"} flexDirection={"column"}>
    <IconButton aria-label='Upload Front' colorScheme={"blue"} w="130px" h="130px" fontSize={"30"} icon={<AiOutlineCloudUpload />} />
    <Text color={"gray"} textAlign="center" fontSize={"10"}>Selfie with National Id</Text>
    </Flex>
    </Flex>
    
        <Flex ml="2rem" mt="20px"><IconButton aria-label="check" color="blue" w={"max-content"} h="" variant="none" icon={<AiOutlineCheckCircle/>}/><Text >File Accepted: JPEG/JPS/PNG (Max size: 250 KB)</Text></Flex>
        <Flex ml="2rem" ><IconButton aria-label="check" color="blue" w={"max-content"} h="" variant="none" icon={<AiOutlineCheckCircle/>}/><Text>Document Should be in good condition </Text></Flex>
        <Flex ml="2rem" ><IconButton aria-label="check" color="blue" w={"max-content"} h="" variant="none" icon={<AiOutlineCheckCircle/>}/><Text>Documnet must be valid Period </Text></Flex>
        <Flex ml="2rem" ><IconButton aria-label="check" color="blue" w={"max-content"} h="" variant="none" icon={<AiOutlineCheckCircle/>}/><Text>Face must be clearly visible</Text></Flex>
    <Text ml="2rem" mt="20px">National Id Number</Text>
    <Input ml="2rem" mt={"1rem"} bg={"#4C7CF8"} color="white" borderRadius={"0"} w="450px" placeholder='eg: ASUPxxx102' _placeholder={{ color: 'gray.300' }}/>
    <Button ml="2rem" mt={"1rem"} bg={"#4C7CF8"} color="white" w="450px" borderRadius={"0"} >NEXT STEP</Button>    
    </>)
}

export default KycBlock2;