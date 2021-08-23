import { Flex, Box } from "@chakra-ui/react";

const Visualizer = ({ arrayBars, arraySize, colorMode }) => {
  return (
    <Flex
      h="80vh"
      w={{ base: "95vw", md: "95vw", lg: "80vw" }}
      justifyContent="space-between"
      mx="auto"
      alignItems="flex-end"
      borderBottom={`5px solid`}
      borderColor={colorMode === "light" ? "blue.500" : "blue.200"}
      pb="1.5vh"
    >
      {arrayBars.map((bar) => (
        <Box
          bg={colorMode === "light" ? `${bar.color}.500` : `${bar.color}.200`}
          h={`${bar.barHeight}%`}
          w={`${80 / arraySize}%`}
          key={bar.key}
        />
      ))}
    </Flex>
  );
};

export default Visualizer;
