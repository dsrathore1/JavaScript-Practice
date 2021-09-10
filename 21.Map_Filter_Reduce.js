"use strict"
//! Map 

let ar = [1, 2, 3, 4, 5];

let a1 = ar.map((value) => {
    return value * 2;
});

console.log(`I am array first [${ar}], & I am array second which multiplied by 2 [${a1}]`);

//! Filter (Which filter the given value)

let a2 = ar.filter((value) => {
    return value < 4;
});

console.log(a2);

//! Reduce 

let a3 = ar.reduce((value, value1)=> {
    return value + value1;
});

console.log(a3);