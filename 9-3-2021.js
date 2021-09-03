/* NODE DEPTHS

The distance between a node in a Binary Tree and the tree's root is
called the node's depth. Write a function that takes in a Binary Tree 
and returns the sum of its nodes' depths. 

Each BinaryTree node has an integer value, a left child node, and a
right child node. Children nodes can either be BinaryTree nodes
themselves or None/null. */

function nodeDepths(root, depth = 0) {
  if (root === null) return 0;

  return (
    depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
  );
}
