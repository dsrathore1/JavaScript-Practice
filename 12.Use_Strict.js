"use strict"

//! This is Hoisting function and this is not a good practice to use. When we write "use strict" then we have to use var, let, const, when we declare the variable this is good practice to avoid errors and make code cleaner. 

// a(55,20);

// function a (a, b){
//     multi = a * b;
//     console.log(add);
// }

//? In this function we do every thing right but we declare two parameters (Duplicate parameter) and that is not allow into this context


// function b(x, x) {
//     var add = x + x;
//     console.log(add);
// }

// b(12, 32);


//* Correct one


function c(x, y) {
    let sub = x - y;
    console.log(sub);
}

c(12, 4);