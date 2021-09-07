const generateEqualStepHeights = (array, arraySize) => {
  let currBarHeight = 5;
  let step = 95 / arraySize;

  for (let i = 0; i < arraySize; i++) {
    array.push({
      barHeight: currBarHeight,
      color: "blue",
      key: i,
    });
    currBarHeight += step;
  }

  return array;
};

export default generateEqualStepHeights;
