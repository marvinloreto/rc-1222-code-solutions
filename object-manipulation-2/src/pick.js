/* exported pick */
function pick(source, keys) {
  var pick = {};
  for (let i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      pick[keys[i]] = source[keys[i]];
    }
  }
  return pick;
}
