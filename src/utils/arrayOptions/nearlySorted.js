import swap from "../swap";

const nearlySortArray = (array) => {
  array.sort((a, b) => a.barHeight - b.barHeight);
  const numInversions = Math.floor(
    Math.random() * (array.length / 10 - array.length / 5) + array.length / 5
  );

  const idxSet = new Set();
  for (let i = 0; i < numInversions; i++) {
    let idx1 = getValidIdx(array, idxSet);
    let idx2 = getValidIdx(array, idxSet);
    swap(array, idx1, idx2);
  }
};

const getValidIdx = (array, idxSet) => {
  while (true) {
    let idx = Math.floor(Math.random() * array.length);
    if (!idxSet.has(idx)) {
      idxSet.add(idx);
      return idx;
    }
  }
};

export default nearlySortArray;
