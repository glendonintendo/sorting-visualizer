const generateRandomHeights = (array, arraySize) => {
  for (let i = 0; i < arraySize; i++) {
    array.push({
      barHeight: Math.floor(Math.random() * 96) + 5,
      color: "blue",
      key: i,
    });
  }

  return array;
};

export default generateRandomHeights;
