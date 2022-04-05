// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };


// 1. Literals and properties
const name = 'bubbles';
const age = 1;
print(name, age);
function print(name, age){
    console.log(name);
    console.log(age);
}

//const bubbles = { name: 'bubbles', age: 1 };


const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const bubbles = { name: 'bubbles', age: 1 };
print(bubbles);

// with JavaScript magic( dynamically typed language )
// can add properties later
bubbles.hasJob = true; //이와 같이 동적으로 property 추가해서 코딩도 가능 - Dynamic type language // Runtime
//이렇게 너무 동적으로 코딩하면 금방하기는 쉽지만 유지보수에 어렵고 에러 발생확률 높다
console.log(bubbles.hasJob)

// can delete properties later
delete bubbles.hasJob;
console.log(bubbles.hasJob);

// 2. Computed properties
// key should be always string
console.log(bubbles.name);
console.log(bubbles['name']);
bubbles['hasJob'] = true;
console.log(bubbles.hasJob);

function printValue(obj, key){
    console.log(obj[key]);
}
printValue(bubbles, 'name');
printValue(bubbles, 'age');

// 3. Property value shorthand
const cat1 = { name: 'vader boo', age: 2};
const cat2 = { name: 'chester', age: 5};
const cat3 = { name: 'soy', age: 4};
const cat4 = makeCat('bubbles', 9);

function makeCat(name, age){
    return {
        name, //name: name,
        age, //age: age,
    };
}

// 4. Constructor function
function Cat(name, age){
    //this = {};
    this.name = name;
    this.age = age;
    // return this;
}


// 5. in operator: property existence check (key in obj)
console.log('name' in bubbles);
console.log('age' in bubbles);
console.log('random' in bubbles);
console.log(bubbles.random);


// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in bubbles){
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}
// ->
for(value of array){
    console.log(value);
}

// 7. Fun Cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'bubbles', age: '10'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);