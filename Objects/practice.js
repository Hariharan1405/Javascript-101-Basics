// OBJECTS {}
// key: value pairs
//creating object named person
// const person = {
//     name: 'Raghul',
//     age: '22'
// }

//accessing the object properties: dot notation VS bracket notation
// console.log(person.name);

// console.log(person['age']);

// //adding the properties
// person['phone'] = '22-333-4444';
// console.log(person);

//ES6 functions(2 arguments)
//object
//template literals
//functions inside the objects!
const introducer = (name, age) =>{
    const person={
        name: name,
        age: age,
        assets: 1000000,
        liability: 5000,
        networth: function(){
            return this.assets-this.liability
        }
    }

    const greet = `Hii I am ${person.name}, and I am ${person.age} years old with networth $${person.networth()} USD !`;
    return greet;
}

// console.log(introducer('Raghul', 22));
// console.log(introducer('Pappu', 22));

