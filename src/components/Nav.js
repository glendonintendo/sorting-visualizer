import React from "react";

import {
  Flex,
  Box,
  Button,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

import { IoSpeedometer, IoCellular } from "react-icons/io5";

const Nav = ({
  generateArrayBars,
  onArraySizeSliderChange,
  onAnimationSpeedSliderChange,
  arraySize,
  animationSpeed,
}) => {
  return (
    <Flex
      alignItems="center"
      h="10vh"
      w={{ base: "95vw", md: "95vw", lg: "80vw" }}
      mx="auto"
      justifyContent="space-between"
    >
      <Slider
        aria-label="array size slider"
        min={10}
        max={60}
        step={1}
        defaultValue={arraySize}
        focusThumbOnChange={false}
        onChange={(value) => onArraySizeSliderChange(value)}
        w="20vw"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb boxSize={[5, 7, 9]}>
          <Box
            color={"tomato"}
            as={IoCellular}
            fontSize={{ base: "14px", md: "24px", lg: "26px" }}
          />
        </SliderThumb>
      </Slider>
      <Slider
        aria-label="visualization speed slider"
        min={0}
        max={198}
        step={2}
        defaultValue={200 - animationSpeed}
        focusThumbOnChange={false}
        onChange={(value) => onAnimationSpeedSliderChange(value)}
        w="20vw"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb boxSize={[5, 7, 9]}>
          <Box
            color={"tomato"}
            as={IoSpeedometer}
            fontSize={{ base: "14px", md: "28px", lg: "28px" }}
          />
        </SliderThumb>
      </Slider>

      <Button onClick={generateArrayBars}>Generate array!</Button>
    </Flex>
  );
};

export default Nav;
