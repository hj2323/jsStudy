'use strict'

// Array🎉

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const monsters = ['🎃', '😈'];
console.log(monsters);
console.log(monsters.length);
console.log(monsters[0]);
console.log(monsters[1]);
console.log(monsters[2]);
console.log(monsters[monsters.length - 1]);

console.clear();
// 3. Looping over an array
// print all monsters
// a. for
for (let i = 0; i < monsters.length; i++){
    console.log(monsters[i]);
}

// b. for of
for (let monster of monsters){
    console.log(monster);
}

// c. forEach
monsters.forEach(function (monster, index, array) {
    console.log(monster, index, array);
});

monsters.forEach((monster) => console.log(monster));

// 4. Addition, deletion, copy
// push: add an item to the end
monsters.push('🎃', '😈');
console.log(monsters);

// pop: remove an item from the end
monsters.pop();
monsters.pop();
console.log(monsters);

// unshift: add an item to the begining
monsters.unshift('🎃', '😈');
console.log(monsters);

// shift: remove an item from the beginning
monsters.shift();
console.log(monsters)


// note!!!! shift, unshift are slower than pop, push
// splice: remove an item by index position
monsters.push('🎃', '👻', '😈');
console.log(monsters);
monsters.splice(1,1);
console.log(monsters);
monsters.splice(1,1, '💀', '🤡');
console.log(monsters);

// combine two arrays
const monsters2 = ['👹','🤖'];
const newMonsters = monsters.concat(monsters2);
console.log(newMonsters);

// 5. Searching
// find the index
console.clear();
console.log(monsters);
console.log(monsters.indexOf('🎃'));
console.log(monsters.indexOf('😈'));

// includes
console.log(monsters.includes('😈'));
console.log(monsters.includes('👹'));
console.log(monsters.includes('👹'));

// lastIndexOf
console.clear();
monsters.push('🎃');
console.log(monsters);
console.log(monsters.indexOf('🎃'));
console.log(monsters.lastIndexOf('🎃'));

