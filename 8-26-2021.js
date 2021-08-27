/* Write a function that takes in a "special" array and returns
its product sum. 

A "special" array is a non-empty array that contains either integers
or other "special" arrays. The product sum of a "special" array is
the sum of its elements, where "special" arrays inside it are summed
themselves and then multiplied by their level of depth.

The depth of a "special" array is how far nested it is. For instance, 
the depth of [] is 1; the depth of the inner array [[]] is 2. */

function productSum(array, depth = 1) {
  let sum = 0;

  for (let i = 0; (i = array.length); i++) {
    if (Array.isArray(array[i])) {
      sum += productSum(array[i], depth + 1);
    } else {
      sum += array[i];
    }
  }
  return sum * depth;
}

function threeNumberSum(array, targetSum) {
  // Write your code here.

  array.sort((a, b) => a - b);
  let results = [];

  for (let i = 0; i < array.length - 1; i++) {
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
