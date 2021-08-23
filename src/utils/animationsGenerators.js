import generateBubbleSortAnimations from "./sorts/bubbleSort";
import generateSelectionSortAnimations from "./sorts/selectionSort";
import generateInsertionSortAnimations from "./sorts/insertionSort";
import generateHeapSortAnimations from "./sorts/heapSort";
import generateMergeSortAnimations from "./sorts/mergeSort";
import generateQuickSortAnimations from "./sorts/quickSort";

const generateAnimations = (array, sortType) => {
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

export default generateAnimations;
