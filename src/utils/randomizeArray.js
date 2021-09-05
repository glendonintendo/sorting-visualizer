import swap from "./swap";

const randomizeArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const randIdx = Math.floor(Math.random() * i);
    swap(array, i, randIdx);
  }
  return array;
}

export default randomizeArray;