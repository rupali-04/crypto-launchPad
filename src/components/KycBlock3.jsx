import { Heading,Flex,Text,Input,Spacer,Checkbox,Box,Button} from "@chakra-ui/react";
import { useState } from "react";
import app from '../firebaseDatabase';
import { getStorage, ref, uploadBytes,getDownloadURL } from 'firebase/storage';
import {getFirestore} from "firebase/firestore";
import { collection,addDoc,doc,updateDoc} from "firebase/firestore";
import { useSelector } from "react-redux";

const db = getFirestore(app);

const KycBlock3 =({data}) =>{
    const wallet = useSelector(state => state.wallet);
    const [isChecked, setIsChecked] = useState(false);
    const[kycData,setData] = useState({
        type: data.type,
        img1: data.img1,
        img2: data.img2,
        img3: data.img3,
        idNumber: data.cardNo,
        name: "",
        email:"",
        Address: {
            state: "",
            lane: "",
            city: "",
            pincode: "",
        }
    });

  const saveToDB = async () =>{
    const kycRef = await addDoc(collection(db, "kyc"),kycData);
    console.log(kycRef);
    const uRef = doc(db, "user",wallet.address);
    await updateDoc(uRef,{
        kycStatus: {
            'kycId': kycRef.id,
            'kycStatus': "Pending"
        }
      })
  }

    const handleSubmit = async (e) =>{

        e.preventDefault();
        if(isChecked != true){
            console.log("error");
        }else{
            try{
                console.log(kycData.idNumber+kycData.img1.name);
                const storage = getStorage();
                let imageRef = ref(storage, `/${kycData.idNumber+kycData.img1.name}`);
                let uploadTask = await uploadBytes(imageRef, kycData.img1);
                console.log(uploadTask);
                const url1 = await getDownloadURL(imageRef);
                imageRef = ref(storage, `/${kycData.idNumber+kycData.img2.name}`);
                uploadTask = await uploadBytes(imageRef, kycData.img2);
                const url2 = await getDownloadURL(imageRef);
                imageRef = ref(storage, `/${kycData.idNumber+kycData.img3.name}`);
                uploadTask = await uploadBytes(imageRef, kycData.img3);
                const url3 = await getDownloadURL(imageRef);
                console.log(url1,url2,url3);
                kycData.img1 = url1;
                kycData.img2 = url2;
                kycData.img3 = url3;
                saveToDB();                
            }catch(err){
                console.log(err);
            }
            
        }
        
    }
    return(<>
    <Text ml="2rem" fontWeight={"bold"} fontSize="24px" mt="1rem">Personal Information</Text>
<Text ml="2rem" color={"gray.400"} fontSize="12">Fill out the form with correct Information</Text>
<form onSubmit={(e)=>handleSubmit(e)}>
<Text ml="2rem" mt='8px'>Full Name:</Text>
<Input onChange={(e)=>setData({...kycData,name:e.target.value})} type={"text"} required ml="2rem" bg={"#4C7CF8"} color="white" borderRadius={"0"} w="450px" placeholder='eg: Jhon Doe' _placeholder={{ color: 'gray.300' }}/>
    <Text ml="2rem" mt='8px'>Email Id:</Text>
    <Input onChange={(e)=>setData({...kycData,email:e.target.value})} type={"email"} required ml="2rem" bg={"#4C7CF8"} color="white" borderRadius={"0"} w="450px" placeholder='eg: jhon@gmail.com' _placeholder={{ color: 'gray.300' }}/>
      <Text ml="2rem"  mt='8px'>State/Provience:</Text>
      <Input type={"text"} onChange={(e)=>setData({...kycData,Address:{...kycData.Address,state:e.target.value}})} required ml="2rem" bg={"#4C7CF8"} color="white" borderRadius={"0"} w="450px" placeholder='eg: Califonia' _placeholder={{ color: 'gray.300' }}/>
      <Text ml="2rem" mt='8px'>Address Line: </Text>
      <Input type={"text"} onChange={(e)=>setData({...kycData,Address:{...kycData.Address,lane:e.target.value}})} required ml="2rem" bg={"#4C7CF8"} color="white" borderRadius={"0"} w="450px" placeholder='eg: 9E,Dnane Road,Vetnani' _placeholder={{ color: 'gray.300' }}/>
      <Flex gap="10">
      <Flex flexWrap={"wrap"} flexDirection={"column"}>
      <Text ml="2rem" mt='8px'>City:</Text>
      <Input type={"text"} required onChange={(e)=>setData({...kycData,Address:{...kycData.Address,city:e.target.value}})} ml="2rem" w="150px" bg={"#4C7CF8"} color="white" borderRadius={"0"}  placeholder='eg: Shave Ave' _placeholder={{ color: 'gray.300' }}/>
      </Flex >
      <Flex flexWrap={"wrap"} flexDirection={"column"}>
      <Text  mt='8px'>Post Code:</Text>
      <Input type={"text"} required onChange={(e)=>setData({...kycData,Address:{...kycData.Address,pincode:e.target.value}})} bg={"#4C7CF8"} color="white" borderRadius={"0"} w="150px" placeholder='eg: 311822' _placeholder={{ color: 'gray.300' }}/>
      </Flex>
      </Flex>
      <Flex direction={"column"}>
        <Checkbox isChecked={isChecked} onChange={()=>{setIsChecked(!isChecked)}} ml="2rem" w="max-content" mt='8px' color={"gray"}>I accept the Term of Conditions and Privacy Policy.</Checkbox>
        <Button type="submit" ml="2rem" mt={"1rem"} bg={"#4C7CF8"} color="white" w="450px" borderRadius={"0"} >Submit KYC</Button>    
      </Flex>
    </form>
    </>)
}

export default KycBlock3;