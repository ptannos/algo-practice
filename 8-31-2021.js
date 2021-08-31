/* GENERATE DOCUMENT

You're given a string of available characters and a string representing
a document that you need to generate. Write a function that determines if
you can generate the document using the available characters. If you can 
generate the document, return true; otherwise, false.

You're only able to generate the document if the frequency of unique 
characters in the characters string is greater or equal to the frequency
of unique characters in the document string. For example, characters = 
'abcabc' and document = 'aabbccc' => you cannot generate the document
because you're missing one c. 

The document that you need to create may contain any characters, including
any characters, including special characters, capital letters, numbers,
and spaces. You can always generate the empty string ('').
*/

function generateDocument(characters, document) {
  // Write your code here.

  let hash = {};

  for (let i = 0; i < characters.length; i++) {
    let currChar = characters[i];

    if (!hash[currChar]) {
      hash[currChar] = 1;
    } else {
      hash[currChar] += 1;
    }
  }

  for (let i = 0; i < document.length; i++) {
    let docChar = document[i];

    if (!hash[docChar]) {
      return false;
    } else if (hash[docChar] && hash[docChar] > 0) {
      hash[docChar] -= 1;
    } else {
      return false;
    }
  }
  return true;
}
