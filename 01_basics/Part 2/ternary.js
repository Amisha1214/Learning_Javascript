let isUserLoggedIn = false
let isTheCoursePurchased = true
if (isUserLoggedIn) {
    console.log("Welcome to the website");
}
else{
    console.log("Please Login");
}
isUserLoggedIn ? console.log("Welcome to the website"):
console.log("Please login")
 


isUserLoggedIn
    ? isTheCoursePurchased
    ?console.log("Access Granted")
    :console.log("Access Denied !! Please Buy The Course")
    :console.log("Access Denied !! Please login")

