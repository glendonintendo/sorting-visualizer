import swap from "../swap";
import cloneArrayOfObjects from "../cloneArrayOfObjects";

const generateDutchFlagAnimations = (array) => {
  const animations = [];
  const dupArray = cloneArrayOfObjects(array);
  quickSortHelper(dupArray, 0, dupArray.length - 1, animations);
  return animations;
};

const quickSortHelper = (array, start, end, animations) => {
  const pivIdx = partition(array, start, end, animations);
  if (!pivIdx) return;

  if (pivIdx[0] - 1 >= start) {
    quickSortHelper(array, start, pivIdx[0] - 1, animations);
  }
  if (pivIdx[1] + 1 <= end) {
    quickSortHelper(array, pivIdx[1] + 1, end, animations);
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
  if (randIdx === start) {
    animations.push({
      type: "color",
      indeces: [start],
      oldColors: ["blue"],
      newColors: ["red"],
    });
  } else {
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
  }

  const pivVal = array[start].barHeight;
  let firstDup = start + 1;
  let firstLarger = start + 1;

  for (let i = start + 1; i <= end; i++) {
    animations.push({
      type: "color",
      indeces: [i],
      oldColors: ["blue"],
      newColors: ["green"],
    });
    if (array[i].barHeight < pivVal) {
      if (i !== firstLarger) {
        animations.push({
          type: "color",
          indeces: [i, firstLarger],
          oldColors: ["green", "blue"],
          newColors: ["red", "red"],
        });
        animations.push({ type: "swap", idx1: i, idx2: firstLarger });
        animations.push({
          type: "color",
          indeces: [i, firstLarger],
          oldColors: ["red", "red"],
          newColors: ["blue", "blue"],
        });
      } else {
        animations.push({
          type: "color",
          indeces: [i],
          oldColors: ["green"],
          newColors: ["blue"],
        });
      }
      if (firstLarger !== firstDup) {
        animations.push({
          type: "color",
          indeces: [firstLarger, firstDup],
          oldColors: ["blue", "blue"],
          newColors: ["red", "red"],
        });
        animations.push({ type: "swap", idx1: firstLarger, idx2: firstDup });
        animations.push({
          type: "color",
          indeces: [firstLarger, firstDup],
          oldColors: ["red", "red"],
          newColors: ["blue", "blue"],
        });
      }

      swap(array, i, firstLarger);
      swap(array, firstLarger, firstDup);
      firstLarger++;
      firstDup++;
    } else if (array[i].barHeight === pivVal) {
      if (i !== firstLarger) {
        animations.push({
          type: "color",
          indeces: [i, firstLarger],
          oldColors: ["green", "blue"],
          newColors: ["red", "red"],
        });
        animations.push({ type: "swap", idx1: i, idx2: firstLarger });
        animations.push({
          type: "color",
          indeces: [i, firstLarger],
          oldColors: ["red", "red"],
          newColors: ["blue", "blue"],
        });
      } else {
        animations.push({
          type: "color",
          indeces: [i],
          oldColors: ["green"],
          newColors: ["blue"],
        });
      }
      swap(array, i, firstLarger);
      firstLarger++;
    } else {
      animations.push({
        type: "color",
        indeces: [i],
        oldColors: ["green"],
        newColors: ["blue"],
      });
    }
  }

  animations.push({
    type: "color",
    indeces: [firstDup - 1],
    oldColors: ["blue"],
    newColors: ["red"],
  });
  swap(array, start, firstDup - 1);
  animations.push({ type: "swap", idx1: start, idx2: firstDup - 1 });
  animations.push({
    type: "color",
    indeces: [start, firstDup - 1],
    oldColors: ["red", "red"],
    newColors: ["blue", "orange"],
  });
  animations.push({
    type: "massColor",
    startIdx: firstDup,
    endIdx: firstLarger - 1,
    oldColor: "blue",
    newColor: "orange",
  });
  return [firstDup - 1, firstLarger - 1];
};

export default generateDutchFlagAnimations;
