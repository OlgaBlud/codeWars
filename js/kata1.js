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
