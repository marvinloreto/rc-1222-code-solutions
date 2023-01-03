/* exported omit */
function omit(source, keys) {

  var newObject = {};

  for (const property in source) {

    if (!keys.includes(property)) {
      newObject[property] = source[property];
    }
  }
  return newObject;
}
