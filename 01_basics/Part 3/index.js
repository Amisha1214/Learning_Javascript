// Variables and basic addition
let e = 10;
let f = 20;
let g = 30;
let h = 40;
console.log(e + f); // Outputs: 30
console.log(g + h); // Outputs: 70

// Function without parameters, using global variables a and b
let a = 10;
let b = 20;

function add(){
    console.log(a + b); // Outputs: 30
}

add(); // Calls the add function using global variables a and b

// Function with parameters
function add(a, b){
    console.log(a + b); // Outputs the sum of the parameters passed
}

add(20, 30); // Outputs: 50
add(5, 3);   // Outputs: 8

// Function expression assigned to the variable sum
let sum = function(a, b){
    return a + b; // Returns the sum of the parameters passed
};

console.log(sum(10, 20)); // Outputs: 30

// First-class functions: function x takes a function as an argument
function x(callback){
    console.log('Hello');  // Outputs: Hello
    callback();            // Calls the callback function
}

function y(){
    console.log('Bye');    // Outputs: Bye
}

x(y); // Calls function y as a callback after printing Hello

// Function with return statement
function add(a, b){
    return a + b; // Returns the sum of a and b
}

let sumResult = add(10, 20); // Stores the result of add(10, 20)

console.log(sumResult); // Outputs: 30
