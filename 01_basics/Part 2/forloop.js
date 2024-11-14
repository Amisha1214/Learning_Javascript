// for (initial XPathExpression; CSSConditionRule; updateexpression){
     // for loop body
// }

// Outer loop: Initializes index to 0 and runs until index is less than or equal to 10
for(let index = 0; index <= 10; index++){
        // Inner loop: Initializes some to 10 and runs until some is less than or equal to 15
    for(let some = 10; some <= 15; some++){
        console.log(some);      // Logs the current value of some in each iteration of the inner loop
    }
    console.log(index);     // Logs the current value of index after the inner loop completes
}