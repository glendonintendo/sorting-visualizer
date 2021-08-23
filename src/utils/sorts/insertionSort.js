import swap from "../swap";
import cloneArrayOfObjects from "../cloneArrayOfObjects";

const generateInsertionSortAnimations = (array) => {
  const animations = [];
  const dupArray = cloneArrayOfObjects(array);

  for (let i = 1; i < dupArray.length; i++) {
    let j = i;
    while (j > 0 && dupArray[j].barHeight < dupArray[j - 1].barHeight) {
      animations.push({ type: "swap", idx1: j, idx2: j - 1 });
      swap(dupArray, j, j - 1);
      j -= 1;
    }
  }

  return animations;
};

export default generateInsertionSortAnimations;
