import { Flex, IconButton } from "@chakra-ui/react";
import {
  IoPlaySkipBack,
  IoChevronBack,
  IoPlay,
  IoPause,
  IoChevronForward,
  IoPlaySkipForward,
} from "react-icons/io5";

const Controller = ({
  stepForwardAnimation,
  playAnimations,
  pauseAnimations,
  stepBackwardAnimation,
  goToEnd,
  goToStart,
  isPlaying,
  currentAnimation,
  animations
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

  console.log(currentAnimation);

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      h="10vh"
      w={{ base: "95vw", md: "60vw", lg: "25vw" }}
      mx="auto"
    >
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
    </Flex>
  );
};

export default Controller;
