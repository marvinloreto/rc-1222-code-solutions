/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  } else {
    let largestNum = stack.peek();
    while (stack.peek() !== undefined) {
      if (stack.peek() > largestNum) {
        largestNum = stack.peek();
      }
      stack.pop();
    }
    return largestNum;
  }
}
