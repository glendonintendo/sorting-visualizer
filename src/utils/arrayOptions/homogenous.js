const generateHomogenousHeights = (array, arraySize) => {
  let currHeight = Math.floor(Math.random() * 96) + 5;

  for (let i = 0; i < arraySize; i++) {
    let barHeight;
    if (Math.random() < 0.5) barHeight = currHeight;
    else {
      barHeight = Math.floor(Math.random() * 96) + 5;
      currHeight = barHeight;
    }

    array.push({
      barHeight,
      color: "blue",
      key: i,
    });
  }

  return array;
};

export default generateHomogenousHeights;
