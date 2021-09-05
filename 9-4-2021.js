/* ANAGRAMS 
Write a function that returns true if one string is an anagram of
another string; false if it is not.
"Chin" and "Inch" // true
"night" and "knight" // false
*/

function anagrams(str1, str2) {
  let hash = {};

  for (let i = 0; i < str1.length; i++) {
    let str1Char = str1[i];

    if (!hash[str1Char]) {
      hash[str1Char] = 1;
    } else {
      hash[str1Char] += 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    let str2Char = str2[i];

    if (!hash[str2Char]) {
      return false;
    } else {
      hash[str2Char] -= 0;
    }
  }

  for (let key in hash) {
    if (hash[key] !== 0) {
      return false;
    }
  }
  return true;
}
