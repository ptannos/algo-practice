/* BST TRAVERSAL 
Write three functions that take in a Binary Search Tree (BST) and
an empty array, traverse the BST, add its nodes' values to the input
array, and return that array. The three functions should traverse 
the BST using the in-order, pre-order, and post-order tree-traversal 
techniques, respectively.*/

function inOrderTraverse(tree, array) {
  if (tree !== null) {
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
  }
  return array;
}
