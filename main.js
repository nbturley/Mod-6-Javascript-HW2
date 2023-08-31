//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

console.log('Exercise 1');

let person = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

let keys = Object.keys(person);
keys.forEach((key,index) => {
    if (typeof person[Object.keys(person)[index]] === 'object') {
        if (Object.keys(person)[index] === "shakes") {
            console.log(`${Object.keys(person)[index]}:`);
            let shakes = person[Object.keys(person)[index]][0];
            for (let key in shakes) {
                console.log(`  ${key}: ${shakes[key]} `);
            }
        } else {
            console.log(`${key}: ${person[key]} `);
        }
    } else {
        console.log(`${key}: ${person[key]} `);
    }
})


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

console.log('Exercise 2');

// Create our Person Prototype
function Person(name, age){
    this.name = name;
    this.age = age;
    
    // Use an arrow to create the printInfo method
    this.printInfo = () => {
        console.log(`This is ${this.name} age ${this.age}.`);

        return 'Info printed'
    }


    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age 
    this.addAge = (num = 1) => {
        this.age = this.age + num
    }
}

// Create person 1
let john = new Person('John Doe', 47);
console.log(john.printInfo());
john.addAge()
john.addAge()
john.addAge()
console.log(john.printInfo());

// Create person 2
let jane = new Person('Jane Doe', 55);
console.log(jane.printInfo());


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

console.log('Exercise 3');

function longerThanTen(word) {
    return new Promise( (resolve, reject) => {
        if (word.length > 10){
            resolve(true);
        } else {
            reject(false);
        }
    })
}

// long word -> resolve path
longerThanTen('supercalifragilisticexpialidocious')
.then((word) =>{
    console.log(`Big word`);
}).catch((word) =>{
    console.log(`Small Number`);
})

// short word -> reject path
longerThanTen('hello')
.then((word) =>{
    console.log(`Big word`);
}).catch((word) =>{
    console.log(`Small Number`);
})