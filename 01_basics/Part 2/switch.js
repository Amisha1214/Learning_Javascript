// switch(key){

//     case value:

//         break;

//     default:

//         break;    
// }

let grade = 'B'
switch(grade){

    case 'A':
        console.log("Grade is A");
        break;
    case 'B':
        console.log("Grade is B");
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
        console.log("Invalid Grades");
        break;    
}

let role = "CEO";
let salary = 100000;
switch(grade){

    case "employee": 
    case  "hr":
    case "manager":
        salary += 0.05*salary;
        break;
    case "CEO":
    case "CIO":
    case "CTO":
        salary += 0.1*salary;
        break;
    default:
        console.log("Unknown Role");   
}

console.log(salary);
