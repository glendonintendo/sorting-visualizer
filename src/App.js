import { useState, useEffect, useRef } from "react";
import { useColorMode } from "@chakra-ui/react";

import Nav from "./components/Nav";
import Visualizer from "./components/Visualizer";
import Controller from "./components/Controller";
import createArrayBars from "./utils/createArrayBars";
import generateAnimations from "./utils/animationsGenerators";
import cloneArrayOfObjects from "./utils/cloneArrayOfObjects";
import getEndArrayState from "./utils/getEndArrayState";
import getForwardStepArray from "./utils/getForwardStepArray";
import getBackStepArray from "./utils/getBackStepArray";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [arraySize, setArraySize] = useState(30);
  const [arrayBars, setArrayBars] = useState(createArrayBars(arraySize));
  const [sortType, setSortType] = useState("bubble");
  const [animationSpeed, setAnimationSpeed] = useState(50);
  const animations = useRef(generateAnimations(arrayBars, sortType));
  const currentAnimation = useRef(0);
  const beginArrayState = useRef(cloneArrayOfObjects(arrayBars));
  const endArrayState = useRef(getEndArrayState(arrayBars));
  const { colorMode, toggleColorMode } = useColorMode();

  const generateArrayBars = () => {
    const array = createArrayBars(arraySize);

    setArrayBars(array);
    beginArrayState.current = cloneArrayOfObjects(array);
    endArrayState.current = getEndArrayState(array);
    setIsPlaying(false);
    animations.current = generateAnimations(array, sortType);
    currentAnimation.current = 0;
  };

  const stepForwardAnimation = () => {
    if (currentAnimation.current >= animations.current.length) {
      setIsPlaying(false);
      return;
    }
    const array = getForwardStepArray(
      cloneArrayOfObjects(arrayBars),
      animations.current[currentAnimation.current]
    );

    currentAnimation.current++;
    setArrayBars(array);
  };

  const stepBackwardAnimation = () => {
    if (currentAnimation.current <= 0) return;
    currentAnimation.current--;

    const array = getBackStepArray(
      cloneArrayOfObjects(arrayBars),
      animations.current[currentAnimation.current]
    );

    setArrayBars(array);
  };

  const goToStart = () => {
    setArrayBars(cloneArrayOfObjects(beginArrayState.current));
    setIsPlaying(false);
    currentAnimation.current = 0;
  };

  const goToEnd = () => {
    setArrayBars(cloneArrayOfObjects(endArrayState.current));
    setIsPlaying(false);
    currentAnimation.current = animations.current.length;
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
