import { IoSpeedometer, IoCellular, IoInformation } from "react-icons/io5";
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
        colorScheme="teal"
        w="25vw"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb boxSize={[6, 8, 10]}>
          <Box
            color={"tomato"}
            as={IoCellular}
            fontSize={{ base: "16px", md: "24px", lg: "28px" }}
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
        w="25vw"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb boxSize={[6, 8, 10]}>
          <Box
            color={"tomato"}
            as={IoSpeedometer}
            fontSize={{ base: "18px", md: "28px", lg: "30px" }}
          />
        </SliderThumb>
      </Slider>

      <HStack>
        <IconButton
          icon={<IoInformation />}
          size="2xs"
          borderRadius="50%"
          border="transparent"
          colorScheme="teal"
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
