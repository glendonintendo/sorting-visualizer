/**
 * getStepForwardArray will take an array and animation,
 * and return a new array that represents the what input array
 * looks like after the animation.
 */

const getForwardStepArray = (array, animation) => {
  switch (animation.type) {
    case "swap":
      const { idx1, idx2 } = animation;
      [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
      break;
    case "color":
      for (let i = 0; i < animation.indeces.length; i++) {
        array[animation.indeces[i]].color = animation.newColors[i];
      }
      break;
    case "massColor":
      const { startIdx, endIdx, newColor } = animation;
      for (let i = startIdx; i <= endIdx; i++) {
        array[i].color = newColor;
      }
      break;
    case "assignHeightAndColor":
      array[animation.index].barHeight = animation.newHeight;
      array[animation.index].color = animation.newColor;
      break;
    default:
      break;
  }

  return array;
};

export default getForwardStepArray;
