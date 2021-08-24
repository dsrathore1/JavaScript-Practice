"use strict"

//* Normal function

function add() {
    let sum = 34 + 42;
    console.log(`The sum of two numbers is ${sum}\n`);
};

add();

//* Anonymous function without fat arrow "=>"

let show = function () {
    console.log("Hello I am anonymous function!!\n");
};

show();

//* Anonymous function with fat arrow "=>"

let ano_fun = () => {
    console.log("Hello I am another anonymous function using fat arrow.\n")
};


ano_fun();

//*IIFE (Immediatly invoked function expression) without using "=>"

(function () {
    console.log("Hello I am IIFE\n");
})();

//* IIFE (Immediatly invoked function expression) with using "=>"

let obj = {
    name: "IIFE",
    func: "Anonymous function",
    creator: "King",
    print: function () {
        return ("Thank for your co-operation :)")
    },
};

(() => {
    console.log(`Hello I am ${obj.name}, and my type is ${obj.func}, and my creator is ${obj.creator}${obj.print()}`);
})();