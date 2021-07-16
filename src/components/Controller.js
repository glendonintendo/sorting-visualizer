import { Flex, Button } from "@chakra-ui/react";
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
}) => {
  const playPauseButton = isPlaying ? (
    <Button onClick={pauseAnimations}>
      <IoPause />
    </Button>
  ) : (
    <Button onClick={playAnimations}>
      <IoPlay />
    </Button>
  );

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      h="10vh"
      w={{ base: "95vw", md: "60vw", lg: "25vw" }}
      mx="auto"
    >
      <Button onClick={goToStart}>
        <IoPlaySkipBack />
      </Button>
      <Button onClick={stepBackwardAnimation}>
        <IoChevronBack />
      </Button>
      {playPauseButton}
      <Button onClick={stepForwardAnimation}>
        <IoChevronForward />
      </Button>
      <Button onClick={goToEnd}>
        <IoPlaySkipForward />
      </Button>
    </Flex>
  );
};

export default Controller;
