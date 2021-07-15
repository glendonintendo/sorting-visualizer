import { useState, useEffect, useRef } from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/react";
import Nav from "./components/Nav";
import Visualizer from "./components/Visualizer";
import Controller from "./components/Controller";

import { generateBubbleSortAnimations } from "./utils/animationsGenerators";

function App() {
  const [arrayBars, setArrayBars] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const animations = useRef([]);
  const currentAnimation = useRef();

  const generateArrayBars = () => {
    const array = [];
    for (let i = 0; i < 50; i++) {
      array.push({
        barHeight: Math.floor(Math.random() * 96) + 5,
        key: i,
      });
    }

    setArrayBars(array);
    animations.current = generateBubbleSortAnimations(array);
  };

  const stepForwardAnimation = () => {
    if (currentAnimation.current === undefined) currentAnimation.current = 0;
    else currentAnimation.current += 1;

    const [idx1, idx2] = animations.current[currentAnimation.current];
    const array = [...arrayBars];
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
    setArrayBars(array);
  };

  const playAnimations = () => {
    setIsPlaying(true);
  };

  useEffect(() => {
    generateArrayBars();
  }, []);

  useEffect(() => {
    if (isPlaying) {
      const animationTimer = setTimeout(stepForwardAnimation, 10);

      return () => clearTimeout(animationTimer);
    }
  }, [isPlaying, arrayBars])

  return (
    <ThemeProvider>
      <div>
        <CSSReset />
        <Nav generateArrayBars={generateArrayBars} />
        <Visualizer arrayBars={arrayBars} />
        <Controller
          stepForwardAnimation={stepForwardAnimation}
          playAnimations={playAnimations}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
