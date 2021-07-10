import React from 'react';
import { Flex, Box } from '@chakra-ui/react';

export const Visualizer = ({ arrayBars }) => {
  return (
    <Flex bg='tomato' h='65vh' w='80vw' justifyContent='space-between' mt='5vh' mb='5vh' mx='auto' alignItems='flex-end'>
      {arrayBars.map(bar => (<Box bg='teal' h={`${bar.barHeight}%`} w='10px' />))}
    </Flex>
  )
};