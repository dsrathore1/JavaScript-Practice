console.log("Hello Ji I am on the top");
var a = "alpha";

//? IIFE (Immediately Invoked Function Expression)

(function (name) {
    var title = "IIFE";
    var b = "beta"
    console.log("This is a function name", title, name)
    console.log(a, b)
})("King");

// console.log(b); //! Throw the error because b is not defined globally.

console.log("Hello Brother");