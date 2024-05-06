/* Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null.

The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

1 Can you write a solution that will return null for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

 */

function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - 1 !== arr[i - 1]) {
      return arr[i];
    }
  }
  return null;
}
//  function firstNonConsecutive(arr) {
//    let result = arr.find((val, index) => val !== index + arr[0]);

//    return Number.isInteger(result) ? result : null;
//  }

// const firstNonConsecutive3 = array =>
//   (val => (val % 1 === 0 ? val : null))(
//     array.find((val, idx) => val !== array[0] + idx)
//   );

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); //6
console.log(firstNonConsecutive([1, 2, 3, 4])); //null
console.log(firstNonConsecutive([1])); //null
console.log(firstNonConsecutive([2, 4])); //4
