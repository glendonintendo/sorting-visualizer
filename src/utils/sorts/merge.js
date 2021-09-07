import cloneArrayOfObjects from "../cloneArrayOfObjects";

const generateMergeSortAnimations = (array) => {
  const animations = [];
  const dupArray = cloneArrayOfObjects(array);
  const auxiliary = cloneArrayOfObjects(array);
  mergeSortHelper(dupArray, 0, array.length - 1, auxiliary, animations);
  return animations;
};

const mergeSortHelper = (array, start, end, auxiliary, animations) => {
  if (start === end) return;
  const mid = Math.floor((start + end) / 2);
  mergeSortHelper(auxiliary, start, mid, array, animations);
  mergeSortHelper(auxiliary, mid + 1, end, array, animations);
  merge(array, start, mid, end, auxiliary, animations);
  if (end - start !== array.length - 1) {
    animations.push({
      type: "massColor",
      startIdx: start,
      endIdx: end,
      oldColor: "orange",
      newColor: "blue",
    });
  }
};

const merge = (array, start, mid, end, auxiliary, animations) => {
  animations.push({
    type: "massColor",
    startIdx: start,
    endIdx: end,
    oldColor: "blue",
    newColor: "red",
  });
  let k = start;
  let i = start;
  let j = mid + 1;
  while (i <= mid && j <= end) {
    if (auxiliary[i].barHeight <= auxiliary[j].barHeight) {
      animations.push({
        type: "assignHeightAndColor",
        index: k,
        newHeight: auxiliary[i].barHeight,
        oldHeight: auxiliary[k].barHeight,
        oldColor: "red",
        newColor: "orange",
      });
      array[k] = auxiliary[i];
      k++;
      i++;
    } else {
      animations.push({
        type: "assignHeightAndColor",
        index: k,
        newHeight: auxiliary[j].barHeight,
        oldHeight: auxiliary[k].barHeight,
        oldColor: "red",
        newColor: "orange",
      });
      array[k] = auxiliary[j];
      k++;
      j++;
    }
  }

  while (i <= mid) {
    animations.push({
      type: "assignHeightAndColor",
      index: k,
      newHeight: auxiliary[i].barHeight,
      oldHeight: auxiliary[k].barHeight,
      oldColor: "red",
      newColor: "orange",
    });
    array[k] = auxiliary[i];
    k++;
    i++;
  }

  while (j <= end) {
    animations.push({
      type: "assignHeightAndColor",
      index: k,
      newHeight: auxiliary[j].barHeight,
      oldHeight: auxiliary[k].barHeight,
      oldColor: "red",
      newColor: "orange",
    });
    array[k] = auxiliary[j];
    k++;
    j++;
  }
};

export default generateMergeSortAnimations;
