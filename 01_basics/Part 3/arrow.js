// Declaration of Array

// Using square bracket
let numbersArray = [];
console.log(Array.isArray(numbersArray)); // true

let numberArray = [10, 20, 30, 40, 50];
console.log(numberArray); // [10, 20, 30, 40, 50]

// Using array constructor
let fruit = new Array("Apple, Banana, Oranges");
console.log(fruit); // ["Apple, Banana, Oranges"]

let fruits = new Array(5);
console.log(fruits.length); // 5

// Using array literal
let mixedArray = Array('Apples', true, 10, { name: "john" });
console.log(mixedArray); // ["Apples", true, 10, {name: "john"}]

// Accessing array elements
let nums = [10, 20, 30, 40];
console.log(nums[0]); // 10
console.log(nums[-1]); // undefined
nums[2] = true;
console.log(nums); // [10, 20, true, 40]
console.log(nums.length); // 4
delete nums[3];
console.log(nums.length); // 4

// Iteration of array

// Using for loop
for (let i = 0; i < nums.length; i++) {
    console.log(`at index ${i} value is ${nums[i]}`);
}

// Using while loop
let i = 0;
while (i < nums.length) {
    console.log(`at index ${i} value is ${nums[i]}`);
    i++;
}

// Using for-of loop
for (let num of nums) {
    console.log(num); // Logs values: 10, 20, true, undefined
}
