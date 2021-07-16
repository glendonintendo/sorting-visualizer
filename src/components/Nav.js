import React from "react";

import {
  Flex,
  Button,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

const Nav = ({
  generateArrayBars,
  onArraySizeSliderChange,
  onAnimationSpeedSliderChange,
  arraySize,
  animationSpeed,
}) => {
  console.log(animationSpeed);

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
        max={60}
        step={5}
        defaultValue={arraySize}
        focusThumbOnChange={false}
        onChangeEnd={(value) => onArraySizeSliderChange(value)}
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
        min={0}
        max={198}
        step={2}
        defaultValue={200 - animationSpeed}
        focusThumbOnChange={false}
        onChangeEnd={(value) => onAnimationSpeedSliderChange(value)}
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
