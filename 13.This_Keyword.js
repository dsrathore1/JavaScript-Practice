//* Alone

console.log(this);

"use strict"

//* Regular Function 

function sum(){
    var add = 2 + 3;
    console.log("This is an sum of two no. "+add);
    console.log(this); //? This showing "Undefined" in terminal but on web it will 1show the windows object. Windows object is a global object.
}

sum()

//* In Method

const king = {
    name: "DS Rathore",
    developer: true,
    sum: function () {
        var add = 2 + 3;
        console.log("This is an sum of two no. " + add);
        console.log(this);
    }
}
king.sum();

//* In function

