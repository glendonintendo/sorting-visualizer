import swap from "../swap";
import cloneArrayOfObjects from "../cloneArrayOfObjects";

const generateBubbleSortAnimations = (array) => {
  const animations = [];
  const dupArray = cloneArrayOfObjects(array);

  for (let i = dupArray.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      animations.push({
        type: "color",
        indeces: [j, j + 1],
        oldColors: ["blue", "blue"],
        newColors: ["green", "green"],
      });
      if (dupArray[j].barHeight > dupArray[j + 1].barHeight) {
        animations.push({ type: "swap", idx1: j, idx2: j + 1 });
        swap(dupArray, j, j + 1);
      }
      animations.push({
        type: "color",
        indeces: [j, j + 1],
        oldColors: ["green", "green"],
        newColors: ["blue", "blue"],
      });
    }
    animations.push({
      type: "color",
      indeces: [i],
      oldColors: ["blue"],
      newColors: ["orange"],
    });
  }

  return animations;
};

export default generateBubbleSortAnimations;
