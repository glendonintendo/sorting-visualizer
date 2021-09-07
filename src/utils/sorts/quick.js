import swap from "../swap";
import cloneArrayOfObjects from "../cloneArrayOfObjects";

const generateQuickSortAnimations = (array) => {
  const animations = [];
  const dupArray = cloneArrayOfObjects(array);
  quickSortHelper(dupArray, 0, dupArray.length - 1, animations);
  return animations;
};

const quickSortHelper = (array, start, end, animations) => {
  const pivIdx = partition(array, start, end, animations);

  if (pivIdx - 1 >= start) {
    quickSortHelper(array, start, pivIdx - 1, animations);
  }
  if (pivIdx + 1 <= end) {
    quickSortHelper(array, pivIdx + 1, end, animations);
  }
};

const partition = (array, start, end, animations) => {
  if (start === end) {
    animations.push({
      type: "color",
      indeces: [start],
      oldColors: ["blue"],
      newColors: ["red"],
    });
    animations.push({
      type: "color",
      indeces: [start],
      oldColors: ["red"],
      newColors: ["orange"],
    });
    return;
  }
  const randIdx = Math.floor(Math.random() * (end - start) + start);
  animations.push({
    type: "color",
    indeces: [randIdx],
    oldColors: ["blue"],
    newColors: ["red"],
  });
  animations.push({
    type: "color",
    indeces: [start],
    oldColors: ["blue"],
    newColors: ["green"],
  });
  animations.push({ type: "swap", idx1: start, idx2: randIdx });
  swap(array, start, randIdx);
  animations.push({
    type: "color",
    indeces: [randIdx],
    oldColors: ["green"],
    newColors: ["blue"],
  });

  const pivVal = array[start].barHeight;
  let leftIdx = start + 1;
  let rightIdx = end;
  animations.push({
    type: "color",
    indeces: [leftIdx, rightIdx],
    oldColors: ["blue", "blue"],
    newColors: ["green", "green"],
  });
  while (leftIdx <= rightIdx) {
    if (
      array[leftIdx].barHeight > pivVal &&
      array[rightIdx].barHeight < pivVal
    ) {
      animations.push({ type: "swap", idx1: rightIdx, idx2: leftIdx });
      swap(array, rightIdx, leftIdx);
    }

    if (array[leftIdx].barHeight <= pivVal) {
      if (leftIdx !== rightIdx) {
        animations.push({
          type: "color",
          indeces: [leftIdx, leftIdx + 1],
          oldColors: ["green", "blue"],
          newColors: ["blue", "green"],
        });
      }
      leftIdx++;
    }

    if (array[rightIdx].barHeight >= pivVal) {
      if (rightIdx - 1 === start) {
        animations.push({
          type: "color",
          indeces: [start, rightIdx],
          oldColors: ["red", "green"],
          newColors: ["orange", "blue"],
        });
        return start;
      }
      animations.push({
        type: "color",
        indeces: [rightIdx, rightIdx - 1],
        oldColors: ["green", "blue"],
        newColors: ["blue", "green"],
      });
      rightIdx--;
    }
  }

  animations.push({ type: "swap", idx1: start, idx2: rightIdx });
  swap(array, start, rightIdx);
  animations.push({
    type: "color",
    indeces: [start, rightIdx],
    oldColors: ["green", "red"],
    newColors: ["blue", "orange"],
  });
  return rightIdx;
};

export default generateQuickSortAnimations;
