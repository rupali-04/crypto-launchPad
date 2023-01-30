import { Flex,Spacer,Box,Button,IconButton,Text, Input,Textarea } from "@chakra-ui/react";
import AdminBar from "../../../components/AdminBar";
import AdminMembershipNav from "../../../components/AdminMembershipNav";
import { BsPersonCircle } from "react-icons/bs";
import { FiCopy } from "react-icons/fi";

const MembershipAdd = () =>{
    return(<>
        <p>
            <Flex >
               <AdminBar/>
               <Flex  flexWrap={"wrap"} ml="2rem" overflowX={"hidden"} flexDirection={"column"}>
               <Flex>
 <Flex m="1rem" fontSize={"24px"}></Flex><Spacer/>
     <Flex m="1rem" ><Box display='flex'   flexWrap={"wrap"} flexDirection={"column"}>
                 <Button  leftIcon={<BsPersonCircle></BsPersonCircle>} size='lg'  colorScheme='gray' fontSize={"20"} variant='outline' borderRadius='40'> 0xd23...45e78 <IconButton  fontSize={"14px"} pt="1"  aria-label='Copy button' variant={"none"} icon={<FiCopy />}/></Button> 
                 </Box>
                 </Flex>   
  
 </Flex>
               <AdminMembershipNav/> 
               <Flex mt="2rem" justifyContent={"space-between"}>
<Flex direction={"column"} >
    <Text>Plan Name</Text>
    <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="540px"/>
</Flex>
<Flex direction={"column"}>
    <Text>Membership Plan Type</Text>
    <Input bg="blue.400" color="gray.100" borderRadius={"0"} w="540px"/>
</Flex>
</Flex>
<Flex mt="2rem" justifyContent={"space-between"}>
<Flex direction={"column"} >
    <Text>Plan Price</Text>
    <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="540px"/>
</Flex>
<Flex direction={"column"}>
    <Text>No of IDO</Text>
    <Input bg="blue.400" color="gray.100" borderRadius={"0"} w="540px"/>
</Flex>
</Flex>
<Flex direction="column" mt="1rem" >
    <Text>PROJECT SHORT DETAILS</Text>
    <Textarea  bg="blue.400" color="gray.100" borderRadius={"0"} w="1150px"/>
</Flex>
<Flex mt="2rem" justifyContent={"space-between"}>
<Flex direction={"column"} >
    <Text>Investment Limit</Text>
    <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="540px"/>
</Flex>
<Flex direction={"column"}>
    <Text>Early Access</Text>
    <Input bg="blue.400" color="gray.100" borderRadius={"0"} w="540px"/>
</Flex>
</Flex>
<Flex mt="2rem" justifyContent={"space-between"}>
<Flex direction={"column"} >
    <Text>Time Limit</Text>
    <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="540px"/>
</Flex>
<Flex direction={"column"}>
    <Text>Bidding Limit</Text>
    <Input bg="blue.400" color="gray.100" borderRadius={"0"} w="540px"/>
</Flex>
</Flex>
<Flex mt="1rem">
    <Button borderRadius={"0"} mt="0.5rem" mb="2rem" colorScheme={"blue"}>Submit</Button>
    </Flex>

               </Flex>
               </Flex>
        
        </p>
    
    </>)
}

export default MembershipAdd;