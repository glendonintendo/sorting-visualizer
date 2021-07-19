import { useState, useEffect, useRef, useCallback } from "react";
import Nav from "./components/Nav";
import Visualizer from "./components/Visualizer";
import Controller from "./components/Controller";

import { generateBubbleSortAnimations } from "./utils/animationsGenerators";

function App() {
  const [arrayBars, setArrayBars] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [arraySize, setArraySize] = useState(30);
  const [animationSpeed, setAnimationSpeed] = useState(50);
  const animations = useRef([]);
  const currentAnimation = useRef(0);

  const generateArrayBars = () => {
    const array = [];
    for (let i = 0; i < arraySize; i++) {
      array.push({
        barHeight: Math.floor(Math.random() * 96) + 5,
        key: i,
      });
    }

    setArrayBars(array);
    setIsPlaying(false);
    animations.current = generateBubbleSortAnimations(array);
    currentAnimation.current = 0;
  };

  const stepForwardAnimation = useCallback(() => {
    if (currentAnimation.current >= animations.current.length) {
      setIsPlaying(false);
      return;
    }
    const [idx1, idx2] = animations.current[currentAnimation.current];
    const array = [...arrayBars];
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
    currentAnimation.current++;
    setArrayBars(array);
  }, [arrayBars]);

  const stepBackwardAnimation = () => {
    if (currentAnimation.current <= 0) return;
    currentAnimation.current--;
    const [idx1, idx2] = animations.current[currentAnimation.current];
    const array = [...arrayBars];
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
    setArrayBars(array);
  };

  const goToStart = () => {
    const array = [...arrayBars];
    for (let i = currentAnimation.current - 1; i >= 0; i--) {
      const [idx1, idx2] = animations.current[i];
      [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
    }
    currentAnimation.current = 0;
    setArrayBars(array);
    setIsPlaying(false);
  };

  const goToEnd = () => {
    const array = [...arrayBars];
    for (let i = currentAnimation.current; i < animations.current.length; i++) {
      const [idx1, idx2] = animations.current[i];
      [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
    }
    currentAnimation.current = animations.current.length;
    setArrayBars(array);
  };

  const onArraySizeSliderChange = (value) => {
    setArraySize(value);
  };

  const onAnimationSpeedSliderChange = (value) => {
    setAnimationSpeed(200 - value);
  };

  const playAnimations = () => {
    setIsPlaying(true);
  };

  const pauseAnimations = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    generateArrayBars();
  }, []);

  useEffect(() => {
    if (isPlaying) {
      const animationTimer = setTimeout(stepForwardAnimation, animationSpeed);

      return () => clearTimeout(animationTimer);
    }
  }, [isPlaying, arrayBars, stepForwardAnimation]);

  useEffect(() => {
    generateArrayBars();
  }, [arraySize]);

  return (
    <>
      <Nav
        generateArrayBars={generateArrayBars}
        onArraySizeSliderChange={onArraySizeSliderChange}
        onAnimationSpeedSliderChange={onAnimationSpeedSliderChange}
        arraySize={arraySize}
        animationSpeed={animationSpeed}
      />
      <Visualizer arrayBars={arrayBars} arraySize={arraySize} />
      <Controller
        stepForwardAnimation={stepForwardAnimation}
        playAnimations={playAnimations}
        pauseAnimations={pauseAnimations}
        stepBackwardAnimation={stepBackwardAnimation}
        goToEnd={goToEnd}
        goToStart={goToStart}
        isPlaying={isPlaying}
        currentAnimation={currentAnimation.current}
        animations={animations.current}
      />
    </>
  );
}

export default App;
