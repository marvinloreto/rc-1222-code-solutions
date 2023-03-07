/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() !== undefined) {
    let first = queue.dequeue();
    for (let i = 0; i < index; i++) {
      queue.enqueue(first);
      first = queue.dequeue();
    }
    return first;
  }
}
