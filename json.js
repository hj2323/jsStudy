// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori', 
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);


// 2. JSON to Obejct
// parse(json)

