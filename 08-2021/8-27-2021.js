// BINARY SEARCH

/* Write a function that takes in a sorted array of integers as
well as a target integer. The function should use the Binary
Search algorithm to determine if the target integer is container
in the array and should return its index if it is, otherwise -1. 
*/

function binarySearch(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1);
}

function binarySearchHelper(array, target, left, right) {
  if (left > right) return -1;

  let middle = Math.floor((left + right) / 2);

  if (array[middle] === target) {
    return middle;
  } else if (array[middle] < target) {
    middle += 1;
    return binarySearchHelper(array, target, middle, right);
  } else if (array[middle] > target) {
    middle -= 1;
    return binarySearchHelper(array, target, left, middle);
  }
}
