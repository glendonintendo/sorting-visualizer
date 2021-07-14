import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/react';
import { Nav } from './components/Nav';
import { Visualizer } from './components/Visualizer';
import { Controller } from './components/Controller';

import { generateBubbleSortAnimations } from './utils/animationsGenerators';

function App() {
  const [arrayBars, setArrayBars] = useState([]);
  const [animations, setAnimations] = useState([]);
  const [currentAnimation, setCurrentAnimation] = useState(0);

  const generateArrayBars = () => {
    const array = [];
    for (let i = 0; i < 50; i++) {
      array.push({
        barHeight: Math.floor(Math.random() * 96) + 5,
        key: i
      })
    }

    setArrayBars(array);
    setAnimations(generateBubbleSortAnimations(array));
  };

  const stepForwardAnimation = () => {
    setCurrentAnimation(currentAnimation + 1);
  };

  const playAnimations = async () => {
    for (let i = 0; i < animations.length; i++) {
      stepForwardAnimation();
      await new Promise((resolve, reject) => setTimeout(() => resolve(), i * 10));
    }
  };

  useEffect(() => {
    generateArrayBars();
  }, []);

  useEffect(() => {
    if (animations.length) {
      const [idx1, idx2] = animations[currentAnimation];
      const array = [...arrayBars];
      [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
      setArrayBars(array);
    } 
  }, [currentAnimation]);

  return (
    <ThemeProvider>
      <div>
        <CSSReset />
        <Nav generateArrayBars={generateArrayBars} />
        <Visualizer arrayBars={arrayBars} />
        <Controller stepForwardAnimation={stepForwardAnimation} playAnimations={playAnimations} />
      </div>
    </ThemeProvider>
  );
}

export default App;
