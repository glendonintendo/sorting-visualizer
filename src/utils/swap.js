/**
 * Utility function used throughout the application to swap
 * two elements in an array.
 */

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

export default swap;
