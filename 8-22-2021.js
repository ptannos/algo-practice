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
