import swap from "../swap";

const generateInsertionSortAnimations = (array) => {
  const animations = [];
  const dupArray = [...array];

  for (let i = 1; i < dupArray.length; i++) {
    let j = i;
    while (j > 0 && dupArray[j].barHeight < dupArray[j - 1].barHeight) {
      animations.push({ type: "swap", indeces: [j, j - 1] });
      swap(dupArray, j, j - 1);
      j -= 1;
    }
  }

  return animations;
};

export default generateInsertionSortAnimations;
