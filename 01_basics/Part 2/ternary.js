// Boolean variable to check if the user is logged in
let isUserLoggedIn = false
// Boolean variable to check if the user has purchased the course
let isTheCoursePurchased = true

// Basic if-else condition to check if the user is logged in
if (isUserLoggedIn) {
    console.log("Welcome to the website");  // If user is logged in, display welcome message
}
else{
    console.log("Please Login");
}
// Using a ternary operator to check if the user is logged in
isUserLoggedIn 
? console.log("Welcome to the website"):    // If true, display welcome message
console.log("Please login") // If false, prompt them to log in
 

// Nested ternary operator to check both login and purchase status
isUserLoggedIn
    ? isTheCoursePurchased
    ?console.log("Access Granted")      // If logged in and course is purchased, grant access
    : console.log("Access Denied !! Please Buy The Course")     // If logged in but course not purchased, deny access with message
    : console.log("Access Denied !! Please login");     // If not logged in, deny access and prompt to log in