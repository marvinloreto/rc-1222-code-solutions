/* exported swapFront */

function swapFront(list) {
  if (list.next == null) {
    return list;
  } else {
    let temp = null;
    let firstSwap = list.data;
    let secondSwap = list.next.data;

    temp = firstSwap;
    firstSwap = secondSwap;
    secondSwap = temp;

    list.data = firstSwap;
    list.next.data = secondSwap;

    return list;
  }
}
