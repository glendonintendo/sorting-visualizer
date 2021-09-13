import swap from "../swap";
import cloneArrayOfObjects from "../cloneArrayOfObjects";

const generateBubbleSortAnimations = (array) => {
  const animations = [];
  const dupArray = cloneArrayOfObjects(array);

  let swapped = false;
  for (let i = dupArray.length - 1; i >= 0; i--) {
    swapped = false;
    for (let j = 0; j < i; j++) {
      animations.push({
        type: "color",
        indeces: [j, j + 1],
        oldColors: ["blue", "blue"],
        newColors: ["green", "green"],
      });
      if (dupArray[j].barHeight > dupArray[j + 1].barHeight) {
        animations.push({ type: "swap", idx1: j, idx2: j + 1 });
        swapped = true;
        swap(dupArray, j, j + 1);
      }
      animations.push({
        type: "color",
        indeces: [j, j + 1],
        oldColors: ["green", "green"],
        newColors: ["blue", "blue"],
      });
    }

    if (swapped === false) {
      animations.push({
        type: "massColor",
        startIdx: 0,
        endIdx: i,
        oldColor: "blue",
        newColor: "orange",
      });
      break;
    } else {
      animations.push({
        type: "color",
        indeces: [i],
        oldColors: ["blue"],
        newColors: ["orange"],
      });
    }
  }

  return animations;
};

export default generateBubbleSortAnimations;
