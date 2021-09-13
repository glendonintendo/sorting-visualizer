/**
 * Utility function that will clone a 1D array of objects.
 */

const cloneArrayOfObjects = (array) => {
  const dupArray = [];

  for (const object of array) {
    dupArray.push({ ...object });
  }

  return dupArray;
};

export default cloneArrayOfObjects;
