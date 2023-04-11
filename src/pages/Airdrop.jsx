import { Heading,Flex,Text, Spacer } from "@chakra-ui/react";
import SideBar from "../components/SideBar";
import AirdropCard from "../components/AirdropCard";
import { useEffect, useState } from 'react';
import {collection, query, where, getDocs } from "firebase/firestore";
import {getFirestore} from "firebase/firestore";
import app from '../firebaseDatabase'

const db = getFirestore(app);




const Airdrop = () => {
    const [companyData,setCompany] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    
    getData();
  }, []);

  const getData = async () => {
   
    
    try{
      setLoading(true);
     console.log(loading);

      const companyRef = collection(db, "company");
     
      const q = query(companyRef, where("type", "==", "airdrop"));
    
      let querySnapshot = null;
    
      querySnapshot = await getDocs(q);
    if (querySnapshot != null && loading != false) {
    
      querySnapshot.forEach((doc) => {
       const getCompanyData = {
        id: doc.id,
        data: doc.data()
       }
     
        setCompany([...companyData,getCompanyData]);
        
        console.log("data",getCompanyData);
       
       
      })
      setLoading(false);
      
    }else{
      console.log("No docs ");
    }
    console.log(loading);
    console.log("companyData",companyData);
  
    }catch(err){
      console.log(err);
    }
   
}

  
// if(loading != true && !companyData)
// {

//   console.log("Pro");
//   var i = 0;  
//   console.log("i",i);
//   companyData.forEach((e) => {
//     i++;
//       console.log(e);
//       // setList([...companyList,<Cards key={`${i}`} data={e}/>]);

//     });
//     setLoad(false);
//  }
// if(load != true !companyList.length){
//   console.log("companyList:",companyList);
// }
let companyList = [];
let dis;
if(!loading){
  
  console.log("load",loading);
  companyData.map((e) => {
    companyList.push(e);
  })
  
  console.log(companyList.length);
}else{
  console.log("load",loading);
  dis = <div>Loading......</div>;
}


    return(<><p>
        <Flex fontFamily={'Inter'}><SideBar d={"airdrop"}/><Spacer/>
        <Flex  flexWrap={"wrap"} ml="3rem" mt="2rem"  w="100%"  flexDirection={"column"}>
<Heading size={"lg"} >Airdrop Projects</Heading>
<Text size={"sm"}  color="gray">Participate In Our Exclusive Airdrops</Text><br></br>
<Flex flexWrap={"wrap"} gap='10' alignItems='center'>
{companyList.length != 0 ? 
        companyList.map((e) => {
          console.log(e);
          return <AirdropCard key={e.id} data={e}/> 
        })
        : loading === true ? dis : <div>No Company Found</div>}
    </Flex>
</Flex>
</Flex>
        
        
       
    </p></>);
}

export default Airdrop