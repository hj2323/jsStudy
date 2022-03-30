// 1. Use strict
//Whole-script strict mode syntax
//JavaScript is very flexible
//flexible === dangerous
// added ECMAScript5
'use strict';
console.log('Hello World');

let a;
a = 6;


//2. Variable
// let(added in ES6)
// Block scope
let globalname = 'global bubbles'
{
let name = 'bubbles';
console.log(name);
name = 'hello';
console.log(name);
console.log(globalname);
}
console.log(name);
console.log(globalname);

// var(dont ever use this!!)
// var hoisting (move declaration from bottom to top) 
//        hoisting 끌어올려주다 : 어디에 선언했는지 상관없이 항상 선언을 제일 위로 끌어 올려 주는 것
// has no block scope
console.log(age);
age=4
console.log(age);
var age;

// 3. Constant
// favor immutable data type always for a few reasons;
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`); 
console.log(`value: ${size}, type: ${typeof size}`); 

// number - special numeric values: infinity, -infinity, Nan
const infinity = 1 / 0; // decimal number
const negativeInfinity = -1 / 0; // decimal number
const nAn = 'not a number' / 2; // decimal number
console.log(infinity); 
console.log(negativeInfinity); 
console.log(nAn); 

// bigInt (fairly new, dont use it yet)
const bigInt = 1234567894113245678945612132456878235457895124249n; // over(-2**53 ~ 2**53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`); 
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${bigInt}, type: ${typeof greeting}`); 
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`); 
console.log('value: '+ helloBob + ' type: ' + typeof helloBob); 


// boolean
// false: 0, null, undefined, Nan, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`); 
console.log(`value: ${test}, type: ${typeof test}`); 

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`); 

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`); 

// symbol, create unique idnetifiers for objects
// map이나 다른 곳에서 고유한 식별자가 필요하거나 할때 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); 

// object, real-life object, data structure
const bubbles = {name: 'bubble', age: 1};
bubbles.age = 2;


// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`); 
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); 
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); 
text = '8' / 2;
console.log(`value: ${text}, type: ${typeof text}`); 
console.log(text.charAt(0)); // error

