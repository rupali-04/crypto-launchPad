import { Flex, Heading,Text,Divider, Button } from "@chakra-ui/react";
import app from '../../firebaseDatabase';
import { collection, query, where, getDoc,getDocs,doc } from "firebase/firestore";
import {getFirestore} from "firebase/firestore";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const db = getFirestore(app);



const ProjectAllocation = ({data}) =>{
    const [loading,setLoading] = useState(true);
    const wallet = useSelector(state => state.wallet);
    const [investmentData,setInvestmentData] = useState([]);
    const isLoggedIn = useSelector(state => state.isLoggedIn);

    useEffect(()=>{
        getData();
     },[])
     
    const getData = async () =>{
        setLoading(true);
        try{ 
            const investmentRef = collection(db,"investment");
            if(isLoggedIn != false){
                console.log(data,wallet.address);
                const q = query(investmentRef, where("companyId", "==", data),where("userId","==",wallet.address));
            let querySnapshot = null;
    
            querySnapshot = await getDocs(q);
            
          if (querySnapshot != null && loading != false) {
          console.log("loopppp");
          try{

          console.log(querySnapshot);
            querySnapshot.forEach((doc) => {
             console.log("each el",doc.data());
           
              setInvestmentData([...investmentData,doc.data()]);
             
              console.log("datassssss",loading);
             
              setLoading(false);
              
             
            })
        }catch(err){
            console.log(err);
        }
          }
       
            }
            
        }catch(err){console.log(err)}
    
    }

    const allocationList = [];
    if(loading != true && investmentData.length >0){
        
        investmentData.map((e)=>{
           const d = e.claimAllocation.map((el,i)=>{
                const t =  <Flex gap="4">
            <Text w="150px">{i+1}</Text>
            <Text w="150px">{el.Allocation} MUN</Text>
            <Text w="150px">{el.Percentage} %</Text>
            <Text w="150px">{el.claimDate.toDate().toString().split('G')[0]}</Text>
            <Text w="150px">{el.Status === true ? el.Amount : 0.000}</Text>
            {el.status === false ? <Button w="130px" h="max-content" p="0.25rem" colorScheme={"gray.800"} color="black" isActive="false" borderRadius="40">Waiting</Button> : <Button w="130px" h="max-content" p="0.25rem" colorScheme={"blue"} borderRadius="40">Claim Tokens</Button>}
        </Flex>
        return t;
            })
            allocationList.push(d);
        });
        
        
    }else{
        allocationList.push(<Flex>No Data Found....</Flex>)
    }

    return(<>
        <Flex direction={"column"} gap="2" fontFamily={'Inter'}>
                <Heading fontFamily={'Inter'} size={"md"}>YOUR ALLOCATION</Heading>
                <Flex gap="4">
                    <Text w="150px">No</Text>
                    <Text w="150px">Allocation</Text>
                    <Text w="150px">Percentage</Text>
                    <Text w="150px">Date</Text>
                    <Text w="150px">Claimed</Text>
                    <Text w="150px">Action</Text>
                </Flex><Divider h="0.095rem" mt="0rem" bg={"black"}/>

                {
                    allocationList.length > 0 ?
                    allocationList.map((e)=>{
                        return e;
                    }) : ""
                }
{/*                
                <Flex gap="4">
                    <Text w="150px">2</Text>
                    <Text w="150px">81,125 MUN</Text>
                    <Text w="150px">25.00%</Text>
                    <Text w="150px">06-1-2023</Text>
                    <Text w="150px">0.000 MUN</Text>
                    <Button w="130px" h="max-content" p="0.25rem" colorScheme={"blue"} borderRadius="40">Claim Tokens</Button>
                </Flex><Flex gap="4">
                    <Text w="150px">3</Text>
                    <Text w="150px">81,125 MUN</Text>
                    <Text w="150px">25.00%</Text>
                    <Text w="150px">04-2-2023</Text>
                    <Text w="150px">0.000 MUN</Text>
                    <Button w="130px" h="max-content" p="0.25rem" colorScheme={"blue"} borderRadius="40">Claim Tokens</Button>
                </Flex><Flex gap="4">
                    <Text w="150px">4</Text>
                    <Text w="150px">81,125 MUN</Text>
                    <Text w="150px">25.00%</Text>
                    <Text w="150px">04-3-2023</Text>
                    <Text w="150px">0.0000 MUN</Text>
                    <Button w="130px" h="max-content" p="0.25rem" colorScheme={"blue"} borderRadius="40">Claim Tokens</Button>
                </Flex> */}
        </Flex>
    </>)
}

export default ProjectAllocation;