import { Button, IconButton,Spacer} from '@chakra-ui/react';
import {IoIosArrowDown} from 'react-icons/io';
import {TfiWallet} from 'react-icons/tfi';
import {TiSocialLinkedin,TiSocialFacebook,TiSocialTwitter} from 'react-icons/ti';
import {FaTelegramPlane} from 'react-icons/fa';
import { Fade, ScaleFade, Slide, SlideFade,Box,CloseButton,Text,Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,Collapse } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';

import { useDisclosure} from '@chakra-ui/react';


  const SideBar = () => {
  
    const { isOpen, onToggle } = useDisclosure()
    const [r1,setR1] = useState(true);
    const [r2,setR2] = useState(true);
        const [placement, setPlacement] = useState('left')
      
        return (
          <>
          {/* {isOpen == true ? " " : <Button m='40px' onClick={onToggle} style={{ zIndex: 12 }}>HoneyBite</Button>} */}
           
      
        <Box
          p='20px'
          color='black'
          mt='0'
          minH={"100vh"}
          bg='white'
          rounded='md'
          shadow='dark-lg'
          borderRightRadius={"60"}
          width={"300px"}
          h="max-content"
        >
            {/* <CloseButton  ml='230px' onClick={onToggle}/> */}
            <Box display='flex' alignItems={"center"} flexWrap={"wrap"} flexDirection={"column"}>

            <Box fontSize={"24px"}>HoneyBite</Box><br></br>
                <Box display='flex' alignItems={"center"} flexWrap={"wrap"} flexDirection={"column"}>  <Button size='lg' colorScheme='twitter' fontSize={"18"} variant='outline' borderRadius='40'>Connect Wallet</Button> 
                <Text textAlign={"center"} color={"lightgrey"} fontSize='xs'>Your Honey-Bite Launchpad experience will be limited without connecting</Text></Box>
                </Box>
            <Box display='flex' flexWrap={"wrap"} flexDirection={"column"}>

               <br></br>
              
                <Text color={"blue.400"}>All Project</Text>
                <Text>Airdrop</Text>
                <Text>Honey-Bite Venture</Text>
                <Text>Membership</Text>
             
                <Box>
                    <Box  display='flex' >
                    <Text as='b' ml={"5"}>Resources</Text>
                    <Spacer />
                    {/* <Text pt="1" pr="40"><IoIosArrowDown/></Text> */}
                    <IconButton
                variant="unStyle"
                mt="-1.5"
                h={"10"}
               
                //  pr="40"
                aria-label="dropdown icon"
              mr={"40"}
                icon={<IoIosArrowDown/>}
               onClick={()=>{
                if(r1 == false){setR1(true)
            
                }
                else{setR1(false)
                 
                }
               }}
              ></IconButton>
                    </Box>
                  
      <Collapse in={r1} animateOpacity>
        <Box
          
        >
          <Text>Feedback & Bug Report</Text>
          <Text>Governance</Text>
          <Text>Help</Text>
        </Box>
      </Collapse>
      <Box  display='flex' >
                    <Text as='b' ml={"5"}>General</Text>
                    <Spacer />
                    <IconButton
                variant="unStyle"
                mt="-1.5"
                h={"10"}
               
                //  pr="40"
                aria-label="dropdown icon"
              mr={"40"}
              onClick={()=>{
                if(r2 == false){setR2(true)
            
                }
                else{setR2(false)
                 
                }
               }}
                icon={<IoIosArrowDown/>}
              ></IconButton>
  
                    </Box>
                    <SlideFade in={r2} offsetY='20px'>
        <Box
         
          
         
        >
           <Text>Apply to Launch</Text>
          <Text>Privacy Policy</Text>
          <Text>Terms of Use</Text>
        </Box>
      </SlideFade>
      {/* <Collapse 
    
   in={r2} animateOpacity>
      <Box
          
        >{console.log(r2)}
         
        </Box>
      </Collapse> */}
                </Box>
            </Box>
            <Box
        mt={r1 == true ? "100px" : "180px"}
        pr={"20px"}
        h={"12vh"}
        color='white'
       w={'280px'}
       
        
      >
        <Box display='flex'>
        <IconButton
   bg={"#333"}
   fontSize={"38px"}
  aria-label='inkedin-icon'
  size='lg'
  
  icon={<TiSocialLinkedin />}
/> <Spacer />
<IconButton
   bg={"#333"}
   fontSize={"38px"}
  aria-label='twitter-icon'
  size='lg'
  icon={<TiSocialTwitter />}
/> <Spacer />
<IconButton
  bg={"#333"}
  fontSize={"38px"}
  aria-label='facebook-icon'
  size='lg'
  icon={<TiSocialFacebook />}
/> <Spacer />
<IconButton
  bg={"#333"}
  fontSize={"38px"}
  aria-label='telegram-icon'
  size='lg'
  icon={<FaTelegramPlane/>}
/></Box><br></br>
      <Text textAlign={"center"} color={"grey"} fontSize='8' fontWeight={"black"}>Copyright @ 2022. All Rights Resereved by Honey-Bite</Text>
      </Box>
        </Box>
        
       
      
          
          </>
        )
      

  }

  export default SideBar;
  