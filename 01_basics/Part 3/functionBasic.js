// function with a single Parameter

function greet(name){
    console.log(`Hello ${name}!`);
}

greet("John");
greet("Peter");
greet();

// function with a default Parameter

function greet(name = 'Guest'){
    console.log(`Hello ${name}!`);
}

greet("Amisha");
greet("Achari");
greet();

// function with a multiple Parameter

 function calculateSum(num1, num2){
    return num1 + num2;
 }

 console.log(calculateSum(10,20));

// Function with more parameters
 function calculateExtenedSum(num1, num2, num3, num4, num5){
    return num1 + num2 + num3 + num4 + num5;
 }

 console.log(calculateExtenedSum (10,20, 30, 40, 50));
 
// Function to print an entire array
 const nums = [1, 2, 3, 4, 5, 6];
 function printArrayElement(arr){
    console.log(arr);
 }
 printArrayElement(nums)

 // Function to print each element of an array individually
 function printArrayElements(arr){
    for (let i = 0; i< arr.length;i++){
        console.log(arr[i])
    }
 }
 printArrayElements(nums)

// Function to greet someone from a specific city
function greetings(name, city) {
    console.log(`Hello ${name} from city ${city}`)
}

greetings("Amisha", "Mumbai") // Outputs: Hello Amisha from city Mumbai

function greeting({city,name}){
    console.log(`Hello ${name} from city ${city}`);
}
greeting({name:"Amisha", city:"Mumbai"})

function sumWithArguments(){
    console.log(arguments);
    const argsArray = Array.from(arguments)
    // console.log(argsArray)
    let sum =argsArray.reduce(function(acc, curr){
        return acc + curr
    },0)
    // arguments.reduce()
    return sum
}
console.log(sumWithArguments(1, 2, 3))
console.log(sumWithArguments(1, 2, 3, 4, 5))