import SideBar from "../components/SideBar";
import { Flex,Box,Text,Progress,Spacer, Card, CardHeader, CardBody, Button,Input, IconButton,Divider } from "@chakra-ui/react";
import Details from "../containers/Project/Details";
import {BsWallet2} from "react-icons/bs";
import {AiOutlineQuestionCircle} from "react-icons/ai";
import ProjectDetail from "../containers/Project/Project";
import ProjectAllocation from "../containers/Project/Allocation";
import ProjectMetrics from "../containers/Project/Metrics";
import { Pie } from "react-chartjs-2";
import { PieController } from "chart.js";
import { Link } from "react-router-dom";
import { useState } from "react";
import ProjectBid from "../containers/Project/Bid";
import { useSelector } from "react-redux";

const VentureProject = () => {
    const [selectIteam,setIteam] = useState("details");
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    return(<><div>
        
        <Flex><SideBar/>
        <Flex flexWrap={"wrap"} flexDirection={"column"}>
        <Flex>
       <Box ml="2rem"> <Details/><Flex fontSize={"12"}><Text fontWeight={"bold"} color={"#1F94FF"}>Total Raise 10,000 BUSD</Text>  <Spacer /><Text>Targeted Raise 30,000 BUSD</Text></Flex><Progress size='lg' value={10} /> </Box>
      
       {isLoggedIn === false ? "" :  <Flex alignContent={"center"}  w="100%" justifyContent={"end"}  alignItems="center" mt="1.5rem" ><Flex gap="4" flexWrap={"wrap"} ml="1rem"    flexDirection={"column"} ><Card bg="gray.100" borderRadius={"40px"} w="max-content" h="max-content"><CardHeader><Flex mt="1rem" gap="1"><Text>NO OF BID: 15 </Text><Text> | </Text><Text>ACCEPT BID: 2</Text><IconButton mt="-0.5rem" aria-label="icon" icon={<AiOutlineQuestionCircle/>}/></Flex> </CardHeader></Card>
       <Card h="max-content" w="max-content" bg="gray.100" borderRadius={"40px"}><CardBody><Flex direction={"column"}><Text fontWeight="bold" fontSize={"22px"} textAlign="center"><IconButton aria-label='Search database' icon={<BsWallet2 />} cursor="none" pl="0.25rem" h="max-content"  fontSize={"24"} variant={"unstyled"}></IconButton>Balance : 10000 BUSD</Text><Flex> <Input bg="white" borderRadius={"0"} placeholder="BIDDING PRICE" _placeholder={{ fontSize: '8px' }} borderLeft="black" w="100px" variant='outline' /><Input bg="white" placeholder="BIDDING AMOUNT" _placeholder={{ fontSize: '8px' }} borderRadius={"0"} w="100px" variant='outline' /><Button borderRadius={"0"} colorScheme={"blue"}>PLACE BID</Button></Flex><Text textAlign={"center"} color="gray" fontSize={"12px"}>T&C: Bid vaild only for 14 working days*</Text></Flex></CardBody></Card></Flex>
       </Flex>
      }
      
       </Flex>
       <Box ml="2rem" mt="3rem">
        <Flex gap={"10"} >
        <Box textAlign={"center"}><Button variant={"unstyled"} color={selectIteam === "details" ? "#1F94FF" : "gray"} onClick={()=>{setIteam("details")}}  >Project Details</Button></Box>
                <Box textAlign={"center"}><Button variant={"unstyled"} color={selectIteam === "team" ? "#1F94FF" : "gray"} onClick={()=>{setIteam("team")}}>Team & Partners</Button></Box>
                <Box textAlign={"center"}><Button variant={"unstyled"} color={selectIteam === "metrics" ? "#1F94FF" : "gray"} onClick={()=>{setIteam("metrics")}}>Metrics</Button></Box>
                <Box textAlign={"center"}>{isLoggedIn === false ?  <Button variant={"unstyled"} color={"gray"} isDisabled>Your Allocation</Button>: <Button variant={"unstyled"} color={selectIteam === "allocation" ? "#1F94FF" : "gray"} onClick={()=>{setIteam("allocation")}}>Your Allocation</Button>}</Box>
                <Box textAlign={"center"}>{isLoggedIn === false ?  <Button variant={"unstyled"} color={"gray"} isDisabled>Your Bid</Button>: <Button variant={"unstyled"} color={selectIteam === "allocation" ? "#1F94FF" : "gray"} onClick={()=>{setIteam("bid")}}>Your Bid</Button>}</Box>
                
                </Flex><Divider h="0.095rem" mt="0.5rem" bg={"black"}/>
                <Flex gap={"10"} mt="0.5rem">
                   
                     {selectIteam === "details" ? <ProjectDetail/> : selectIteam === "team" ? "" : selectIteam === "metrics" ? <ProjectMetrics/> : selectIteam === "allocation" ? <ProjectAllocation/> : selectIteam === "bid" ? <ProjectBid/> : ""} 
                </Flex>

            </Box>
       </Flex>
</Flex>
        </div>
        </>)
}

export default VentureProject;