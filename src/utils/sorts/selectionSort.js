import swap from "../swap";
import cloneArrayOfObjects from "../cloneArrayOfObjects";

const generateSelectionSortAnimations = (array) => {
  const animations = [];
  const dupArray = cloneArrayOfObjects(array);

  for (let i = 0; i < dupArray.length; i++) {
    let min;
    for (let j = i; j < dupArray.length; j++) {
      animations.push({
        type: "color",
        indeces: [j],
        oldColors: ["blue"],
        newColors: ["green"],
      });
      if (
        min === undefined ||
        dupArray[j].barHeight < dupArray[min].barHeight
      ) {
        if (min === undefined) {
          animations.push({
            type: "color",
            indeces: [j],
            oldColors: ["green"],
            newColors: ["red"],
          });
        } else {
          animations.push({
            type: "color",
            indeces: [min, j],
            oldColors: ["red", "green"],
            newColors: ["blue", "red"],
          });
        }

        min = j;
      } else {
        animations.push({
          type: "color",
          indeces: [j],
          oldColors: ["green"],
          newColors: ["blue"],
        });
      }
    }
    animations.push({ type: "swap", idx1: i, idx2: min });
    animations.push({
      type: "color",
      indeces: [i],
      oldColors: ["red"],
      newColors: ["orange"],
    });
    swap(dupArray, i, min);
  }

  return animations;
};

export default generateSelectionSortAnimations;
