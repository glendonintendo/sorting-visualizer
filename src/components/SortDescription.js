/**
 * Renders description of sort to SortInfoModal.
 */

import {
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Code,
  Badge,
  HStack,
  VStack,
  Stat,
  StatGroup,
  StatLabel,
  Stack,
} from "@chakra-ui/react";

const SortDescription = ({
  title,
  description,
  code,
  timeComplexity,
  spaceComplexity,
  badges,
}) => {
  return (
    <>
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <HStack>
          {badges.map((badge) => (
            <Badge
              variant="solid"
              colorScheme={badge === "slow" ? "red" : "green"}
            >
              {badge}
            </Badge>
          ))}
        </HStack>
        <Stack direction={["column", "column", "row"]} my="10px" spacing="20px">
          <VStack>{description}</VStack>
          <VStack>
            <Code display="block" whiteSpace="pre">
              {code}
            </Code>
            <StatGroup w="100%" mx="auto" textAlign="center">
              <Stat>
                <StatLabel>Time Complexity</StatLabel>
                {timeComplexity}
              </Stat>
              <Stat>
                <StatLabel>Space Complexity</StatLabel>
                {spaceComplexity}
              </Stat>
            </StatGroup>
          </VStack>
        </Stack>
      </ModalBody>
    </>
  );
};

export default SortDescription;
