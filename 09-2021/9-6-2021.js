/* INSERTION SORT

Write a function that takes in an array of integers and returns a 
sorted version of that array. Use the Insertion Sort algorithm to
sort the array. */

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let j = 1;

    while (j > o && array[j] < array[j - 1]) {
      let temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;

      j -= 1;
    }
  }
  return array;
}
