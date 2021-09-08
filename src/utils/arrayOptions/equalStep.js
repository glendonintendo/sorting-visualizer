const generateEqualStepHeights = (array, arraySize) => {
  let currBarHeight = 5;
  let step = 95 / (arraySize - 1);

  for (let i = 0; i < arraySize; i++) {
    array.push({
      barHeight: currBarHeight.toFixed(2),
      color: "blue",
      key: i,
    });
    currBarHeight += step;
  }

  return array;
};

export default generateEqualStepHeights;
