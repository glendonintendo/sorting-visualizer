import swap from "../swap";

const generateSelectionSortAnimations = (array) => {
  const animations = [];
  const dupArray = [...array];

  for (let i = 0; i < dupArray.length; i++) {
    let min = i;
    for (let j = i; j < dupArray.length; j++) {
      if (dupArray[j].barHeight < dupArray[min].barHeight) {
        min = j;
      }
    }
    animations.push({ type: "swap", indeces: [i, min] });
    swap(dupArray, i, min);
  }

  return animations;
};

export default generateSelectionSortAnimations;
