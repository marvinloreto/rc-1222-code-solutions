/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() !== undefined) {
    const first = queue.dequeue();
    const second = queue.dequeue();
    if (second === undefined) {
      return first;
    }
    const smallest = Math.min(first, second);
    if (smallest !== first) {
      queue.enqueue(first);
    } else {
      queue.enqueue(second);
    }
    return smallest;
  }
}
