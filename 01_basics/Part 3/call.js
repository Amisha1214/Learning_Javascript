function printName(name) {
    console.log(`Hi ${name}`);
}

printName.city = "Delhi";

printName("John");

console.log(printName.city);

// methods of function's object version

// they are used to control the context of this call

const user1 = {
    name: "Peter",
    greetings: function() {
        console.log(`Hello, ${this.name}`);
    }
};
const user2 = {
    name: "John",
    greetings: function() {
        console.log(`Hello, ${this.name}`);
    }
};

// function borrowing
user1.greetings.call(user1, 'Delhi', 30);
user2.greetings.call(user2, 'Mumbai', 40);

// bind

const person = {
    name: "John",
    sayHi: function(city, age) {
        console.log(`Hello, ${this.name} from ${city} of age ${age}`);
    }
};

const anotherPerson = {
    name: "Peter"
};

const boundFunction = person.sayHi.bind(anotherPerson, 'Delhi', 40);

// 100 lines code

boundFunction();
