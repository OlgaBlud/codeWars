// ____________________The museum of incredibly dull things
/* 
The museum of incredibly dull things wants to get rid of some exhibits.
a plan to remove the most boring exhibits.
She gives them a rating, and then removes the one with the lowest rating.
    However, just as she finished rating all exhibits, she's off to an important fair, 
    so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one.Fair enough.
    Task
    Given an array of integers, remove the smallest value. 
    Do not mutate the original array / list.
    If there are multiple elements with the same value, remove the one with the lowest index.
    If you get an empty array / list, return an empty array / list.
    Don't change the order of the elements that are left.
    */
function removeSmallest(numbers) {
  const minIndex = numbers.indexOf(Math.min(...numbers));
  const newArr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers.length > 1 && minIndex !== i) {
      newArr.push(numbers[i]);
    }
  }
  return newArr;
}
console.log(removeSmallest([1, 2, 3, 4, 5])); //[2,3,4,5]
console.log(removeSmallest([5, 3, 2, 1, 4, 1])); //[5,3,2,4]
console.log(removeSmallest([2, 2, 1, 2, 1])); //[2,2,2,1]

const removeSmallest2 = numbers =>
  numbers.filter((n, i) => i !== numbers.indexOf(Math.min(...numbers)));

function removeSmallest3(numbers) {
  let copy = [...numbers];
  let smallest = Math.min(...numbers);
  let smallestIdx = numbers.indexOf(smallest);
  copy.splice(smallestIdx, 1);
  return copy;
}
