// CLASS PHOTOS

// The class you need to photograph has an even number of students, half
// wearing red and half is blue. Arrange them in two rows, with each row
// containing the same number of students. All students wearing red should
// be in the same row; all blue should be in the same row. Each student in
// the back row must be strictly taller than the student directly in front
// of them in the front row.

// You are given 2 input arrays: one containing the heights of all the
// students with red shirts, and another one containing the heights of all
// all the students with blue shirts. These arrays will always have the same
// length, and each height will be a positive integer. Write a function that
// returns whether or not a class photo that follows the stated guidelines
// can be taken. Each class has at least 2 students

function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.

  // If counter === length; return true
  let pointer = 0;

  let shorter = 0;
  let taller = 0;

  while (pointer < redShirtHeights.length) {
    if (redShirtHeights[pointer] < blueShirtHeights[pointer]) {
      shorter += 1;
    } else if (blueShirtHeights[pointer] < redShirtHeights[pointer]) {
      taller += 1;
    }
    pointer += 1;
  }

  if (shorter === redShirtHeights.length || taller === redShirtHeights.length) {
    return true;
  }
  return false;
}
