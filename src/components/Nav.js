import { IoSpeedometer, IoCellular, IoInformation } from "react-icons/io5";
import { BiRun } from "react-icons/bi"
import {
  Flex,
  Box,
  IconButton,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";

import SortTypeSelect from "./SortTypeSelect";
import SortInfoModal from "./SortInfoModal";

const Nav = ({
  onArraySizeSliderChange,
  onAnimationSpeedSliderChange,
  arraySize,
  animationSpeed,
  sortType,
  onSelectSortType,
  colorMode
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      alignItems="center"
      h="10vh"
      w={{ base: "95vw", md: "95vw", lg: "80vw" }}
      mx="auto"
      justifyContent={["space-between", "space-around"]}
    >
      <Slider
        aria-label="array size slider"
        min={10}
        max={60}
        step={1}
        defaultValue={arraySize}
        focusThumbOnChange={false}
        onChange={(value) => onArraySizeSliderChange(value)}
        colorScheme="green"
        w="25vw"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb boxSize={[6, 8, 8]} bg={colorMode === "light" ? "green.500" : "green.200"}>
          <Box
            as={IoCellular}
            color={colorMode === "light" ? "gray.200" : "gray.500"}
            fontSize={{ base: "16px", md: "24px", lg: "24px" }}
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
        colorScheme="green"
        w="25vw"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb boxSize={[6, 8, 8]} bg={colorMode === "light" ? "green.500" : "green.200"}>
          <Box
            as={BiRun}
            color={colorMode === "light" ? "gray.200" : "gray.500"}
            fontSize={{ base: "18px", md: "28px", lg: "28px" }}
          />
        </SliderThumb>
      </Slider>

      <HStack>
        <IconButton
          icon={<IoInformation />}
          size="2xs"
          borderRadius="50%"
          border="transparent"
          colorScheme="blue"
          fontSize="20px"
          mr={["1px", "2px", "5px", "5px"]}
          onClick={onOpen}
        />
        <SortInfoModal onClose={onClose} isOpen={isOpen} sortType={sortType} />
        <Box w={["25vw", "25vw", "16vw", "10vw"]} maxWidth="200px">
          <SortTypeSelect
            sortType={sortType}
            onSelectSortType={onSelectSortType}
          />
        </Box>
      </HStack>
    </Flex>
  );
};

export default Nav;
