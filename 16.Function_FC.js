//! Functions in  First-class citizens
"use strict"

//* Creating Function with variable

const thank = function (){
    console.log("Thank You");
}

thank();

//* Creating a Function in object

const thank = {
    name : "King",
    pro_lang : "My fav programming language is JavaScript",
    thank : function(){
        console.log("I am pursuing my BCS from RTU");
    }
}

thank.thank();
thank.name;
thank.pro_lang;

//* Creating function and pass an function as an argument

const greet = ()=>{
    return "Hello";
}

const greeting_to_person = (sayHi, name)=>{
    console.log(sayHi(), name);
}

greeting_to_person(greet, "Rohan"); 

//* Creating returning function

function a (){
    return function b(){
        console.log("Thank You for your love and support :)");
    }
}

a()();
const c = a();
c();


const x = ()=>{
    return function y (){
        return function z (){
            console.log("This your function z and last one no. 3");
        }
    }
}

x ()()();

let m = x()
let n = m()
n()