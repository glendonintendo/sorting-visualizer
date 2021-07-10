import React, { useState, useEffect } from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/react';
import { Nav } from './components/Nav';
import { Visualizer } from './components/Visualizer';
import { Controller } from './components/Controller';

function App() {
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
    <ThemeProvider>
      <div>
        <CSSReset />
        <Nav />
        <Visualizer arrayBars={arrayBars} />
        <Controller />
      </div>
    </ThemeProvider>
  );
}

export default App;
