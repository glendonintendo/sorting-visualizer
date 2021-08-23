import swap from "../swap";
import cloneArrayOfObjects from "../cloneArrayOfObjects";

const generateSelectionSortAnimations = (array) => {
  const animations = [];
  const dupArray = cloneArrayOfObjects(array);

  for (let i = 0; i < dupArray.length; i++) {
    let min = i;
    for (let j = i; j < dupArray.length; j++) {
      if (dupArray[j].barHeight < dupArray[min].barHeight) {
        min = j;
      }
    }
    animations.push({ type: "swap", idx1: i, idx2: min });
    swap(dupArray, i, min);
  }

  return animations;
};

export default generateSelectionSortAnimations;
