import React from "react";

import {
  Flex,
  Button,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

const Nav = ({ generateArrayBars }) => {
  return (
    <Flex
      align="center"
      h="10vh"
      w="80vw"
      mx="auto"
      justifyContent="space-between"
    >
      <Slider
        aria-label="array size slider"
        min={10}
        max={75}
        step={5}
        defaultValue={40}
        w="20vw"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Slider
        aria-label="visualization speed slider"
        onChangeEnd={(value) => console.log(value)}
        w="20vw"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>

      <Button onClick={generateArrayBars}>Generate array!</Button>
    </Flex>
  );
};

export default Nav;
