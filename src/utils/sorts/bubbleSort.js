import swap from "../swap";
import cloneArrayOfObjects from "../cloneArrayOfObjects";

const generateBubbleSortAnimations = (array) => {
  const animations = [];
  const dupArray = cloneArrayOfObjects(array);

  let swapped;
  for (let i = dupArray.length; i > 0; i--) {
    swapped = false;
    for (let j = 0; j < i - 1; j++) {
      // animations.push({type: "color", indeces: [j, j + 1]})
      if (dupArray[j].barHeight > dupArray[j + 1].barHeight) {
        animations.push({ type: "swap", idx1: j, idx2: j + 1 });
        swap(dupArray, j, j + 1);
        swapped = true;
      }
    }
    if (swapped === false) break;
  }

  return animations;
};

export default generateBubbleSortAnimations;
