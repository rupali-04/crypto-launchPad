import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Cards from '../components/Cards';
import {
    Button,HStack,Flex,Spacer, Box, ButtonGroup, Heading
   } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import {collection, query, where, getDocs } from "firebase/firestore";
import {getFirestore} from "firebase/firestore";
import app from './../firebaseDatabase'

const db = getFirestore(app);

const ActivePage = () => {
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
       
        const q = query(companyRef, where("type", "==", "IDO"),where("projectStatus", "==", "active"));
      
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


    return(<><p> <Flex fontFamily={'Inter'}><SideBar/><Spacer />
    <Flex flexWrap={"wrap"} ml="3rem" w="100%" flexDirection={"column"}>
        <NavBar data={"active"}/><br></br>
      <Heading size={"lg"} >Active IDO</Heading><br></br>
      <Flex flexWrap={"wrap"} gap='10' alignItems='center'>
      {companyList.length != 0 ? 
        companyList.map((e) => {
          console.log(e);
          return <Cards key={e.id} data={e}/> 
        })
     : loading === true ? dis : <div>No Company Found</div>}  </Flex>
      </Flex>
    </Flex>
    
   


    </p>
                </>)
}

export default ActivePage;