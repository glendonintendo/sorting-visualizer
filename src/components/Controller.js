import { Flex, Button } from "@chakra-ui/react";

const Controller = ({ stepForwardAnimation, playAnimations }) => {
  return (
    <Flex justifyContent="space-between" w="80vw" mx="auto">
      <Button onClick={playAnimations}>Play</Button>
      <Button onClick={stepForwardAnimation}>Step Forward</Button>
    </Flex>
  );
};

export default Controller;
