import { Flex,Box,Text, Spacer ,IconButton,Collapse,Heading,Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon} from "@chakra-ui/react";
import { useDisclosure} from '@chakra-ui/react';
import {IoIosArrowDown} from 'react-icons/io';

const VentureProjectDetail = ({data}) =>{
    const { isOpen, onToggle } = useDisclosure()

    console.log(data);

    return(<><Flex flexWrap={"wrap"} direction="column" >
        <Box ml="58rem" color={"yellow.400"} fontWeight="black" fontSize={"18"}>{data.chainType}</Box>
        <Flex gap="14" lineHeight={"2rem"}>
        <Box><Text fontWeight={"bold"} >Venture INFORMATION</Text>
        <Flex gap="6" mt="0.5rem">
            <Text>Starting Date</Text><Spacer/><Text >{data.bidStartDate.toDate().toLocaleString()}</Text>
        </Flex>
        <Flex gap="6">
            <Text>Bidding Range</Text><Spacer/><Text >1 {data.tokenSymbol} = {data.bidRange.minValue} - {data.bidRange.maxValue} BNB</Text>
        </Flex>
        <Flex gap="6">
            <Text>Minimum Bidding Price</Text><Spacer/><Text >1HAL = 0.002 BNB</Text>
        </Flex>
        <Flex gap="6">
            <Text>Minimum Bidding Value</Text><Spacer/><Text >0.9 BNB</Text>
        </Flex>
        <Flex gap="6">
            <Text>KYC Requirement</Text><Spacer/><Text >{`${data.kycRequirement}`}</Text>
        </Flex>
        <Flex gap="6">
            <Text>Access Type</Text><Spacer/><Text >{data.accessType}</Text>
        </Flex>
       
        </Box>
        <Box ><Text fontWeight={"bold"} >TOKEN INFORMATION</Text>
        <Flex mt="0.5rem" gap="6">
            <Text>Name</Text><Spacer/><Text >{data.tokenName}</Text>
        </Flex>
        <Flex gap="6">
            <Text>Token Symbol</Text><Spacer/><Text >{data.tokenSymbol}</Text>
        </Flex>
        <Flex gap="6">
            <Text>Total Supply</Text><Spacer/><Text >{data.totalSupply}</Text>
        </Flex>
        <Flex gap="6">
            <Text>Vesting</Text><Spacer/><Text >{data.TGE}% TGE, then {data.cliffPeriod}% each {data.linearVestingPeriod}</Text>
        </Flex>
        <Flex gap="6">
            <Text>Network</Text><Spacer/><Text >{data.chainType}</Text>
        </Flex>
        <Flex gap="6">
            <Text>Insurance</Text><Spacer/><Text >{data.insurance.toString()}</Text>
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
          <Accordion allowToggle w="750px" mb="3rem" >
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
        </Flex>

        
        </>)
}

export default VentureProjectDetail;