/* exported takeFront */

function takeFront(queue) {
  if (queue.peek() !== undefined) {
    return queue.peek() && queue.dequeue();
  }
}
