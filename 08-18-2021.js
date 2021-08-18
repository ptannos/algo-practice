// CHECK FOR PALINDROME
// Write a function that takes in a non-empty string and that returns a boolean
// representing whether the string is a palindrome.
// A palindrome is defined as a string that's written the same forward and backward.
// Note that single-character strings are palindromes.

function isPalindrome(string) {
    // use for loop with two pointers
      // if pointer A = pointer B, take them off the string
      // if pointer overlaps return true (use while)
      
      let pointer1 = 0;
      let pointer2 = string.length - 1
      
      while (pointer2 > pointer1) {
          if (string[pointer1] !== string[pointer2]) {
              return false
          } else {
              pointer1 += 1
              pointer2 -= 1
          }
      }
      return true;
  }

// CAESAR CIPHER ENCRYPTOR
// Give a non-empty string of lowercase letters and a non-negative integer
// representing a key, write a function that returns a new string obtained by
// shifting every letter in the input string by k positions in the alphabet,
// where k is the key.
// Note that letters should 'wrap' around the alphabet; in other words, the letter
// z shifted by one returns the letter a.

  function caesarCipherEncryptor(string, key) {
    // Write your code here.
      // Create a var representing the alphabet
      // for loop: for each letter of the string,
      // find that letter's index in the alphabet. add 2 to that. 
      // return alphabet with the new index
      // if it goes past 26, subtract 26 
      
      const alphabet = 'abcdefghijklmnopqrstuvwxyz'
      let newStr = ''
      
      for (let i = 0; i < string.length; i++) {
          let idx = alphabet.indexOf(string[i]) + key
          if (idx > 25) {
              idx = idx % 26
          }
          newStr += alphabet[idx]
          
      }
      return newStr;
  }