/* THREE NUMBER SUM

Write a function that takes in a non-empty array of distinct
integers and an integer representing a target sum. The function
should find all triplets in the array that sum up to the target
sum and return a two-dimensional array of all these triples. The
numbers in each triplet should be ordered in ascending order, and 
the triplets should be ordered in ascending order. 

If no three numbers sum up to the target sum, the function should
return an empty array. */

function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);

  let results = [];

  for (let i = 0; i < array.length; i++) {
    let pointer1 = i + 1;
    let pointer2 = array.length - 1;

    while (pointer1 < pointer2) {
      if (array[i] + array[pointer1] + array[pointer2] === targetSum) {
        results.push([array[i], array[pointer1], array[pointer2]]);
        pointer1++;
        pointer2--;
      } else if (array[i] + array[pointer1] + array[pointer2] < targetSum) {
        pointer1++;
      } else {
        pointer2--;
      }
    }
  }
  return results;
}
