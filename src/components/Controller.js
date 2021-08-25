import { Flex, IconButton, HStack } from "@chakra-ui/react";
import { FaAsterisk } from "react-icons/fa";
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
      aria-label="Pause visualizer"
      onClick={pauseAnimations}
      icon={<IoPause />}
      colorScheme="blue"
    />
  ) : (
    <IconButton
      aria-label="Play visualizer"
      onClick={playAnimations}
      icon={<IoPlay />}
      colorScheme="blue"
    />
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
        aria-label="Create new data set"
        onClick={generateArrayBars}
        icon={<FaAsterisk />}
        colorScheme="blue"
        fontSize="24px"
        isDisabled={isPlaying}
      ></IconButton>

      <HStack spacing={{ base: "8px", md: "20px", lg: "40px" }}>
        <IconButton
          aria-label="Skip to first animation"
          onClick={goToStart}
          icon={<IoPlaySkipBack />}
          colorScheme="blue"
        />
        <IconButton
          aria-label="Step back one animation"
          onClick={stepBackwardAnimation}
          icon={<IoChevronBack />}
          colorScheme="blue"
          isDisabled={isPlaying || currentAnimation === 0}
        />
        {playPauseButton}
        <IconButton
          aria-label="Step forward one animation"
          onClick={stepForwardAnimation}
          icon={<IoChevronForward />}
          colorScheme="blue"
          isDisabled={isPlaying || currentAnimation >= animations.length}
        />
        <IconButton
          aria-label="Skip to last animation"
          onClick={goToEnd}
          icon={<IoPlaySkipForward />}
          colorScheme="blue"
        />
      </HStack>

      <IconButton
        aria-label={`Toggle to ${
          colorMode === "light" ? "dark" : "light"
        } mode`}
        onClick={toggleColorMode}
        icon={colorMode === "light" ? <IoMoon /> : <IoSunny />}
        colorScheme="blue"
        fontSize="24px"
      ></IconButton>
    </Flex>
  );
};

export default Controller;
