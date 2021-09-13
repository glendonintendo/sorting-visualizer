/**
 * Creates the array bars data set from the user input parameters.
 * This will make calls to the different helper functions in arrayOptions
 * to create an array that matches the parameters.
 */

import generateRandomHeights from "./arrayOptions/randomHeights";
import generateEqualStepHeights from "./arrayOptions/equalStep";
import generateHomogenousHeights from "./arrayOptions/homogenous";
import randomizeArray from "./arrayOptions/randomOrder";
import nearlySortArray from "./arrayOptions/nearlySorted";
import reverseSortArray from "./arrayOptions/reverseSorted";

const generateArrayBars = (
  arraySize,
  barHeights = "random",
  sortedOrder = "random"
) => {
  let array = [];

  switch (barHeights) {
    case "random":
      generateRandomHeights(array, arraySize);
      break;
    case "equal-step":
      generateEqualStepHeights(array, arraySize);
      break;
    case "homogenous":
      generateHomogenousHeights(array, arraySize);
      break;
    default:
      break;
  }

  switch (sortedOrder) {
    case "random":
      randomizeArray(array);
      break;
    case "nearly-sorted":
      nearlySortArray(array);
      break;
    case "reverse-sorted":
      reverseSortArray(array);
      break;
    default:
      break;
  }

  return array;
};

export default generateArrayBars;
