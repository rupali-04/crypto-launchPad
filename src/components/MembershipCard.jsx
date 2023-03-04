import { Input,Flex,Heading,Divider,Stack,ButtonGroup,Button,Spacer,Text,Card, CardHeader, CardBody, CardFooter, Box, HStack, ListItem, UnorderedList } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const MembershipCard = ({data}) =>{
    return(

        <>
        <Flex direction={"column"}>
                <Card maxW={"sm"} h="lg" borderRadius={"0"} shadow="0"   bg="gray.100" alignItems={"center"} textAlign="center" >
  <CardBody p="0">
    <Stack m="0" spacing='3'>
      <Text  fontStyle={"normal"} fontWeight="bold" pt="1rem">{data.type}</Text>
    <Flex p="0.5rem" direction={"column"} bg="gray" textAlign={"center"} color="white"><Text  fontSize={"14px"} textDecoration={"line-through"} textDecorationColor="red" textDecorationThickness={"0.06rem"}>Normally $350</Text><Text p="1rem" fontSize={"40"} >{data.price}</Text><Text fontSize={"14px"} pt="0.5rem">$50 Savings</Text></Flex>
      <Text p="0.5rem" fontSize={"14px"}>
        {data.description}
      </Text>
        <Flex pl="0.75rem" >
     <UnorderedList textAlign={"left"}  >
      <ListItem>Vaild for only 1 IDO</ListItem>
      <ListItem>Investment limit $1000 per IDO</ListItem>
      <ListItem>Early access before 24Hr</ListItem>
      <ListItem>No expiry date</ListItem>
      <ListItem>No service charge</ListItem>
     </UnorderedList>
     </Flex>
   
    </Stack>
  </CardBody>
 
  <CardFooter>
    
      <Button borderRadius={"40"} bg="blue.400" color={"white"}>
        Buy Now
      </Button>
     
    
  </CardFooter>
 
</Card>
<Flex bg="white" mt="0.5rem"><Input borderRadius={"40"} placeholder="ENTER PROMO CODE "></Input><Button bg="blue.400" color={"white"} fontSize="14px" borderRadius={"40px"}>Apply Now</Button></Flex>
</Flex>
        </>

    )
}

export default MembershipCard;