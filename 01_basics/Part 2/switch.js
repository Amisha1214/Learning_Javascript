// Template for a switch-case structure
switch(key){

    case value:
        // Code to be executed if key matches the value
        break;  // Exits the switch block

    default:
        // Code to be executed if key does not match any cases
        break;  // Exits the switch block  
}

// Example 1: Checking grades
let grade = 'B'
switch(grade){

    case 'A':
        console.log("Grade is A");
        break;
    case 'B':
        console.log("Grade is B");  // Executes this case if grade is 'B'
        break;
    case 'C':
        console.log("Grade is C");
        break;
    case 'D':
        console.log("Grade is D");
        break;
    case 'F':
        console.log("Grade is F");
        break;
   
    default:
        console.log("Invalid Grades");   // Executes if grade does not match any case
        break;    
}

// Example 2: Adjusting salary based on role
let role = "CEO";
let salary = 100000;
switch(grade){

    case "employee": 
    case  "hr":
    case "manager":
        salary += 0.05*salary;   // Increase salary by 5% for employee, hr, or manager roles
        break;
    case "CEO":
    case "CIO":
    case "CTO":
        salary += 0.1*salary;
        break;
    default:
        console.log("Unknown Role");    // Executes if role does not match any case   
}

console.log(salary);    // Outputs the adjusted salary based on the role
