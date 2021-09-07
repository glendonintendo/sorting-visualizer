import { Flex, IconButton, HStack, Tooltip } from "@chakra-ui/react";
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

import OptionsMenu from "./OptionsMenu";

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
  initializeArrayState,
  shuffleArrayBars,
  setBarHeights,
  setSortedOrder,
}) => {
  const playPauseButton = isPlaying ? (
    <Tooltip hasArrow label="pause" bg="gray.300" color="black">
      <IconButton
        aria-label="Pause visualizer"
        onClick={pauseAnimations}
        icon={<IoPause />}
        colorScheme="blue"
      />
    </Tooltip>
  ) : (
    <Tooltip hasArrow label="play" bg="gray.300" color="black">
      <IconButton
        aria-label="Play visualizer"
        onClick={playAnimations}
        icon={<IoPlay />}
        colorScheme="blue"
      />
    </Tooltip>
  );

  return (
    <Flex
      h="10vh"
      w={{ base: "95vw", md: "95vw", lg: "80vw" }}
      align="center"
      mx="auto"
      justify="space-between"
    >
      <OptionsMenu
        initializeArrayState={initializeArrayState}
        shuffleArrayBars={shuffleArrayBars}
        setBarHeights={setBarHeights}
        setSortedOrder={setSortedOrder}
      />

      <HStack spacing={{ base: "8px", md: "20px", lg: "40px" }}>
        <Tooltip hasArrow label="skip to beginning" bg="gray.300" color="black">
          <IconButton
            aria-label="Skip to first animation"
            onClick={goToStart}
            icon={<IoPlaySkipBack />}
            colorScheme="blue"
            isDisabled={currentAnimation === 0}
          />
        </Tooltip>

        <Tooltip hasArrow label="step backward" bg="gray.300" color="black">
          <IconButton
            aria-label="Step back one animation"
            onClick={stepBackwardAnimation}
            icon={<IoChevronBack />}
            colorScheme="blue"
            isDisabled={isPlaying || currentAnimation === 0}
          />
        </Tooltip>

        {playPauseButton}

        <Tooltip hasArrow label="step forward" bg="gray.300" color="black">
          <IconButton
            aria-label="Step forward one animation"
            onClick={stepForwardAnimation}
            icon={<IoChevronForward />}
            colorScheme="blue"
            isDisabled={isPlaying || currentAnimation >= animations.length}
          />
        </Tooltip>

        <Tooltip hasArrow label="skip to end" bg="gray.300" color="black">
          <IconButton
            aria-label="Skip to last animation"
            onClick={goToEnd}
            icon={<IoPlaySkipForward />}
            colorScheme="blue"
            isDisabled={currentAnimation >= animations.length}
          />
        </Tooltip>
      </HStack>

      <Tooltip
        hasArrow
        label={`toggle ${colorMode === "light" ? "dark" : "light"} mode`}
        bg="gray.300"
        color="black"
      >
        <IconButton
          aria-label={`Toggle to ${
            colorMode === "light" ? "dark" : "light"
          } mode`}
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <IoMoon /> : <IoSunny />}
          colorScheme="blue"
          fontSize="24px"
        ></IconButton>
      </Tooltip>
    </Flex>
  );
};

export default Controller;
