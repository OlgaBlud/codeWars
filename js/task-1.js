// Write a function that takes an array of strings as an argument and
// returns a sorted array containing the same strings, ordered from shortest to longest.
// All of the strings in the array passed to your function will be different lengths,
// so you will not have to decide how to order multiple strings of the same length.

function sortStringsByLength() {
  const stringsArr = Array.from(arguments);

  const sortedArr = stringsArr.toSorted(
    (minString, maxString) => minString.length - maxString.length
  );
  return sortedArr;
}

console.log(sortStringsByLength('Telescopes', 'Glasses', 'Eyes', 'Monocles'));
// return ['Eyes', 'Glasses', 'Monocles', 'Telescopes'];

const array = ['Telescopes', 'Glasses', 'Eyes', 'Monocles'];

function sortByLength(array) {
  array.sort((minString, maxString) => minString.length - maxString.length);

  return array;
}
console.log(sortByLength(array));
// ____________________The museum of incredibly dull things

// ____________________ Don't give me five!
// In this kata you get the start number and the end number of a region and
// should return the count of all numbers except numbers with a 5 in it.
// The start and the end number are both inclusive!
// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

function dontGiveMeFive(start, end) {
  let numbersArr = [];

  for (let i = start; i <= end; i++) {
    numbersArr.push(i.toString());
  }
  //   console.log(numbersArr);
  const newArr = numbersArr.filter(num => !num.includes(5));
  //   console.log(newArr);

  return newArr.length;
}

console.log(dontGiveMeFive(1, 9)); //, 8;
console.log(dontGiveMeFive(4, 17)); // 12;
console.log(dontGiveMeFive(49, 65)); // 6;
// метод -test- js
function dontGiveMeFiveCW(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (!/5/.test(i)) {
      count++;
      //   console.log(!/5/.test(i)); //6 true
      console.log(/5/.test(i)); //6 false
    }
  }
  return count;
}
console.log(dontGiveMeFiveCW(49, 65));

function dontGiveMeFiveCW2(start, end) {
  let count = 0;

  for (let i = start; i <= end; ++i) {
    if (!String(i).includes('5')) count++;
  }
  return count;
}
console.log(dontGiveMeFiveCW2(49, 65));
function dontGiveMeFiveCW3(start, end) {
  let res = [];
  for (let i = start; i <= end; i++) {
    if (!i.toString().includes('5')) res.push(i);
  }
  return res.length;
}
/* likeOrDislike([Dislike]) => Dislike
likeOrDislike([Like,Like]) => Nothing
likeOrDislike([Dislike,Like]) => Like
likeOrDislike([Like,Dislike,Dislike]) => Nothing */
function likeOrDislike(buttons) {
  let btnState = 'Nothing';
  //   if (buttons.length === 0) {
  //     btnState = 'Nothing';
  //   } else if (buttons.length === 1) {
  //     btnState = buttons[0];
  //   } else {
  for (const input of buttons) {
    input === btnState ? (btnState = 'Nothing') : (btnState = input);
  }
  //   }
  return btnState;
}

console.log(likeOrDislike([])); // => N
console.log(likeOrDislike(['Dislike'])); // => Dislike
console.log(likeOrDislike(['Like', 'Like'])); //  => Nothing
console.log(likeOrDislike(['Dislike', 'Like'])); // => Like
console.log(likeOrDislike(['Like', 'Dislike', 'Dislike'])); // => Nothing
/* function likeOrDislike2(buttons) {
  return buttons.reduce(
    (state, button) => (button === state ? Nothing : button),
    Nothing
  );
} */
