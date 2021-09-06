/* RUN LENGTH ENCODING

Write a function that takes in a non-empty string and returns its
run-length encoding. 

Run-length encoding is a form of lossless data compression in which runs
of data are store as a single data value and count, rather than as the
original run. For this problem, a run of data is any sequence of consecutive,
identical characters. 
"AAA" -> "3A"

The input string can contain all sorts of special characters, including
numbers. Run-length encoding must be decodable, so 12 As should be 9A3A. */

function runLengthEncoding(string) {
  let newArr = [];
  let count = 1;

  for (let i = 1; i < string.length; i++) {
    if (string[i] !== string[i - 1] || count === 9) {
      newArr.push(count + string[i - 1]);
      count = 1;
    } else {
      count += 1;
    }
  }

  newArr.push(count + string[string.length - 1]);

  return newArr.join("");
}
