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

  