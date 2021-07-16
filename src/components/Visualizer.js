import { Flex, Box } from "@chakra-ui/react";

const Visualizer = ({ arrayBars, arraySize }) => {
  return (
    <Flex
      bg="tomato"
      h="80vh"
      w={{ base: "95vw", md: "95vw", lg: "80vw" }}
      justifyContent="space-between"
      mx="auto"
      alignItems="flex-end"
    >
      {arrayBars.map((bar) => (
        <Box
          bg="teal"
          h={`${bar.barHeight}%`}
          w={`${80 / arraySize}%`}
          key={bar.key}
        />
      ))}
    </Flex>
  );
};

export default Visualizer;
