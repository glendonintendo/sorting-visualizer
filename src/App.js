/**
 * The App component is one of the few stateful components in the application.
 * App has three children: Nav (the controller at the top of the page),
 * Visualizer (the main body that show the array bars and animations),
 * and Controller (the main controller of the animation with additional options).
 * 
 * Each of the children "speak" to each other and therefor state for each of those
 * components was lifted to App in order to pass information between those siblings.
 * 
 * The bulk of the animation logic also runs through the app component via the
 * utility functions in the utils folder.
 */

import { useState, useEffect, useRef } from "react";
import { useColorMode } from "@chakra-ui/react";

import Nav from "./components/Nav";
import Visualizer from "./components/Visualizer";
import Controller from "./components/Controller";
import generateArrayBars from "./utils/generateArrayBars";
import generateAnimations from "./utils/generateAnimations";
import cloneArrayOfObjects from "./utils/cloneArrayOfObjects";
import getEndArrayState from "./utils/getEndArrayState";
import getForwardStepArray from "./utils/getForwardStepArray";
import getBackStepArray from "./utils/getBackStepArray";
import randomizeArray from "./utils/arrayOptions/randomOrder";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [arraySize, setArraySize] = useState(30);
  const [arrayBars, setArrayBars] = useState(generateArrayBars(arraySize));
  const [sortType, setSortType] = useState("bubble");
  const [animationSpeed, setAnimationSpeed] = useState(50);
  const animations = useRef([]);
  const currentAnimation = useRef(0);
  const beginArrayState = useRef([]);
  const endArrayState = useRef([]);
  const barHeights = useRef("random");
  const sortedOrder = useRef("random");
  const { colorMode, toggleColorMode } = useColorMode();

  const initializeArrayState = () => {
    console.log("initialize");
    const array = generateArrayBars(
      arraySize,
      barHeights.current,
      sortedOrder.current
    );

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
    console.log(animations.current[currentAnimation.current]);
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

  const shuffleArrayBars = () => {
    const array = randomizeArray(beginArrayState.current);

    setArrayBars(array);
    beginArrayState.current = cloneArrayOfObjects(array);
    endArrayState.current = getEndArrayState(array);
    setIsPlaying(false);
    animations.current = generateAnimations(array, sortType);
    currentAnimation.current = 0;
  };

  const setBarHeights = (newBarHeights) => {
    barHeights.current = newBarHeights;
  };

  const setSortedOrder = (newSortedOrder) => {
    sortedOrder.current = newSortedOrder;
  };

  useEffect(() => {
    if (isPlaying) {
      const animationTimer = setTimeout(stepForwardAnimation, animationSpeed);

      return () => clearTimeout(animationTimer);
    }
  }, [isPlaying, arrayBars, stepForwardAnimation]);

  useEffect(() => {
    initializeArrayState();
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
        initializeArrayState={initializeArrayState}
        toggleColorMode={toggleColorMode}
        colorMode={colorMode}
        shuffleArrayBars={shuffleArrayBars}
        setBarHeights={setBarHeights}
        setSortedOrder={setSortedOrder}
      />
    </>
  );
}

export default App;
