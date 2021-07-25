import { IoSpeedometer, IoCellular } from "react-icons/io5";
import { IoMdRefresh } from "react-icons/io";
import {
  Flex,
  Box,
  IconButton,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

import SortTypeSelect from "./SortTypeSelect";

const Nav = ({
  generateArrayBars,
  onArraySizeSliderChange,
  onAnimationSpeedSliderChange,
  arraySize,
  animationSpeed,
  sortType,
  onSelectSortType,
  isPlaying
}) => {
  return (
    <Flex
      alignItems="center"
      h="10vh"
      w={{ base: "95vw", md: "95vw", lg: "80vw" }}
      mx="auto"
      justifyContent="space-around"
    >
      <Slider
        aria-label="array size slider"
        min={10}
        max={60}
        step={1}
        defaultValue={arraySize}
        focusThumbOnChange={false}
        onChange={(value) => onArraySizeSliderChange(value)}
        colorScheme="teal"
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
        colorScheme="teal"
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

      <Box w={["35%", "25%", "16%", "15%"]}>
        <SortTypeSelect
          sortType={sortType}
          onSelectSortType={onSelectSortType}
        />
      </Box>

      <IconButton
        onClick={generateArrayBars}
        icon={<IoMdRefresh />}
        colorScheme="teal"
        fontSize="24px"
        isDisabled={isPlaying}
      ></IconButton>
    </Flex>
  );
};

export default Nav;
