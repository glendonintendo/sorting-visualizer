import { useState, useEffect, useRef, useCallback } from "react";
import { useColorMode } from "@chakra-ui/react";

import Nav from "./components/Nav";
import Visualizer from "./components/Visualizer";
import Controller from "./components/Controller";
import createArrayBars from "./utils/createArrayBars";
import generateAnimations from "./utils/animationsGenerators";
import cloneArrayOfObjects from "./utils/cloneArrayOfObjects";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [arraySize, setArraySize] = useState(30);
  const [arrayBars, setArrayBars] = useState(createArrayBars(arraySize));
  const [sortType, setSortType] = useState("bubble");
  const [animationSpeed, setAnimationSpeed] = useState(50);
  const animations = useRef(generateAnimations(arrayBars, sortType));
  const currentAnimation = useRef(0);
  const beginArrayState = useRef(cloneArrayOfObjects(arrayBars));
  const { colorMode, toggleColorMode } = useColorMode();

  const generateArrayBars = () => {
    const array = createArrayBars(arraySize);

    setArrayBars(array);
    beginArrayState.current = cloneArrayOfObjects(array);
    setIsPlaying(false);
    animations.current = generateAnimations(array, sortType);
    currentAnimation.current = 0;
  };

  const stepForwardAnimation = useCallback(() => {
    if (currentAnimation.current >= animations.current.length) {
      setIsPlaying(false);
      return;
    }
    let array = cloneArrayOfObjects(arrayBars);
    const animation = animations.current[currentAnimation.current];
    switch (animation.type) {
      case "swap":
        const { idx1, idx2 } = animation;
        [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
        break;
      case "color":
        for (let i = 0; i < animation.indeces.length; i++) {
          array[animation.indeces[i]].color = animation.newColors[i];
        }
        break;
      case "massColor":
        const { startIdx, endIdx, newColor } = animation;
        for (let i = startIdx; i <= endIdx; i++) {
          array[i].color = newColor;
        }
        break;
      case "assignHeight":
        array[animation.index].barHeight = animation.newHeight;
        break;
      default:
        break;
    }

    currentAnimation.current++;
    setArrayBars(array);
  }, [arrayBars]);

  const stepBackwardAnimation = () => {
    if (currentAnimation.current <= 0) return;
    currentAnimation.current--;

    const array = cloneArrayOfObjects(arrayBars);
    const animation = animations.current[currentAnimation.current];
    switch (animation.type) {
      case "swap":
        const { idx1, idx2 } = animations.current[currentAnimation.current];
        [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
        break;
      case "assignHeight":
        array[animation.index].barHeight = animation.oldHeight;
        break;
      default:
        break;
    }

    setArrayBars(array);
  };

  const goToStart = () => {
    setArrayBars(cloneArrayOfObjects(beginArrayState.current));
    setIsPlaying(false);
    currentAnimation.current = 0;
  };

  const goToEnd = () => {
    const array = cloneArrayOfObjects(arrayBars);
    for (let i = currentAnimation.current; i < animations.current.length; i++) {
      const { idx1, idx2 } = animations.current[i];
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

  const onSelectSortType = (value) => {
    setSortType(value);
  };

  const playAnimations = () => {
    setIsPlaying(true);
  };

  const pauseAnimations = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    if (isPlaying) {
      const animationTimer = setTimeout(stepForwardAnimation, animationSpeed);

      return () => clearTimeout(animationTimer);
    }
  }, [isPlaying, arrayBars, stepForwardAnimation]);

  useEffect(() => {
    generateArrayBars();
  }, [arraySize]);

  useEffect(() => {
    setArrayBars(cloneArrayOfObjects(beginArrayState.current));
    setIsPlaying(false);
    animations.current = generateAnimations(beginArrayState.current, sortType);
    currentAnimation.current = 0;
  }, [sortType]);

  return (
    <>
      <Nav
        onArraySizeSliderChange={onArraySizeSliderChange}
        onAnimationSpeedSliderChange={onAnimationSpeedSliderChange}
        arraySize={arraySize}
        animationSpeed={animationSpeed}
        sortType={sortType}
        onSelectSortType={onSelectSortType}
        colorMode={colorMode}
      />
      <Visualizer
        arrayBars={arrayBars}
        arraySize={arraySize}
        colorMode={colorMode}
      />
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
        generateArrayBars={generateArrayBars}
        toggleColorMode={toggleColorMode}
        colorMode={colorMode}
      />
    </>
  );
}

export default App;
