const getEndArrayState = (array) => {
  const dupArray = array.map((arrayBar) => {
    return { ...arrayBar, color: "orange" };
  });
  dupArray.sort((a, b) => a.barHeight - b.barHeight);
  return dupArray;
};

export default getEndArrayState;
