import swap from "../swap";
import cloneArrayOfObjects from "../cloneArrayOfObjects";

const generateInsertionSortAnimations = (array) => {
  const animations = [];
  const dupArray = cloneArrayOfObjects(array);

  animations.push({
    type: "color",
    indeces: [0],
    oldColors: ["blue"],
    newColors: ["orange"],
  });

  for (let i = 1; i < dupArray.length; i++) {
    let j = i;
    while (j > 0) {
      animations.push({
        type: "color",
        indeces: [j],
        oldColors: ["blue"],
        newColors: ["red"],
      });

      animations.push({
        type: "color",
        indeces: [j - 1],
        oldColors: ["orange"],
        newColors: ["green"],
      });
      if (dupArray[j].barHeight >= dupArray[j - 1].barHeight) {
        animations.push({
          type: "color",
          indeces: [j, j - 1],
          oldColors: ["red", "green"],
          newColors: ["orange", "orange"],
        });
        break;
      }
      animations.push({ type: "swap", idx1: j, idx2: j - 1 });
      swap(dupArray, j, j - 1);
      animations.push({
        type: "color",
        indeces: [j],
        oldColors: ["green"],
        newColors: ["orange"],
      });

      j -= 1;
    }
    animations.push({
      type: "color",
      indeces: [0],
      oldColors: ["red"],
      newColors: ["orange"],
    });
  }

  return animations;
};

export default generateInsertionSortAnimations;
