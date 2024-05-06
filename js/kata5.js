/* The Array's reverse() method has gone missing! Re-write it, quick-sharp!

When this method is called, it reverses the order of the items in the original array. Then then it returns that same, original array. No new arrays should need to be created to pass this kata.

Here's an example:

var input = [1, 2, 3, 4];
input.reverse(); // == [4, 3, 2, 1]  // returned by .reverse()
input;           // == [4, 3, 2, 1]  // items reordered in the original array
 */

function reverseArr(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(i, array);
    const deletedItem = array.splice(i, 1)[0];
    array.unshift(deletedItem);
  }
  return array;
}
console.log(reverseArr([1, 2, 3, 4]));
/* const numbers = [];
numbers.unshift(5);
numbers.unshift(1);
console.log(numbers); */

Array.prototype.reverse = function () {
  let left = 0;
  let right = this.length - 1;
  while (left < right) {
    const temp = this[left];
    this[left] = this[right];
    this[right] = temp;
    left++;
    right--;
  }

  return this;
};

Array.prototype.reverse = function () {
  for (var i = 0, j = this.length - 1; i < j; i++, j--) {
    var tmp = this[i];
    this[i] = this[j];
    this[j] = tmp;
  }
  return this;
};

Array.prototype.reverse = function () {
  var arr = this.splice(0);

  while (arr.length) {
    this.push(arr.pop());
  }

  return this;
};

Array.prototype.reverse = function () {
  for (var l = this.length - 2; l > -1; --l) {
    this.push(this[l]), this.splice(l, 1);
  }
  return this;
};

Array.prototype.reverse = function () {
  return this.forEach((_, idx) => this.push(...this.splice(-++idx, 1))), this;
};
