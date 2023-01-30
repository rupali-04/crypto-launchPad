import { Flex,Box,Text, Spacer ,IconButton,Collapse,Heading,Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,} from "@chakra-ui/react";
import { useDisclosure} from '@chakra-ui/react';
import {IoIosArrowDown} from 'react-icons/io';

const ProjectDetail = () =>{
    const { isOpen, onToggle } = useDisclosure()
    return(<><Flex flexWrap={"wrap"} direction="column" >
        <Box ml="58rem" color={"yellow.400"} fontWeight="black" fontSize={"18"}>BNB Chain</Box>
        <Flex gap="14">
        <Box><Text fontWeight={"bold"} >IDO INFORMATION</Text>
        <Flex gap="6" mt="0.5rem">
            <Text>FCFS Opens</Text><Spacer/><Text >December 12,2022 8:00 UTC</Text>
        </Flex>
        <Flex gap="6">
            <Text>Early Access</Text><Spacer/><Text >December 12,2022 8:00 UTC</Text>
        </Flex>
        <Flex gap="6">
            <Text>FCFS Closes</Text><Spacer/><Text >December 12,2022 8:00 UTC</Text>
        </Flex>
        <Flex gap="6">
            <Text>Swap Rate</Text><Spacer/><Text >1HAL = 0.05 BUSD</Text>
        </Flex>
        <Flex gap="6">
            <Text>Total Raise</Text><Spacer/><Text >$30,000</Text>
        </Flex>
        <Flex gap="6">
            <Text>Access Type</Text><Spacer/><Text >Private</Text>
        </Flex>
        <Flex gap="6">
            <Text>KYC Requirements</Text><Spacer/><Text >Yes</Text>
        </Flex>
        </Box>
        <Box ><Text fontWeight={"bold"} >TOKEN INFORMATION</Text>
        <Flex mt="0.5rem" gap="6">
            <Text>Name</Text><Spacer/><Text >Harmony Launcher</Text>
        </Flex>
        <Flex gap="6">
            <Text>Token Symbol</Text><Spacer/><Text >HAL</Text>
        </Flex>
        <Flex gap="6">
            <Text>Total Supply</Text><Spacer/><Text >5000000000000000</Text>
        </Flex>
        <Flex gap="6">
            <Text>Vesting</Text><Spacer/><Text >15% TGE, then 17% each month</Text>
        </Flex>
        <Flex gap="6">
            <Text>Network</Text><Spacer/><Text >Binance</Text>
        </Flex>
        <Flex gap="6">
            <Text>Insurance</Text><Spacer/><Text >YES</Text>
        </Flex>
       
        </Box>
        
        </Flex>
        <Flex mt="1rem" gap="14" >
        <Box> <Flex w="max-content">
                    <Text as='b' >Project FAQ</Text>
                   
                    {/* <Text pt="1" pr="40"><IoIosArrowDown/></Text> */}
                    <IconButton
                variant="unStyle"
                mt="-1.5"
                h={"10"}
                onClick={onToggle}
                //  pr="40"
                aria-label="dropdown icon"
              mr={"40"}
                icon={<IoIosArrowDown/>}
              
              ></IconButton>
                    </Flex>
                  
                    <Collapse in={isOpen} animateOpacity>
        <Box
          
        >
          <Accordion allowToggle w="750px">
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'black', color: 'white' }}>
        <Box as="span" flex='1' textAlign='left'>
        What is Muon Network?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel>
   <Text> This Project helps you with different level of corporation, It is right now static data for static project,This Project helps you with different level of corporation, It is right now static data for static </Text><Text mt="0.5rem">This Project helps you with different level of corporation, It is right now static data for static project,This Project helps you with different level of corporation, It is right now static data for static </Text><Text mt="0.5rem">This Project helps you with different level of corporation, It is right now static data for static project,This Project helps you with different level of corporation, It is right now static data for static </Text>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'black', color: 'white' }}>
        <Box as="span" flex='1' textAlign='left'>
        What makes Muon Nework (MUON) unique?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel>
   <Text> This Project helps you with different level of corporation, It is right now static data for static project,This Project helps you with different level of corporation, It is right now static data for static </Text><Text mt="0.5rem">This Project helps you with different level of corporation, It is right now static data for static project,This Project helps you with different level of corporation, It is right now static data for static </Text><Text mt="0.5rem">This Project helps you with different level of corporation, It is right now static data for static project,This Project helps you with different level of corporation, It is right now static data for static </Text>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'black', color: 'white' }}>
        <Box as="span" flex='1' textAlign='left'>
        What is Muo Network (MUON) roadmap ?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel>
   <Text> This Project helps you with different level of corporation, It is right now static data for static project,This Project helps you with different level of corporation, It is right now static data for static </Text><Text mt="0.5rem">This Project helps you with different level of corporation, It is right now static data for static project,This Project helps you with different level of corporation, It is right now static data for static </Text><Text mt="0.5rem">This Project helps you with different level of corporation, It is right now static data for static project,This Project helps you with different level of corporation, It is right now static data for static </Text>
    </AccordionPanel>
  </AccordionItem>

</Accordion>
        </Box>
     </Collapse></Box></Flex>
        </Flex></>)
}

export default ProjectDetail