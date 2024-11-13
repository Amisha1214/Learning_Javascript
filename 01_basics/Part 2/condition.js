//  if (condition){
// }
// if-else condition to check if divisor is not zero
let dividend = 10
let divisor = 5

if (divisor != 0) {    // Check if divisor is not zero
    let result = dividend / divisor // Perform division
    console.log(result)  // Output the result
}
else{
    console.log('Your divisor is Zero')// Output message if divisor is zero
}

// if-else condition to check age eligibility
let age = 25
if (age<18){  // Check if age is less than 18
    console.log("You are not eligible"); // Output if under 18
}
else{
    console.log("You are eligible");// Output if 18 or older
    
}

// if-else condition to check admin status
let isAdimin = false
if (isAdimin) {     // Check if the user is an admin
    let dividend = 10;
    let divisor = 5;
    
    if (divisor != 0) { // Check if divisor is not zero
        let result = dividend / divisor; // Perform division
        console.log(result); // Output the result
    } else {
        console.log('Your divisor is Zero'); // Output message if divisor is zero
    }
    
    // Example of an if-else condition to check age eligibility
    let age = 25;
    
    if (age < 18) { // Check if age is less than 18
        console.log("You are not eligible"); // Output if under 18
    } else {
        console.log("You are eligible"); // Output if 18 or older
    }
    
    // Example of an if-else condition to check admin status
    let isAdmin = false;
    
    if (isAdmin) { // Check if the user is an admin
        console.log("Getting admin details"); // Output if admin
    } else {
        console.log("Getting User details"); // Output if not admin
    }
    
    // Example of nested if-else to find the greatest of three numbers
    let a = 10;
    let b = 14;
    let c = 54;
    
    if (a > b) { // Check if a is greater than b
        if (a > c) { // If a is also greater than c
            console.log("A is the greatest"); // Output if a is the greatest
        } else {
            console.log("C is the greatest"); // Output if c is greater than a
        }
    } else {
        if (b > c) { // Check if b is greater than c
            console.log("B is the greatest"); // Output if b is the greatest
        } else {
            console.log("C is the greatest"); // Output if c is the greatest
        }
    }
    
    console.log("Getting admin details");   // Output if admin
}
else{
    console.log("Getting User details");    // Output if not admin
}

// if-else to find the greatest of three numbers
let a= 10
let b = 14
let c = 54

if (a > b) {    // Check if a is greater than b
    if (a > c){     // If a is also greater than c
        console.log("A is the greatest");   // Output if a is the greatest
    }
    else{
        console.log("C is the greatest");   // Output if c is greater than a
    }
}
else{
    if(b > c){       // Check if b is greater than c
            console.log("B is the greatest");   // Output if b is the greatest
    }
    else{
        console.log("C is the greatest");   // Output if c is the greatest
    }
}