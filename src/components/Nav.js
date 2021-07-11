import React from 'react';
import { Flex, Button } from '@chakra-ui/react';

export const Nav = ({ generateArrayBars }) => {
  return (
    <Flex align='center' justifyContent='center' h='10vh' w='80vw' mx='auto' justifyContent='space-between'>
      <Button onClick={generateArrayBars}>Generate a new array!</Button>
      <Button>Sort!</Button>
    </Flex>
  )
};