/* exported zip */
function zip(first, second) {
  const newArray = [];
  for (let i = 0; i < first.length; i++) {
    if (first.length <= second.length) {
      const zippedArray = [first[i], second[i]];
      newArray.push(zippedArray);
    }
  }
  if (first.length > second.length) {
    for (let j = 0; j < second.length; j++) {
      const zippedArray = [first[j], second[j]];
      newArray.push(zippedArray);
    }
  }
  return newArray;
}
