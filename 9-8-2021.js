/* SORTED SQUARED ARRAY 
Write a funciton that takes in a non-empty array of integers that are sorted in ascending order and
returns a new array of the same length with the squares of the original integers also sorted in
ascending order. */

function sortedSquaredArray(array) {
  let newArr = [];

  for (let i = 0; i < newArr.length; i++) {
    let element = array[i] ** 2;
    newArr.push(element);
  }

  return newArr.sort((a, b) => a - b);
}
