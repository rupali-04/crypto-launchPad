import { Heading,Divider,Stack,ButtonGroup,Button,Spacer,Text,Card, CardHeader, CardBody, CardFooter, Box, HStack } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const AdminMembershipCard = ({data}) =>{
    return(

        <>
                <Card maxW='sm'   bg="gray.200" alignItems={"center"} textAlign="center" >
  <CardBody>
    <Stack  spacing='3'>
      <Text fontSize={"28"} fontStyle={"normal"} >{data.type}</Text>
      <Text fontSize={"40"} fontWeight={"bold"} pt="1rem" >{data.price} | FOR <Text fontSize={"16"} fontStyle="bold"  mt={"0.25rem"} ml="197" textAlign={"left"}>{data.total}</Text></Text>
      <Text>
        {data.description}
      </Text>
        
      <HStack pl={"15px"}>
      <Text w={"180px"} textAlign={"left"} color="gray">
        {data.h1}
      </Text>
    <Text  textStyle={"bold"}>
    {data.value1}
      </Text>
      </HStack>
     
      
      <HStack pl={"15px"}>
      <Text w={"180px"} textAlign={"left"} color="gray">
        {data.h2}
      </Text>
    <Text  textStyle={"bold"}>
       {data.value2}
      </Text>
      </HStack>
      <HStack pl={"15px"}>
      <Text w={"180px"} textAlign={"left"} color="gray">
        {data.h3}
      </Text>

    <Text  textStyle={"bold"}>
        {data.value3}
      </Text>
      </HStack>
     
      
   
    </Stack>
  </CardBody>
 
  <CardFooter>
    <ButtonGroup spacing='2' >
     <Link to="/admin/dashboard/membership/edit"> <Button variant='solid'  colorScheme="blue" >
        View Details
      </Button></Link>
     
    </ButtonGroup>
  </CardFooter>
</Card>
        </>

    )
}

export default AdminMembershipCard;