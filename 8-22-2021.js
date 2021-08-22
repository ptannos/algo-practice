// BRANCH SUMS

// Write a function that takes in a Binary Tree and returns
// a list of its branch sums ordered from leftmost branch sum
// to rightmost branch sum.

// A branch sum is the sum of all values in a Binary Tree
// branch. A Binary Tree branch is a path of nodes in a tree
// that starts at the root node and ends at any leaf node.

// Each BinaryTree node has an integer value, a left child node,
// and a right child node. Children nodes can either be BinaryTree
// nodes themselves or None/null.

// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Solution: use a helper function, that takes:
// current node, current branch sum (default=0), array of sums(default=[])
// if node doesn't exist, return
// add current value to current branch sum
// if node has no left or right, add final branch sum to
// array of sums.
// Recursively call helper function with node.left first,
// then recursivelly call it with node.right
// Call helper function from original function, return arr of sums.

function branchSums(root) {
  // Write your code here.
  let sumArr = [];
  sumEachBranch(root, sumArr, 0);
  return sumArr;
}

function sumEachBranch(node, sumArr = [], currSum = 0) {
  if (!node) return;

  currSum += node.value;

  if (!node.left && !node.right) {
    sumArr.push(currSum);
  }

  sumEachBranch(node.left, sumArr, currSum);
  sumEachBranch(node.right, sumArr, currSum);
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;

// MINIMUM WAITING TIME

// You're given a non-empty array of positive integers
// representing the amounts of time that specific queries
// take to execute. Only one query can be executed at a
// time, but the queries can be executed in any order.

// A query's waiting time is defined as the amount of time
// that it must wait before its execution starts. In other
// words, if a query is executed second, then its waiting
// time is the duration of the first query; if a query is
// executed third, then its waiting time is the sum of the
// durations of the first two queries.

// Write a function that returns the minimum amount of total
// waiting time for all the queries. For example, if you're given
// the queries of durations [1, 4, 5] then total waiting time if
// the queries were executed in the order of [5, 1, 4] would be
// (0) + (5) + (5+1) = 11. The first query of duration 5 would be
// executed immediately, so its waiting time would be 0, the
// second query of duration 1 would have to wait 5 seconds, and
// the last would have to wait the duration of the first 2 queries.

function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);

  let sum = 0;

  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    const queriesLeft = queries.length - (i + 1);
    sum += queriesLeft * query;
  }
  return sum;
}
