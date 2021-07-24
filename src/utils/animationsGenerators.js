const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

export const generateBubbleSortAnimations = (array) => {
  const animations = [];
  const dupArray = [...array];

  let swapped;
  for (let i = dupArray.length; i > 0; i--) {
    swapped = false;
    for (let j = 0; j < i - 1; j++) {
      // animations.push({type: "color", indeces: [j, j + 1]})
      if (dupArray[j].barHeight > dupArray[j + 1].barHeight) {
        animations.push({type: "swap", indeces: [j, j + 1]});
        swap(dupArray, j, j + 1);
        swapped = true;
      }
    }
    if (swapped === false) break;
  };

  return animations;
}