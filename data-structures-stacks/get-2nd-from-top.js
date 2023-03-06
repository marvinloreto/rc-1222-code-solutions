/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() !== undefined) {
    const topStack = stack.pop();
    const secondFromTop = stack.peek();

    stack.push(topStack);
    return secondFromTop;
  }
}
