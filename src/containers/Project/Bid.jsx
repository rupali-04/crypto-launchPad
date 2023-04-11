import { Flex, Heading,Text,Divider, Button } from "@chakra-ui/react";
import app from '../../firebaseDatabase';
import { collection, query, where, getDoc,getDocs,doc } from "firebase/firestore";
import {getFirestore} from "firebase/firestore";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const db = getFirestore(app);



const ProjectBid = ({data}) =>{
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
            {el.Status === true ? <Button w="130px" h="max-content" p="0.25rem" colorScheme={"gray.800"} color="black" isActive="false" borderRadius="40">Complete</Button> : <Button w="130px" h="max-content" p="0.25rem" colorScheme={"blue"} borderRadius="40">Claim Tokens</Button>}
        </Flex>
        return t;
            })
            allocationList.push(d);
        });
        
        
    }else{
        allocationList.push(<Flex>No Data Found....</Flex>)
    }

    
    return(<>
        <Flex fontFamily={'Inter'} direction={"column"} gap="4">
                <Heading fontFamily={'Inter'} size={"sm"}>YOUR BIDDING DETAILS</Heading>
                <Flex gap="4">
                    <Text w="150px">Project Name</Text>
                    <Text w="150px">Bidding Price</Text>
                    <Text w="150px">Bidding Amount</Text>
                    <Text w="150px">Bidding Status</Text>
                  
                </Flex><Divider h="0.095rem" mt="0rem" bg={"black"}/>
                {/* <Flex gap="4" fontWeight={"bold"}>
                    <Text w="150px">SCRIPT NETWORK</Text>
                    <Text w="150px">0.01 BUSD</Text>
                    <Text w="150px">$10,500</Text>
                    <Text w="150px">Pending</Text>
                  
                   
                </Flex>
                 */}
        </Flex>
    </>)
}

export default ProjectBid;