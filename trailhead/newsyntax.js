var myVar = 1;
function myFunc() {
    var myVar = 2;
    console.log(myVar);
}
myFunc();
console.log(myVar);

let firstName = 'John', lastName = 'Doe';
let user = {firstName, lastName};

let numbers = [1, 2, 3, 4]; 
let [one, two, three, four] = numbers;
console.log(one);

const APPLE = {
    type: 'red delicious',
    color: 'red',
    size: 'large'
  }
 
  
// const {type, color} = APPLE;
// console.log(color);

const { type, color, size, packaging } = APPLE;
console.log(packaging);
