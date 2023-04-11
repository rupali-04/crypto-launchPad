import {AiOutlineCloudUpload,AiOutlineCheckCircle} from "react-icons/ai";
import {Flex,Text, IconButton,Input, Button,FormControl,Box,FormLabel} from "@chakra-ui/react";
import { useState } from "react";
import KycBlock3 from "./KycBlock3";

const KycBlock2 =({data}) =>{
    const [show,setShow] = useState('show');
    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);
    const [file3, setFile3] = useState(null);
    const [num,setNum] = useState(null);
    const [d,setData] = useState('');

    const handleSubmit = (e)=>{
      e.preventDefault();
      const t = {
        type: data,
        img1: file1,
        img2: file2,
        img3: file3,
        cardNo: num
      }
      setData(t);
      console.log(e);
      setShow('none');

    }

    const handleFileChange = (e) => {
      console.log(e.target.id);
      if(e.target.id == "image1"){
        setFile1(e.target.files[0]);
      }else if(e.target.id == "image2"){
        setFile2(e.target.files[0]);
        
      }else{
        setFile3(e.target.files[0]);
      }
    };
    return(<>{ show === 'show' ? <>
    
    <Text ml="2rem" fontWeight={"bold"} fontSize="24px" mt="1rem">Upload Documents</Text>
    <Text ml="2rem" color={"gray.400"} fontSize="12">Should be your government issued photo identity</Text>
 
      
    <form onSubmit={handleSubmit}>
    <Flex ml="2rem" mt="2rem" gap={"4"} w="100px">
    <Flex flexWrap={"wrap"} flexDirection={"column"} >    
      <Input
        type="file"
        id="image1"
        accept="image/*"
        onChange={handleFileChange}
        display="none"
        required
      />
      <IconButton as="label"
        htmlFor="image1"
        cursor="pointer" aria-label='Upload Front' colorScheme={"blue"} w="130px" h="130px" fontSize={"30"} icon={<AiOutlineCloudUpload />} />
    
     
    {file1 != null ?
     <Text color={"gray"} textAlign="center" fontSize={"10"}>{file1.name}</Text> 
      : <Text color={"gray"} textAlign="center" fontSize={"10"}>{data} Front</Text>}
      
     
      </Flex>
      
  
    <Flex flexWrap={"wrap"} flexDirection={"column"}>    
      <Input
        type="file"
        id="image2"
        accept="image/*"
        onChange={handleFileChange}
        display="none"
        required
      />
      <IconButton as="label"
        htmlFor="image2"
        cursor="pointer" aria-label='Upload Front' colorScheme={"blue"} w="130px" h="130px" fontSize={"30"} icon={<AiOutlineCloudUpload />} />
    
     
    {file2 != null ?
     <Text color={"gray"} textAlign="center" fontSize={"10"}>{file2.name}</Text> 
      : <Text color={"gray"} textAlign="center" fontSize={"10"}>{data} Back</Text>}
      
    
       </Flex>
      
  
    <Flex flexWrap={"wrap"} flexDirection={"column"}>    
      <Input
        type="file"
        id="image3"
        accept="image/*"
        onChange={handleFileChange}
        display="none"
        required
      />
      <IconButton as="label"
        htmlFor="image3"
        cursor="pointer" aria-label='Upload Front' colorScheme={"blue"} w="130px" h="130px" fontSize={"30"} icon={<AiOutlineCloudUpload />} />
    
     
    {file3 != null ?
     <Text color={"gray"} textAlign="center" fontSize={"10"}>{file3.name}</Text> 
      :   <Text color={"gray"} textAlign="center" fontSize={"10"}>Selfie with {data}</Text>}
      
    
    
      </Flex>
      </Flex>
      <Flex ml="2rem" mt="20px"><IconButton aria-label="check" color="blue" w={"max-content"} h="" variant="none" icon={<AiOutlineCheckCircle/>}/><Text >File Accepted: JPEG/JPS/PNG (Max size: 250 KB)</Text></Flex>
        <Flex ml="2rem" ><IconButton aria-label="check" color="blue" w={"max-content"} h="" variant="none" icon={<AiOutlineCheckCircle/>}/><Text>Document Should be in good condition </Text></Flex>
        <Flex ml="2rem" ><IconButton aria-label="check" color="blue" w={"max-content"} h="" variant="none" icon={<AiOutlineCheckCircle/>}/><Text>Documnet must be valid Period </Text></Flex>
        <Flex ml="2rem" ><IconButton aria-label="check" color="blue" w={"max-content"} h="" variant="none" icon={<AiOutlineCheckCircle/>}/><Text>Face must be clearly visible</Text></Flex>
    <Flex direction={"column"}>
    <FormLabel ml="2rem" mt="20px">{data} Number</FormLabel>
    <Input onChange={(e)=>{setNum(e.target.value)}} required ml="2rem" mt={"0.25rem"} bg={"#4C7CF8"} color="white" borderRadius={"0"} w="450px" placeholder='eg: ASUPxxx102' _placeholder={{ color: 'gray.300' }}/>
     <Button type="submit" ml="2rem" mt={"1rem"} bg={"#4C7CF8"} color="white" w="450px" borderRadius={"0"} >NEXT STEP</Button> 
    </Flex>
    </form>
    
   
    
        
    </> : <KycBlock3 data={d}/>}</>)
}

export default KycBlock2;