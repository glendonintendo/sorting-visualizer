/**
 * Returns the final sorted positions and colors of the array.
 */

import cloneArrayOfObjects from "./cloneArrayOfObjects";

const getEndArrayState = (array) => {
  const dupArray = cloneArrayOfObjects(array);
  for (const arrayBar of dupArray) {
    arrayBar.color = "orange";
  }
  dupArray.sort((a, b) => a.barHeight - b.barHeight);
  return dupArray;
};

export default getEndArrayState;
