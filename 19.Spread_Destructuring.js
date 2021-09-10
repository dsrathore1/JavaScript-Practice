"use strict"

//* Spread Opreator and Destructuring

//! Spread Operator in array

let arr = [1, 2, 35, 6];

const sum = (a, b, c) => console.log(`The sum three elements in array ${a + b + c}\n`);

sum(...arr)

let ar = [2, 4, 3, 4, 74, ...arr, 7, 8]
console.log(ar);

let arr2 = [6, 7, 1, 9, 4, 73, ...ar];

const add = [...arr, ...arr2, ...ar];
console.log(add)
//! Spread Operator in Object



let obj1 = {
    Name: "King",
    FavLang: "Python",
    FavNum: 24.4,
    Class: 12,
    School: "NLCS",
    LoveGame: true
}

let obj2 = { ...obj1, Name: "Rohan", FavLang: "Javascript", FavNum: 241.5, LoveGame: false, Array: [...arr] };

console.log(obj1);
console.log(obj2);

//! Destructuring

let {Class, Name, FavLang} = obj1; //* Value of the objects are into the variables

console.log(`\nMy name is ${Name}\n`)