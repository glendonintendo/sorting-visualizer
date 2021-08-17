import { Flex, IconButton, HStack } from "@chakra-ui/react";
import { IoMdRefresh } from "react-icons/io";
import {
  IoPlaySkipBack,
  IoChevronBack,
  IoPlay,
  IoPause,
  IoChevronForward,
  IoPlaySkipForward,
  IoSunny,
  IoMoon,
} from "react-icons/io5";

const Controller = ({
  stepForwardAnimation,
  playAnimations,
  pauseAnimations,
  stepBackwardAnimation,
  goToEnd,
  goToStart,
  currentAnimation,
  animations,
  isPlaying,
  toggleColorMode,
  colorMode,
  generateArrayBars,
}) => {
  const playPauseButton = isPlaying ? (
    <IconButton
      onClick={pauseAnimations}
      icon={<IoPause />}
      colorScheme="teal"
    />
  ) : (
    <IconButton onClick={playAnimations} icon={<IoPlay />} colorScheme="teal" />
  );

  return (
    <Flex
      h="10vh"
      w={{ base: "95vw", md: "95vw", lg: "80vw" }}
      align="center"
      mx="auto"
      justify="space-between"
    >
      <IconButton
        onClick={generateArrayBars}
        icon={<IoMdRefresh />}
        colorScheme="teal"
        fontSize="24px"
        isDisabled={isPlaying}
      ></IconButton>

      <HStack spacing={{ base: "8px", md: "20px", lg: "40px" }}>
        <IconButton
          onClick={goToStart}
          icon={<IoPlaySkipBack />}
          colorScheme="teal"
        />
        <IconButton
          onClick={stepBackwardAnimation}
          icon={<IoChevronBack />}
          colorScheme="teal"
          isDisabled={isPlaying || currentAnimation === 0}
        />
        {playPauseButton}
        <IconButton
          onClick={stepForwardAnimation}
          icon={<IoChevronForward />}
          colorScheme="teal"
          isDisabled={isPlaying || currentAnimation >= animations.length}
        />
        <IconButton
          onClick={goToEnd}
          icon={<IoPlaySkipForward />}
          colorScheme="teal"
        />
      </HStack>

      <IconButton
        onClick={toggleColorMode}
        icon={colorMode === "light" ? <IoMoon /> : <IoSunny />}
        colorScheme="teal"
        fontSize="24px"
      ></IconButton>
    </Flex>
  );
};

export default Controller;
