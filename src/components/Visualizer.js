import React, { useState, useEffect } from 'react';
import { Flex, Box, Button } from '@chakra-ui/react';

export const Visualizer = () => {
  const [arrayBars, setArrayBars] = useState([]);
  const [animations, setAnimations] = useState([]);
  const [currentAnimation, setCurrentAnimation] = useState(0);

  const generateArrayBars = () => {
    const array = [];
    for (let i = 0; i < 50; i++) {
      array.push({
        barHeight: Math.floor(Math.random() * 100)
      })
    }

    return array;
  };
  
  const generateAnimations = () => {
    console.log(animations);
  }

  useEffect(() => {
    setArrayBars(generateArrayBars());
  }, [])

  return (
    <Flex bg='tomato' h='65vh' w='80vw' justifyContent='space-between' mt='5vh' mb='5vh' mx='auto' alignItems='flex-end'>
      {arrayBars.map(bar => (<Box bg='teal' h={`${bar.barHeight}%`} w='10px' />))}
    </Flex>
  )
};