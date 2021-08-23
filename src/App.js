import { useState, useEffect, useRef, useCallback } from "react";
import { generateAnimations } from "./utils/animationsGenerators";
import { useColorMode } from "@chakra-ui/react";

import Nav from "./components/Nav";
import Visualizer from "./components/Visualizer";
import Controller from "./components/Controller";

function App() {
  const [arrayBars, setArrayBars] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [arraySize, setArraySize] = useState(30);
  const [sortType, setSortType] = useState("bubble");
  const [animationSpeed, setAnimationSpeed] = useState(50);
  const animations = useRef([]);
  const currentAnimation = useRef(0);
  const { colorMode, toggleColorMode } = useColorMode();

  const generateArrayBars = () => {
    const array = [];
    for (let i = 0; i < arraySize; i++) {
      array.push({
        barHeight: Math.floor(Math.random() * 96) + 5,
        color: "blue",
        key: i,
      });
    }

    setArrayBars(array);
    setIsPlaying(false);
    animations.current = generateAnimations(array, sortType);
    currentAnimation.current = 0;
  };

  const stepForwardAnimation = useCallback(() => {
    if (currentAnimation.current >= animations.current.length) {
      setIsPlaying(false);
      return;
    }
    let array = [...arrayBars];
    const animation = animations.current[currentAnimation.current];
    switch (animation.type) {
      case "swap":
        const [idx1, idx2] = animation.indeces;
        [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
        break;
      case "color":
        array = array.map((barObj, i) => {
          if (i === idx1 || i === idx2) {
            const coloredBar = { ...barObj, color: "black" };
            return coloredBar;
          }
          return { ...barObj, color: "blue" };
        });
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

    const array = [...arrayBars];
    const animation = animations.current[currentAnimation.current];
    switch (animation.type) {
      case "swap":
        const [idx1, idx2] =
          animations.current[currentAnimation.current].indeces;
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
    const array = [...arrayBars];
    for (let i = currentAnimation.current - 1; i >= 0; i--) {
      const [idx1, idx2] = animations.current[i].indeces;
      [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
    }
    currentAnimation.current = 0;
    setArrayBars(array);
    setIsPlaying(false);
  };

  const goToEnd = () => {
    const array = [...arrayBars];
    for (let i = currentAnimation.current; i < animations.current.length; i++) {
      const [idx1, idx2] = animations.current[i].indeces;
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
  }, [arraySize, sortType]);

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
