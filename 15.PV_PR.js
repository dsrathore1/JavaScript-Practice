"use strict"

//! Pass by value and Pass Reference

//* Pass by Value 

let a = 5;
let b = a;

console.log(a);
console.log(b);

//! Now they both are independent now the value of 'b' is 5 and they both have their own different memory location. When we try to change the value of the 'b' or 'a' then the value get updated.

//* Pass by Reference

const obj1 = {
    user: "Hello",
    pwd: "World"
}

const obj2 = obj1;

console.log("I'm object 2 ", obj2);
console.log("I'm object 1 ", obj1);

// //? Now I gonna change the pwd value of obj2

obj2.pwd = "King"

console.log("I am object 2 after changed in pwd", obj2);
console.log("I am object 1 after changed in pwd of obj2", obj1);

//! ALL Primitive data types are based on pass by value. And non primitives are based on pass by reference.


//? Exercise

let likes = 100;

const youtube = {
    channel: "King",
    subscriber: 1000
}

const ds = (a, b) => {
    a = 200;
    b.subscriber = 2000;
}

ds(likes, youtube);

console.log(likes);
console.log(youtube.subscriber); //? It will change because object is non primitive data type so it is based on pass by reference so the value of youtube object also changed and show the changed value because it is only reference the memory not copy the value and stucked.

