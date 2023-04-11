import SideBar from "../../components/SideBar";
import { Text,Flex,Spacer } from "@chakra-ui/react";
import MembershipNav from "../../components/MembershipNav";
import MembershipCard from "../../components/MembershipCard";
import app from '../../firebaseDatabase';
import { collection, query, where, getDoc,getDocs,doc } from "firebase/firestore";
import {getFirestore} from "firebase/firestore";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


const db = getFirestore(app);

const MembershipIDO = () => {

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
            const q = query(dataRef, where("type", "==", "IDO"),where("status", "==", true));
            querySnapshot =  await getDocs(q);
            console.log(querySnapshot)
            if (querySnapshot != null && loading != false) {
                const newData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                  }));
                  setMembership(newData);
              
               
                console.log("ss",membershipData);
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

   
    return(<><p><Flex fontFamily={'Inter'}><SideBar d={"membership"}/><Spacer />
    
    <Flex flexWrap={"wrap"} ml="3rem"  w="100%"  flexDirection={"column"}>
        <MembershipNav data={"ido"}/>
        <Text mt={"1rem"} fontWeight={"bold"} fontSize="22px">IDOs Plans</Text>
            <Flex  mt="1rem"  flexWrap={"wrap"} gap='10' alignItems='center' >
            {membershipData.length != 0 && loading != true ? 
                membershipData.map((e) => {
                    console.log(membershipData);
                    return   <MembershipCard key={e.id} data={e} />
                })
                //console.log("555sss",membershipData)
        : loading === true ? <div>Loading.....</div> : membershipData.length === 0 && loading === true ? <div>No Company Found</div> : ""} 
        
          
  </Flex>
           
        </Flex>
        </Flex>

     
    </p></>);
}

export default MembershipIDO