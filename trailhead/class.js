'use strict'

//////////////////////////
// Work with Classes
//////////////////////////

function Animal(name){
    this.name = name;
}

Animal.prototype.printName = function(){
    console.log(this.name);
}

//if you wanted to instantiate the class and call the printName function
let duck = new Animal('duck');
duck.printName();

// class keyword
// even tho the class keyword is used, 
//the underlying object created is still a function 
class Plant {
    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log(this.name);
    }
}

console.log(typeof Plant);


// extends keyword
class Parent {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class Child extends Parent{
    constructor(name){
        super(name);
    }
    getMessage() {
        return 'Hello ' + super.getName();
    }
}

let someone = new Child('bubbles');
console.log(someone.getMessage());

//classes can also be defined using expressions:
const myAnimal = class Animal {
    constructor(name){
        this.name = name;
    }

    printName(){
        console.log(this.name);
    }
}

let cat = new myAnimal('cat');
cat.printName();