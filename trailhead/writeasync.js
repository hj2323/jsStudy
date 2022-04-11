'use strict'
function doSomething(msg){
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                try{
                    throw new Error('bad error');
                    console.log(msg);
                    resolve();
                } catch(e){
                    reject(e);
                }
            
            }, 1000);
    })
    
}

doSomething("1st call")
    .then( () => doSomething("2nd Call"))
    .then( () => doSomething("3rd Call"))
    .catch(err => console.error(err.message));

async function doSomethingManyTimes() {
    try{
        await doSomething("1st call");
        await doSomething("2nd call");
        await doSomething("3rd call");
    } catch(e){
        console.error(e.message);
    }
}

doSomethingManyTimes();