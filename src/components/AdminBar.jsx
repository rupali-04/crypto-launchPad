import { Flex,Button, IconButton,Spacer,Avatar,Text,Box,CloseButton} from '@chakra-ui/react';
import {IoIosArrowDown} from 'react-icons/io';
import {TfiWallet} from 'react-icons/tfi';
import {SlSocialLinkedin} from 'react-icons/sl';
import {HiBars3} from 'react-icons/hi2';
import {RiTwitterLine} from 'react-icons/ri';
import {FaTelegramPlane} from 'react-icons/fa';
import {FiFacebook} from 'react-icons/fi'
import {TbBrandTelegram} from 'react-icons/tb'
import {BsPersonCircle} from 'react-icons/bs';
import {FiCopy} from 'react-icons/fi';
import Logo from "../images/Logo.jpg";
import {Collapse } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link} from 'react-router-dom';
import { useDisclosure} from '@chakra-ui/react';
import { useDispatch,useSelector } from 'react-redux';
import { LOGIN, login, logout } from '../actions/auth';


  const AdminBar = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const wallet = useSelector(state => state.wallet);
 

  function handleLogin() {
    dispatch({
      type: LOGIN,
      item: {address: "0x495B7Fcb455d8539C59C092c8cca59EA86fbF374"}
    })
    dispatch(login());
  }

  function handleLogout() {
    dispatch(logout());
  }

    const [data,setData] =useState("");
    const [w,setW] =useState("");
    const { isOpen, onToggle } = useDisclosure()
    const [r1,setR1] = useState(true);
    const [r2,setR2] = useState(true);
    
        const [placement, setPlacement] = useState('left')
        const [show,setShow] = useState("visible");
        
       
        return (
          <>
          {/* {isOpen == true ? " " : <Button m='40px' onClick={onToggle} style={{ zIndex: 12 }}>HoneyBite</Button>} */}
           {show === "none" ?  <Flex m="1rem"  fontSize={"24px"} borderRadius={"5"} borderBottomRightRadius="15" pl="0.5rem" pr="0.5rem"  boxShadow={"dark-lg"} h="max-content"><Avatar src={Logo} size="lg"></Avatar><Flex gap="4"><Flex direction={"column"} mt="0.75rem"><Text mt="0.25rem">HoneyBite</Text><Text mt="-0.25rem" fontSize="8px">A Revolution For New Era</Text></Flex><Box color={"#1d1d1d"} ><IconButton fontSize={"44px"} h="max-content" aria-label='dash' icon={<HiBars3/>} variant="link"  colorScheme='blue' mt={"0.65rem"} w="50px"  onClick={()=>{setShow("visible")}}></IconButton></Box></Flex></Flex> : 
          
        <Box
    /* Hide horizontal scrollbar */
          display={show}
          p='14px'
          pt="8"
          color='black'
         mt="1rem"
         mb="4rem"
          ml="0.5rem"
       
          rounded='md'
          boxShadow={"dark-lg"}
          scrollMarginRight="-2"
          w="40vh"
          h="80vh"
        >
             <CloseButton  mt="-1.5rem" ml="-0.5rem" textColor={"blue.300"} fontSize="18px" variant={"link"} onClick={()=>{setShow("none")}}/>
            <Box display='flex' alignItems={"center"} flexWrap={"wrap"} flexDirection={"column"} >

            <Flex fontSize={"24px"}><Avatar src={Logo} size="lg"></Avatar><Flex direction={"column"} mt="0.35rem"><Text mt="0.25rem">HoneyBite</Text><Text mt="-0.30rem" fontSize="10px">A Revolution For New Era</Text></Flex></Flex><br></br>
            
                </Box>
                <Box  overflow={"hidden"} maxH="60vh"   overflowX= "hidden" /* Hide horizontal scrollbar */
     overflowY= "auto">
            <Box display='flex' flexWrap={"wrap"} flexDirection={"column"} >

               <br></br>
               
             
              <Link to="/admin/dashboard">  <Text mt="0.5rem" color="blue.400">Admin Panel</Text> </Link>
              <Link to="/admin/dashboard/ido">  <Text mt="0.5rem" >All Project</Text> </Link>
              <Link to="/admin/dashboard/airdrop/">   <Text mt="0.5rem">Airdrop</Text></Link>
             <Link to="/admin/dashboard/venture"> <Text mt="0.5rem">Honey-Bite Venture</Text> </Link>
             
                <Box>
                
     <Flex mt="0.5rem" >
                    <Text as='b' ml={"5"}>General</Text>
                   <Spacer/>
                    {/* <Text pt="1" pr="40"><IoIosArrowDown/></Text> */}
                    <IconButton
                variant="unStyle"
                
                mt="-1.5"
                h={"10"}
               
                //  pr="40"
                aria-label="dropdown icon"
             
                icon={<IoIosArrowDown/>}
               onClick={()=>{
                if(r2 == false){setR2(true)
            
                }
                else{setR2(false)
                 
                }
               }}
              ></IconButton>
                    </Flex>              
                    <Collapse in={r2} animateOpacity>
        <Flex
          direction={"column"}
          gap="2">
          <Link to="/admin/dashboard/membership"><Text>Membership</Text></Link>
          <Link to="/admin/dashboard/user"><Text>User</Text></Link>
          <Link to="/admin/dashboard/link"><Text>Link</Text></Link>
          <Link to="/admin/dashboard/help"><Text>Help</Text></Link>
          <Link to="/admin/dashboard/commission"><Text>Commission</Text></Link>
        </Flex>
     </Collapse>
           </Box>
            </Box>
            
    
  
            
      </Box>
        </Box>
        
              }
      
          
          </>
        )
      

  }

  export default AdminBar;
  