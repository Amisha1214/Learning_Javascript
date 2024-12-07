// Function declaration
function add(a, b) {
    return a + b;
}

// Calling the function and storing the result
let result = add(10, 20);
console.log(result); // Outputs: 30

// Using an arrow function for the same behavior
let addArrow = (a, b) => {
    return a + b;
};

let resultArrow = addArrow(10, 20);
console.log(resultArrow); // Outputs: 30

// Arrow function with implicit return
let addImplicit = (a, b) => a + b;
let resultImplicit = addImplicit(10, 20);
console.log(resultImplicit); // Outputs: 30

// Single-parameter arrow function
let printNum = (a) => console.log(a);
printNum(10); // Outputs: 10

// Using `arguments` in a regular function
function addWithArgs() {
    console.log(arguments);
}
addWithArgs(10, 20, 30, 40, 50); // Outputs: [Arguments] { '0': 10, '1': 20, '2': 30, '3': 40, '4': 50 }

// Arrow function cannot use `arguments`
let addArrowWithArgs = () => {
    // console.log(arguments); // Error: arguments is not defined
    console.log("Arrow functions don't have arguments object.");
};
addArrowWithArgs();

// Binding of `this`
const person = {
    name: 'John',
    greet: function () {
        console.log('greet', this)
        console.log(`Hello, my name is ${this.name}`); // Backticks used here
    }
    greetTwo: () => {
        console.log('greet', this)
        console.log(`Hello, my name is ${this.name}`); // Backticks used here
    }
}
person.greet(); // Outputs: Hello, my name is John
person.greetTwo(); // Outputs: Arrow functions don't bind `this`

// use for new keyword

function RegularFunction(name){
    this.name = name;
}
const regularObj = new RegularFunction()
console.log(regularObj);

const ArrowFunction = (name) => {
    this.name = name;
}

const arrowObj = new ArrowFunction('Peter')

console.log(arrowobj);
