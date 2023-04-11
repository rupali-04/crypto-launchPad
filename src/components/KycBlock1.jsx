import { Text,Stack,Radio,Box,RadioGroup,Button} from "@chakra-ui/react";
import { useState } from "react";
import KycBlock2 from "./KycBlock2"

const KycBlock1 =() =>{
  const [type,setType] = useState('National Id');
  const [show,setShow] = useState('show');

    return(<>{ show === 'show' ? <><Text ml="2rem" fontWeight={"bold"} fontSize="24px">Select Identity Type</Text>
    <Text ml="2rem" color={"gray.400"} fontSize="12">Should be your government issued photo identity</Text>
    <RadioGroup defaultValue='National Id'>
    <Stack ml="2rem" mt="20px">
        <Box bg={"#4C7CF8"} w="300px" h="5vh" p="5px" color="white">
    <Radio size='md' name='1' colorScheme={"green"} value='National Id' onChange={(e)=>{setType(e.target.value)}}> 
        NATIONAL ID
      </Radio></Box>
      <Box bg={"#4C7CF8"} w="300px" h="5vh" p="5px" color={"white"}>
      <Radio size='md' name="2" colorScheme={"green"} value='Passport' onChange={(e)=>{setType(e.target.value)}}>
        PASSPORT
      </Radio></Box>
      <Box bg={"#4C7CF8"} w="300px" h="5vh" p="5px" color={"white"}>
      <Radio size='md' name='3' colorScheme={"green"} value='Driving License' onChange={(e)=>{setType(e.target.value)}}>
        DRIVER'S LICENSE
      </Radio></Box>
      <Button onClick={()=>{setShow('none')}} borderRadius={"0"} textAlign={"center"} bg={"#4C7CF8"} w="300px" h="5vh" p="5px" color={"white"}>
        NEXT
      </Button>
    </Stack>
    </RadioGroup> 
    </>: <KycBlock2 data={type}/> 
}</>)
}

export default KycBlock1;