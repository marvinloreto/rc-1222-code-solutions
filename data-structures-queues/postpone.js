/* exported postpone */

function postpone(queue) {
  if (queue.peek() !== undefined) {
    queue.enqueue(queue.peek());
    queue.dequeue();
  }
}
