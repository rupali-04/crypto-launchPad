import { Flex,Spacer,Box,Button,IconButton,Text, Input,Textarea } from "@chakra-ui/react";
import AdminBar from "../../components/AdminBar";
import AdminMembershipNav from "../../components/AdminMembershipNav";
import { BsPersonCircle } from "react-icons/bs";
import { FiCopy } from "react-icons/fi";
import { Link } from "react-router-dom";
const AdminLink = () =>{
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
 <Box bg="gray.300">
 <Link to="/admin/dashboard/link"><Button bg="#1F94FF" borderRadius={"0"} p="0.5rem" pl="2rem" pr="2rem" color="white">ADD LINK</Button></Link>
 </Box>
               <Flex mt="2rem" justifyContent={"space-between"}>
<Flex direction={"column"} >
    <Text>Feedback & Bug Report</Text>
    <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="540px"/>
</Flex>
<Flex direction={"column"}>
    <Text>Terms of Use</Text>
    <Input bg="blue.400" color="gray.100" borderRadius={"0"} w="540px"/>
</Flex>
</Flex>
<Flex mt="2rem" justifyContent={"space-between"}>
<Flex direction={"column"} >
    <Text>Goverance</Text>
    <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="540px"/>
</Flex>
<Flex direction={"column"}>
    <Text>Privacy Policy</Text>
    <Input bg="blue.400" color="gray.100" borderRadius={"0"} w="540px"/>
</Flex>
</Flex>
<Flex mt="2rem" justifyContent={"space-between"}>
<Flex direction={"column"} >
    <Text>Apply to Launch</Text>
    <Input size='md' bg="blue.400" color="gray.100" borderRadius={"0"} w="540px"/>
</Flex>
</Flex>
<Flex mt="1rem">
    <Button borderRadius={"0"} mt="0.5rem" mb="2rem" colorScheme={"blue"}>Update Link</Button>
    </Flex>

               </Flex>
               </Flex>
        
        </p>
    
    </>)
}

export default AdminLink;