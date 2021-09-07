import generateRandomArray from "./arrayOptions/randomHeights";

const generateArrayBars = (array, arrayType="random", sortedOrder="random") => {
  switch (arrayType) {
    case "random":
      return generateRandomArray(array);
    default:
      return;
  }
};

export default generateArrayBars;
