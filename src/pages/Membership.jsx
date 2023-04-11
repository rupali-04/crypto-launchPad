import SideBar from "../components/SideBar";
import { Heading,Flex,Text,Box } from "@chakra-ui/react";
import MembershipNav from "../components/MembershipNav";
import MembershipCard from "../components/MembershipCard";
import app from '../firebaseDatabase';
import { collection, query, where, getDoc,getDocs,doc } from "firebase/firestore";
import {getFirestore} from "firebase/firestore";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const db = getFirestore(app);

const Membership = () => {
    const [loading,setLoading] = useState(true);
    const [membershipData,setMembership] = useState([]);

    useEffect(()=>{
    
        getData();
      }, []);


      const getData = async () =>{
        setLoading(true);
        try{
            let querySnapshot = null;
            const dataRef = collection(db,'membership');
            querySnapshot =  await getDocs(dataRef);
            console.log(querySnapshot)
            if (querySnapshot != null && loading != false) {
                const newData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                  }));
                  setMembership(newData);
              
               
                
                setLoading(false)      
        }else{
            console.log("No docs ");
            setLoading(false);  
        }
        //setLoading(false);  
        }catch(err){
            console.log(err)
        }
        
      };

     
    
    return(<><p><Flex  fontFamily={'Inter'}><SideBar d={"membership"}/>
    
    <Flex flexWrap={"wrap"} ml="3rem"  w="100%"  flexDirection={"column"}>
        <MembershipNav data={"all"}/>
        <Text mt={"1rem"} fontWeight={"bold"} fontSize="22px">Choose a membership plan</Text>
        <Text fontSize="14px" color={"gray.500"}>Select a plan that will best fit for your need</Text>
           
            <Flex  mt="1rem"  flexWrap={"wrap"} gap='10' alignItems='center' >
            {/* <MembershipCard data={d1} />   */}
            {membershipData.length != 0 && loading != true ? 
                membershipData.map((e) => {
                    console.log(membershipData);
                    return   <MembershipCard key={e.id} data={e} />
                })
                //console.log("555sss",membershipData)
        : loading === true ? <div>Loading.....</div> : membershipData.length === 0 && loading === true ? <div>No Company Found</div> : ""} 
        
          
  
            </Flex>
        </Flex> </Flex>
    </p></>);
}

export default Membership