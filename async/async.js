'use strict'
//async & await
//clear style of using promise :)

// 1. async -> promise를 간편하게 쓸 수 있는 syntactic sugar

// function fetchUser(){
//     return new Promise((resolve, reject) => {
//         //do network request in 10 secs.....
//         resolve ('ellie');
//     });
// }

async function fetchUser(){
    //do network request in 10 secs.....
    return 'ellie'; 
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
    await delay(3000);
    return '🍎';
}

async function getBanana(){
    await delay(3000);
    return '🍌';
}

// function pickFruits(){
//     return getApple()
//     .then(apple => {
//         return getBanana()
//         .then(banana => `${apple} + ${banana}`);
//     });
// }

async function pickFruits(){
    const applePromise = getApple(); 
    // promise를 만드는 순간 바로 프로미스안에 들어있는 코드 블록이 실행된다
    const bananaPromise = getBanana(); 
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join(' plus ')
    );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);