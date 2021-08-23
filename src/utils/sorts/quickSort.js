import swap from "../swap";
import cloneArrayOfObjects from "../cloneArrayOfObjects";

const generateQuickSortAnimations = (array) => {
  const animations = [];
  const dupArray = cloneArrayOfObjects(array);
  quickSortHelper(dupArray, 0, dupArray.length - 1, animations);
  return animations;
};

const quickSortHelper = (array, start, end, animations) => {
  if (start >= end) return;
  const randIdx = Math.floor(Math.random() * (end - start) + start);
  if (start !== randIdx)
    animations.push({ type: "swap", idx1: start, idx2: randIdx });
  swap(array, start, randIdx);
  const pivot = array[start].barHeight;
  let leftIdx = start;
  let rightIdx = start + 1;
  while (rightIdx <= end) {
    if (array[rightIdx].barHeight < pivot) {
      leftIdx++;
      if (rightIdx !== leftIdx)
        animations.push({ type: "swap", idx1: rightIdx, idx2: leftIdx });
      swap(array, rightIdx, leftIdx);
    }
    rightIdx++;
  }
  if (start !== leftIdx)
    animations.push({ type: "swap", ind1: start, idx2: leftIdx });
  swap(array, start, leftIdx);
  quickSortHelper(array, start, leftIdx - 1, animations);
  quickSortHelper(array, leftIdx + 1, rightIdx - 1, animations);
};

export default generateQuickSortAnimations;
