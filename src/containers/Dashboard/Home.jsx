import SideBar from "../../components/SideBar";
import { Text,Flex,HStack, Button,ButtonGroup,Spacer} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react";
import IDOPage from "./IDOPage";
import Airdrop from "./Airdrop";
import Venture from "./Venture";
import DashboardNav from "../../components/DashboardNav";
import WalletDetails from "../../components/WalletDetails";
import { useDisclosure } from "@chakra-ui/react";
import app from '../../firebaseDatabase';
import { collection, query, where, getDocs } from "firebase/firestore";
import {getFirestore} from "firebase/firestore";
import { useSelector } from "react-redux";



const db = getFirestore(app);

const Home = () => {
  const wallet = useSelector(state => state.wallet);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [loading,setLoading] = useState();
    const [type,setType] = useState("ido");
    const [d,setdata] = useState({
      id: "",
      airdropInvestment: 0,
      idoInvestment:0,
      kycStatus:false,
      membershipStatus: false,
      totalAirdropInvestment:0,
      totalAirdrops:0,
      totalIDOInvestment:0,
      totalVentureInvestment:0,
      userName:"",
      ventureInvestment:0,
      walletAddress:"",
    });


    useEffect(() => {
     
    getData();   
     
   }, []);

  

const getData = async() => {
  try{
    setLoading(true);
    const userRef = collection(db, "user");

    // Create a query against the collection.
    const wa = `${wallet.address}`;
    
    const q = query(userRef, where("walletAddress", "==", wa));
  
    let querySnapshot = null;
    querySnapshot = await getDocs(q);
   


  
  if (querySnapshot != null) {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      // setData(d);
      d.id = doc.id;
      d.airdropInvestment= doc.data().airdropInvestment;
      d.idoInvestment= doc.data().idoInvestment;
      d.kycStatus= doc.data().kycStatus;
      d.membershipStatus= doc.data().membershipStatus;
      d.totalAirdropInvestment= doc.data().totalAirdropInvestment;
      d.totalAirdrops= doc.data().totalAirdrops;
      d.totalIDOInvestment= doc.data().totalIDOInvestment;
      d.totalVentureInvestment= doc.data().totalVentureInvestment;
      d.userName= doc.data().userName;
      d.ventureInvestment= doc.data().ventureInvestment;
      d.walletAddress = doc.data().walletAddress;

      console.log("Data",d);
      
      setLoading(false);
    });
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
  
  }catch(err){
    console.log(err);
  }
  
}


let dataList = null;
  if (loading) {
    dataList = <div>Loading....</div>;
  } else {
    dataList =  <WalletDetails data={d}/>;
  }

    
   
   

    return(<><p><Flex fontFamily={'Inter'}><SideBar />
    <Flex flexWrap={"wrap"} flexDirection={"column"} w="100%" ml="3rem">
       {dataList}
       <HStack w={"max-content"} h={"max-content"}  p={"2"} pt="0" >

 
  
<ButtonGroup  gap='2' variant='outline'>
 
  <Button borderRadius='40' onClick={()=>{setType("ido")}} colorScheme={type === "ido" ? "twitter" : "blackAlpha"}>IDO Project Details</Button>
  <Button borderRadius='40' onClick={()=>{setType("airdrop")}} colorScheme={type === "airdrop" ? "twitter" : "blackAlpha"}>Airdrop Details</Button>
  <Button borderRadius='40' onClick={()=>{setType("venture")}} colorScheme={type === "venture" ? "twitter" : "blackAlpha"}>Honey-Bite Venture Details</Button>
  </ButtonGroup>
<Spacer />

</HStack>
{type === "ido" && loading === false ? <IDOPage data={d}/> : type === "venture" && loading === false ? <Venture data={d}/> : type === "airdrop" && loading === false ? <Airdrop data={d}/> : ""}
    
</Flex>
</Flex>
    </p></>);
}

export default Home