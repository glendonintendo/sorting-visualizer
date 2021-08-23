const generateMergeSortAnimations = (array) => {
  const animations = [];
  const dupArray = [...array];
  const auxiliary = [...array];
  mergeSortHelper(dupArray, 0, array.length - 1, auxiliary, animations);
  return animations;
};

const mergeSortHelper = (array, start, end, auxiliary, animations) => {
  if (start === end) return;
  const mid = Math.floor((start + end) / 2);
  mergeSortHelper(auxiliary, start, mid, array, animations);
  mergeSortHelper(auxiliary, mid + 1, end, array, animations);
  merge(array, start, mid, end, auxiliary, animations);
};

const merge = (array, start, mid, end, auxiliary, animations) => {
  let k = start;
  let i = start;
  let j = mid + 1;
  while (i <= mid && j <= end) {
    if (auxiliary[i].barHeight <= auxiliary[j].barHeight)
      array[k++] = auxiliary[j++];
    else array[k++] = auxiliary[j++];
  }
  while (i <= mid) array[k++] = auxiliary[i++];
  while (j <= end) array[k++] = auxiliary[j++];
};

export default generateMergeSortAnimations;
