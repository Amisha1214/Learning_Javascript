// Array Methods

// Add/Remove Items
let numbers = [10, 20, 30, 40];

// At the end of the array: push & pop
numbers.push(50);
numbers.push(60);
console.log(numbers); // [10, 20, 30, 40, 50, 60]

let poppedItem = numbers.pop();
let poppedItem2 = numbers.pop();
console.log(poppedItem); // 60
console.log(numbers); // [10, 20, 30, 40, 50]

// At the beginning of the array: shift & unshift
let number = [10, 20, 30, 40];

number.unshift(50);
console.log(number); // [50, 10, 20, 30, 40]

let poppedItem3 = number.shift();
console.log(poppedItem3); // 50
console.log(number); // [10, 20, 30, 40]

// Slice Method
let arr = ["I", "Love", "Javascript"];

// Syntax: arr.slice(startIndex, endIndex) (endIndex not included)
console.log(arr.slice(1, 3)); // ["Love", "Javascript"]
console.log(arr); // ["I", "Love", "Javascript"]

let arrs = ['t', 'e', 's', 't'];
console.log(arrs.slice(-2)); // ["s", "t"]
console.log(arrs.slice(1)); // ["e", "s", "t"]

// Slice creates a shallow copy
let nums = [10, 20, 30, 40];
let copyNums = nums.slice();
nums[0] = 100;
console.log(copyNums); // [10, 20, 30, 40]
console.log(nums); // [100, 20, 30, 40]

// Splice Method
// Syntax: arr.splice(startIndex, deleteCount, item1, item2, ...)

let arry = ["I", "study", "Programming", "right", "now"];

// Incorrect usage of slice replaced with splice
let removedElements = arry.splice(0, 3, "Listen", "Music");
console.log(removedElements); // ["I", "study", "Programming"]
console.log(arry); // ["Listen", "Music", "right", "now"]


// splice
// swiss knife
// add, delete, replace
// syntax
// arr.splice(atartIndex, deleteCount, arg1, arg2, arg3, ........, argN)

let array = ["I", "study", "Programming"];
array.splice(2, 0, "complex", "skill");
console.log(array); // ["I", "study", "complex", "skill", "Programming"]

let ary = [1, 2, 10];
ary.splice(-1, 0, 3, 4);
console.log(ary); // [1, 2, 3, 4, 10]

// Concat Method
let num = [10, 20];
console.log(num.concat([30, 40])); // [10, 20, 30, 40]
console.log(num.concat([30, 40], [50, 60])); // [10, 20, 30, 40, 50, 60]
console.log(num.concat([30, 40], 50, 60)); // [10, 20, 30, 40, 50, 60]

// Iterate with forEach
[10, 20, 30].forEach(function (item, index, array) {
    console.log(`${item} is at index ${index} in [${array}]`);
});
// Output:
// 10 is at index 0 in [10,20,30]
// 20 is at index 1 in [10,20,30]
// 30 is at index 2 in [10,20,30]
