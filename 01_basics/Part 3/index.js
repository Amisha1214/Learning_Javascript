// let e = 10;
// let f = 20;
// let g = 30;
// let h = 40;
// console.log(a + b);
// console.log(c + d);


/* Function */
let a = 10;
let b = 20;
function add(){
    // block of code
    console.log(a + b);
}
add() //function calling

 // Parameter
function add(a,b){
    // block of code
    console.log(a + b);
}
add(20, 30) //function calling
add(5, 3)
 // argument

let sum = function add(a, b){
    // block of code
    console.log(a + b);
}

console.log(sum(10,20));


// first class sitizen

function x(callback){
    console.log('Hello');
    callback()
}

function y(){
    console.log('Bye');
}
x(y)

function add(a, b){
    // block of code
    return a + b;
    console.log('hello');
    console.log(1000);
}
let sum = add(10, 20) //function calling

console.log(sum);
