import { Text,Stack,Radio,Box,RadioGroup,Button} from "@chakra-ui/react";

const KycBlock1 =() =>{
    return(<><Text ml="2rem" fontWeight={"bold"} fontSize="24px">Select Identity Type</Text>
    <Text ml="2rem" color={"gray.400"} fontSize="12">Should be your government issued photo identity</Text>
    <RadioGroup defaultValue='1'>
    <Stack ml="2rem" mt="20px">
        <Box bg={"#4C7CF8"} w="300px" h="5vh" p="5px" color="white">
    <Radio size='md' name='1' colorScheme={"green"} value='1'> 
        NATIONAL ID
      </Radio></Box>
      <Box bg={"#4C7CF8"} w="300px" h="5vh" p="5px" color={"white"}>
      <Radio size='md' name="2" colorScheme={"green"} value='2'>
        PASSPORT
      </Radio></Box>
      <Box bg={"#4C7CF8"} w="300px" h="5vh" p="5px" color={"white"}>
      <Radio size='md' name='3' colorScheme={"green"} value='3'>
        DRIVER'S LICENSE
      </Radio></Box>
      <Button borderRadius={"0"} textAlign={"center"} bg={"#4C7CF8"} w="300px" h="5vh" p="5px" color={"white"}>
        NEXT
      </Button>
    </Stack>
    </RadioGroup>
    </>)
}

export default KycBlock1;