'use strict'

//Javascript is synchronous.
//Execute the code block in order after hoisitng.
// hoisting : var, function declaration automatically go up to the top
console.log('1');
setTimeout(function() {
    console.log('2');
}, 1000) // 지정한 시간이 지나면 우리가 선언한 콜백함수를 불러줌
setTimeout(() => console.log('2'), 1000); //arrow function으로 바꿔줌
console.log('3');


// Synchronous callback
function printImmediately(print){
    print();
}

printImmediately(() => console.log('hello'));
// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

//Callback Hell example
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(() => {
            if(
                (id === 'bubbles' && password === 'dream') ||
                (id === 'coder' && password === 'company')
            ){
                onSuccess(id);
            }else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if(user === 'bubbles'){
                onSuccess({ name:'bubbles', role: 'admin'});
            }else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${user.name}, you have a ${user.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {  console.log(error);    }
);