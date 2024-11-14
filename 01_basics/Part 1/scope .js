// Global Scope
// A variable declared outside of any function or block is in the global scope and accessible from anywhere in the code.
let globalvariable = 10; // Global variable, accessible anywhere in this file

// Local Scope - Function Scope
// Variables declared inside a function are limited to that function and are not accessible outside of it.
function xyz() {
    let value = 30; // Local variable, only accessible within the function xyz
    console.log(globalvariable); // Accessing the global variable within the function
}

xyz(); // Calling the function xyz, which will log the global variable
// console.log(value); // This would throw an error, as value is not accessible outside the function

// Block Scope
// Variables declared with `let` or `const` inside a block `{ }` (e.g., within an if statement or a loop) are accessible only within that block.
if (true) {
    let y = 20; // Block-scoped variable, only accessible within this if block
}
// console.log(y); // This would throw an error, as y is not accessible outside the if block

// Module Scope (Using ECMAScript modules)
// In modern JavaScript, code inside `<script type="module">` has its own module scope, meaning variables and functions are not added to the global scope.
// To include a script as a module, you can use the following HTML tag:

/* <script type="module" src="path/to/module.js"></script> */

// CommonJS Modules
// In Node.js, each file is treated as a separate module. CommonJS syntax (e.g., `module.exports` and `require`) is commonly used in Node.js.
// Example:
// module.exports = { xyz }; // Exports the xyz function for use in other files
// const myModule = require('./myModule'); // Imports a module in Node.js using CommonJS
