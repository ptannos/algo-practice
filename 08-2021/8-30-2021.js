/* REMOVE DUPLICATES FROM LINKED LIST

You are given the head of a Singly Linked List whose nodes are in sorted order with respect to their values.
Write a function that returns a modified version of the Linked List that doesn't contain any nodes with duplicate
values. The Linked List should be modified in place (i.e. you shouldn't create a brand new list), and the modified
Linked List should still have its nodes sorted with respect to their values.

Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to
None/null if it's the tail of the list*/

function removeDuplicatesFromLinkedList(linkedList) {
  let currentNode = linkedList;

  while (currentNode !== null) {
    let nextNode = currentNode.next;

    while (nextNode && nextNode.value === currentNode.value) {
      nextNode = nextNode.next;
    }
    currentNode.next = nextNode;
    currentNode = nextNode;
  }
  return linkedList;
}

/* BUBBLE SORT

Write a function that takes in an array of integers and returns a sorted version of that array. 
Use the Bubble Sort algorithm to sort the array. */

function bubbleSort(array) {
  let counter = 0;

  while (counter <= array.length) {
    for (let i = 0; i < array.length - counter; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
    counter++;
  }

  return array;
}
