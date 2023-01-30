import { Heading,Flex,Text,Input,Spacer,Checkbox,Box,Button} from "@chakra-ui/react";

const KycBlock3 =() =>{
    return(<>
    <Text ml="2rem" fontWeight={"bold"} fontSize="24px" mt="1rem">Personal Information</Text>
<Text ml="2rem" color={"gray.400"} fontSize="12">Fill out the form with correct Information</Text>

<Text ml="2rem" mt='8px'>Full Name:</Text>
<Input ml="2rem" bg={"#4C7CF8"} color="white" borderRadius={"0"} w="450px" placeholder='eg: Jhon Doe' _placeholder={{ color: 'gray.300' }}/>
    <Text ml="2rem" mt='8px'>Email Id:</Text>
    <Input ml="2rem" bg={"#4C7CF8"} color="white" borderRadius={"0"} w="450px" placeholder='eg: jhon@gmail.com' _placeholder={{ color: 'gray.300' }}/>
      <Text ml="2rem"  mt='8px'>State/Provience:</Text>
      <Input ml="2rem" bg={"#4C7CF8"} color="white" borderRadius={"0"} w="450px" placeholder='eg: Califonia' _placeholder={{ color: 'gray.300' }}/><Text ml="2rem" mt='8px'>Address Line: </Text>
      <Input ml="2rem" bg={"#4C7CF8"} color="white" borderRadius={"0"} w="450px" placeholder='eg: 9E,Dnane Road,Vetnani' _placeholder={{ color: 'gray.300' }}/>
      <Flex gap="10">
      <Flex flexWrap={"wrap"} flexDirection={"column"}>
      <Text ml="2rem" mt='8px'>City:</Text>
      <Input ml="2rem" w="150px" bg={"#4C7CF8"} color="white" borderRadius={"0"}  placeholder='eg: Shave Ave' _placeholder={{ color: 'gray.300' }}/>
      </Flex >
      <Flex flexWrap={"wrap"} flexDirection={"column"}>
      <Text  mt='8px'>Post Code:</Text>
      <Input  bg={"#4C7CF8"} color="white" borderRadius={"0"} w="150px" placeholder='eg: 311822' _placeholder={{ color: 'gray.300' }}/>
      </Flex>
      </Flex>
        <Checkbox ml="2rem" w="max-content" mt='8px' color={"gray"}>I accept the Term of Conditions and Privacy Policy.</Checkbox>
        <Button ml="2rem" mt={"1rem"} bg={"#4C7CF8"} color="white" w="450px" borderRadius={"0"} >Submit KYC</Button>    

    </>)
}

export default KycBlock3;