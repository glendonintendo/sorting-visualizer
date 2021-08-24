import swap from "../swap";
import cloneArrayOfObjects from "../cloneArrayOfObjects";

const generateHeapSortAnimations = (array) => {
  const animations = [];
  const dupArray = cloneArrayOfObjects(array);

  animations.push({
    type: "color",
    indeces: [0],
    oldColors: ["blue"],
    newColors: ["orange"],
  });
  for (let i = 1; i < dupArray.length; i++) {
    const currVal = dupArray[i].barHeight;
    let currIdx = i;
    animations.push({
      type: "color",
      indeces: [i],
      oldColors: ["blue"],
      newColors: ["red"],
    });
    while (currIdx > 0) {
      const parIdx = Math.floor((currIdx - 1) / 2);
      animations.push({
        type: "color",
        indeces: [parIdx],
        oldColors: ["blue"],
        newColors: ["green"],
      });
      if (currVal <= dupArray[parIdx].barHeight) {
        animations.push({
          type: "color",
          indeces: [parIdx, currIdx],
          oldColors: ["green", "red"],
          newColors: ["orange", "orange"],
        });
        break;
      }
      animations.push({ type: "swap", idx1: currIdx, idx2: parIdx });
      swap(dupArray, currIdx, parIdx);
      animations.push({
        type: "color",
        indeces: [currIdx],
        oldColors: ["green"],
        newColors: ["orange"],
      });
      currIdx = parIdx;
    }
    animations.push({
      type: "color",
      indeces: [currIdx],
      oldColors: ["red"],
      newColors: ["orange"],
    });
  }

  animations.push({
    type: "massColor",
    oldColor: ["orange"],
    newColor: ["blue"],
  });
  for (let end = dupArray.length - 1; end > 0; end--) {
    animations.push({
      type: "color",
      indeces: [0, end],
      oldColors: ["blue", "blue"],
      newColors: ["green", "green"],
    });
    animations.push({ type: "swap", idx1: 0, idx2: end });
    swap(dupArray, 0, end);
    animations.push({
      type: "color",
      indeces: [0, end],
      oldColors: ["green", "green"],
      newColors: ["red", "orange"],
    });
    let currIdx = 0;
    const currVal = dupArray[0].barHeight;

    while (true) {
      let leftChildIdx = 2 * currIdx + 1;
      let rightChildIdx = 2 * currIdx + 2;
      let leftChildVal, rightChildVal;
      let idxToSwap = null;
      const compareAnimation = {
        type: "color",
        indeces: [],
        oldColors: [],
        newColors: [],
        message: "compare animation",
      };

      if (leftChildIdx < end) {
        compareAnimation.indeces.push(leftChildIdx);
        compareAnimation.oldColors.push("blue");
        compareAnimation.newColors.push("green");
        leftChildVal = dupArray[leftChildIdx].barHeight;
        if (leftChildVal > currVal) {
          idxToSwap = leftChildIdx;
        }
      }

      if (rightChildIdx < end) {
        compareAnimation.indeces.push(rightChildIdx);
        compareAnimation.oldColors.push("blue");
        compareAnimation.newColors.push("green");
        rightChildVal = dupArray[rightChildIdx].barHeight;
        if (
          (rightChildVal > currVal && idxToSwap === null) ||
          (rightChildVal > leftChildVal && idxToSwap !== null)
        ) {
          idxToSwap = rightChildIdx;
        }
      }

      if (compareAnimation.indeces.length > 0) {
        animations.push(compareAnimation);
      }

      if (idxToSwap === null) {
        const compareEndAnimation = {
          type: "color",
          indeces: [currIdx],
          oldColors: ["red"],
          newColors: ["blue"],
          message: "idxToSwap is null compareEndAnimation",
        };
        if (leftChildIdx < end) {
          compareEndAnimation.indeces.push(leftChildIdx);
          compareEndAnimation.oldColors.push("green");
          compareEndAnimation.newColors.push("blue");
        } 
        if (rightChildIdx < end) {
          compareEndAnimation.indeces.push(rightChildIdx);
          compareEndAnimation.oldColors.push("green");
          compareEndAnimation.newColors.push("blue");
        }
        animations.push(compareEndAnimation);
        break;
      }

      if (idxToSwap === leftChildIdx && rightChildIdx < end) {
        animations.push({
          type: "color",
          indeces: [rightChildIdx],
          oldColors: ["green"],
          newColors: ["blue"],
          message: "idxToSwap equal leftChildIdx",
        });
      } else if (idxToSwap === rightChildIdx) {
        animations.push({
          type: "color",
          indeces: [leftChildIdx],
          oldColors: ["green"],
          newColors: ["blue"],
          message: "idxToSwap equal leftChildIdx",
        });
      }

      animations.push({ type: "swap", idx1: currIdx, idx2: idxToSwap });
      swap(dupArray, currIdx, idxToSwap);
      animations.push({
        type: "color",
        indeces: [currIdx],
        oldColors: ["green"],
        newColors: ["blue"],
        message: "set currIdx to blue"
      });
      currIdx = idxToSwap;
    }
  }

  animations.push({
    type: "color",
    indeces: [0],
    oldColors: ["blue"],
    newColors: ["orange"],
    message: "set final unsorted to orange"
  });

  return animations;
};

export default generateHeapSortAnimations;
