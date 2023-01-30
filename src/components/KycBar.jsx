import { Heading,Flex, Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Spacer,
    Box, } from "@chakra-ui/react";

const KycBar = () =>{
    const labelStyles = {
        mt: '3rem',
        ml: '-4.5',
        fontSize: 'sm',
      }
    return(<Box  ml="2rem" > 
    <Slider w={"365px"} aria-label='slider-ex-1' defaultValue={33} minH="10vh" isDisabled="true" step={"1"}>
    <SliderMark value={81} {...labelStyles}>
          Step 1 Of 3
        </SliderMark>
       
        
        
      <SliderTrack h="2vh">
        <SliderFilledTrack h="2vh" bg={"blue"}/>
      </SliderTrack>
     
    </Slider>
    </Box>);
}

export default KycBar;