const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const generateBubbleSortAnimations = (array) => {
  const animations = [];
  const dupArray = [...array];

  let swapped;
  for (let i = dupArray.length; i > 0; i--) {
    swapped = false;
    for (let j = 0; j < i - 1; j++) {
      // animations.push({type: "color", indeces: [j, j + 1]})
      if (dupArray[j].barHeight > dupArray[j + 1].barHeight) {
        animations.push({ type: "swap", indeces: [j, j + 1] });
        swap(dupArray, j, j + 1);
        swapped = true;
      }
    }
    if (swapped === false) break;
  }

  return animations;
};

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
		swap(dupArray, i, min)
	}

  return animations;
};

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

const generateMergeSortAnimations = (array) => {};

const generateQuickSortAnimations = (array) => {
  const animations = [];
  const dupArray = [...array];

  quickSortHelper(dupArray, 0, dupArray.length - 1, animations);
  return animations;
};

const quickSortHelper = (array, start, end, animations) => {
  if (start >= end) return;
	const randIdx = Math.floor(Math.random() * (end - start) + start);
  animations.push({ type: "swap", indeces: [start, randIdx] });
	swap(array, start, randIdx);
	const pivot = array[start];
	let leftIdx = start;
	let rightIdx = start + 1;
	while (rightIdx <= end) {
		if (array[rightIdx] < pivot) {
			leftIdx++;
      animations.push({ type: "swap", indeces: [rightIdx, leftIdx] });
			swap(array, rightIdx, leftIdx);
		}
		rightIdx++;
	}
  animations.push({ type: "swap", indeces: [start, leftIdx] });
	swap(array, start, leftIdx);
	quickSortHelper(array, start, leftIdx - 1, animations);
	quickSortHelper(array, leftIdx + 1, rightIdx - 1, animations);
}

export const generateAnimations = (array, sortType) => {
  switch (sortType) {
    case "bubble":
      return generateBubbleSortAnimations(array);
    case "selection":
      return generateSelectionSortAnimations(array);
    case "insertion":
      return generateInsertionSortAnimations(array);
    case "heap":
      return generateHeapSortAnimations(array);
    case "merge":
      return generateMergeSortAnimations(array);
    case "quick":
      return generateQuickSortAnimations(array);
    default:
      return;
  }
};
