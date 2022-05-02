let result = function(i, j){
    return i+j;
}
console.log(result(2,3));

// arrow function 
//Using the fat arrow symbol ( => ), 
//you can now create the same function using code like this:
let arrow_result = (i,j) => i+j;
console.log(arrow_result(2,3));
// if you do include the curly braces, the return keyword is required.

// 'this' cause problems in certain situation
// function is called using an object:
let message = {
    hello : 'Hello',
    names : ['Sue', 'Joe'],
    showMessage: function() {
        let self = this;
        this.names.forEach(function(name){
            //console.log(this.hello + ' ' + name);
            console.log(self.hello + ' ' + name);
        });
    }
}
message.showMessage();

let message2 = {
    hello : 'Hello',
    names : ['Sue', 'Joe'],
    showMessage: function() {
        //using nested arrow function
        this.names.forEach(name => {
            console.log(this.hello + ' ' + name);
            //console.log(self.hello + ' ' + name);
        });
    }
}
message2.showMessage();

// Better Parameter Handling
// prior to ES6
function helloMessage (param1, param2) {
    param2 = param2 || 'World';
    return param1 + ' ' + param2;
}
console.log(helloMessage('Hello'));

// You can now specify default parameter values via 
// an equal sign ( = ) in the parameter list
function helloMessage2 (param1, param2 = 'HeyG') {
    return param1 + ' ' + param2;
}
console.log(helloMessage2('Hello'));

// object parameter
function showMessage(who, {p1="Hello", p2="World"}={}){
    console.log(who + ' says ' + p1 + ' ' + p2);
}
showMessage("HeyG");

// Rest(/spread operator) : give me the rest of the arguments(...)
function showContact(firstName, lastName, ...title) {
    console.log(firstName + ' ' + lastName + ', ' + title[0] + ' and ' + title[1]);
}
showContact('Sue', 'Johnson', 'Developer', 'Architect');

let array1 = ['one', 'two'];
let array2 = ['three', 'four'];
array1.push(...array2);
console.log(...array1);
