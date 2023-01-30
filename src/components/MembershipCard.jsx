import { Heading,Divider,Stack,ButtonGroup,Button,Spacer,Text,Card, CardHeader, CardBody, CardFooter, Box, HStack } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const MembershipCard = ({data}) =>{
    return(

        <>
                <Card maxW='sm' borderRadius={"40"}  bg="#3B72FF" alignItems={"center"} textAlign="center" color={"white"}>
  <CardBody>
    <Stack  spacing='3'>
      <Text fontSize={"28"} fontStyle={"normal"} >{data.type}</Text>
      <Text fontSize={"40"} fontWeight={"bold"} pt="1rem" >{data.price} | FOR <Text fontSize={"16"} fontStyle="bold"  mt={"0.25rem"} ml="197" textAlign={"left"}>{data.total}</Text></Text>
      <Text>
        {data.description}
      </Text>
        
      <HStack pl={"15px"}>
      <Text w={"180px"} textAlign={"left"} color="gray.200">
        {data.h1}
      </Text>
    <Text color="white" textStyle={"bold"}>
    {data.value1}
      </Text>
      </HStack>
     
      
      <HStack pl={"15px"}>
      <Text w={"180px"} textAlign={"left"} color="gray.200">
        {data.h2}
      </Text>
    <Text color="white" textStyle={"bold"}>
       {data.value2}
      </Text>
      </HStack>
      <HStack pl={"15px"}>
      <Text w={"180px"} textAlign={"left"} color="gray.200">
        {data.h3}
      </Text>

    <Text color="white" textStyle={"bold"}>
        {data.value3}
      </Text>
      </HStack>
     
      
   
    </Stack>
  </CardBody>
 
  <CardFooter>
    <ButtonGroup spacing='2' >
      <Button variant='solid' borderRadius={"40"} colorScheme="gray" color={"black"}>
        PURCHASE NOW
      </Button>
     
    </ButtonGroup>
  </CardFooter>
</Card>
        </>

    )
}

export default MembershipCard;