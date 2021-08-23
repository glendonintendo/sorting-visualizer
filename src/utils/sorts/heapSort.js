import swap from "../swap";

const generateHeapSortAnimations = (array) => {
  const animations = [];
  const dupArray = [...array];

  for (let i = 1; i < dupArray.length; i++) {
    const currVal = dupArray[i].barHeight;
    let currIdx = i;

    while (currIdx > 0) {
      const parIdx = Math.floor((currIdx - 1) / 2);
      if (currVal <= dupArray[parIdx].barHeight) break;
      animations.push({ type: "swap", indeces: [currIdx, parIdx] });
      swap(dupArray, currIdx, parIdx);
      currIdx = parIdx;
    }
  }

  for (let end = dupArray.length - 1; end > 0; end--) {
    animations.push({ type: "swap", indeces: [0, end] });
    swap(dupArray, 0, end);
    let currIdx = 0;
    const currVal = dupArray[0].barHeight;

    while (true) {
      let leftChildIdx = 2 * currIdx + 1;
      let rightChildIdx = 2 * currIdx + 2;
      let leftChildVal, rightChildVal;
      let idxToSwap = null;

      if (leftChildIdx < end) {
        leftChildVal = dupArray[leftChildIdx].barHeight;
        if (leftChildVal > currVal) {
          idxToSwap = leftChildIdx;
        }
      }

      if (rightChildIdx < end) {
        rightChildVal = dupArray[rightChildIdx].barHeight;
        if (
          (rightChildVal > currVal && idxToSwap === null) ||
          (rightChildVal > leftChildVal && idxToSwap !== null)
        ) {
          idxToSwap = rightChildIdx;
        }
      }

      if (idxToSwap === null) break;

      animations.push({ type: "swap", indeces: [currIdx, idxToSwap] });
      swap(dupArray, currIdx, idxToSwap);
      currIdx = idxToSwap;
    }
  }

  return animations;
};

export default generateHeapSortAnimations;
