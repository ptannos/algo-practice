/* FIND THREE LARGEST NUMBERS 

Write a function that takes in an array of at least three integers
and, without sorting the input array, returns a sorted array of the 
three largest integers in the input array.

The function should return duplicate integers if necessary; for example,
it should return [10, 10, 12] from [10, 5, 9, 10, 12].*/

function findThreeLargestNumbers(array) {
  let newArr = [null, null, null];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > newArr[2] || newArr[2] === null) {
      shiftArr(newArr, array[i], 2);
    } else if (array[i] > newArr[1] || newArr[1] === null) {
      shiftArr(newArr, array[i], 1);
    } else if (array[i] > newArr[0] || newArr[0] === null) {
      shiftArr(newArr, array[i], 0);
    }
  }
  return newArr;
}

function shiftArr(arr, num, idx) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) {
      arr[i] = num;
    } else {
      arr[i] = arr[i + 1];
    }
  }
}

console.log(
  findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])
);
