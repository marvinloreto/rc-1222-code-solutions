/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() !== undefined) {
    const stackTop = stack.pop();
    stack.push(value);
    stack.push(stackTop);
  }
}
