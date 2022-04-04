'use strict';
//Object-oriented programming
//class: template
//object: instance of a class
//JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Cat{
    //constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak(){
        console.log(`${this.name}: meow!`);
    }
}

const bubbles = new Cat('bubbles', 1);
console.log(bubbles.name);
console.log(bubbles.age);
bubbles.speak();

// 2. Getter and Setters
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value) {
        // if (value < 0){
        //      throw Error('age can not be negative');   
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Jobs', -1);
console.log(user1.age);