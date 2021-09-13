/**
 * Creates the animations array from the input array and the
 * selected sort. Will make a call to the selected sort in the
 * sorts directory to evaluate the animations.
 */

import generateBubbleSortAnimations from "./sorts/bubble";
import generateSelectionSortAnimations from "./sorts/selection";
import generateInsertionSortAnimations from "./sorts/insertion";
import generateHeapSortAnimations from "./sorts/heap";
import generateMergeSortAnimations from "./sorts/merge";
import generateQuickSortAnimations from "./sorts/quick";
import generateDutchFlagAnimations from "./sorts/dutchFlag";

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
    case "dutch-flag":
      return generateDutchFlagAnimations(array);
    default:
      return;
  }
};

export default generateAnimations;
