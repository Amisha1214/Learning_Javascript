//  Primitive

// 7 Types: Strings, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

// const bigNumber = 31358268426136387n

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "naagraj","doga"]
let myObj = {
    name: "Amisha",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof myFunction);







// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap (Non-Primitive)

let myYoutubename = "amishaacharidotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(anothername);

console.log(myYoutubename);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "amisha@google.com"

console.log(userOne.email);
console.log(userTwo.email);