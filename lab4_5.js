let vasya = { name: "Вася", age: 23 };
let masha = { name: "Маша", age: 18 };
let vova = { name: "Вова", age: 12 };
let people = [ vasya , masha , vova ];

people.sort((a, b) => a.age - b.age);

console.log(people);