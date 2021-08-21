//* Alone

console.log(this);

"use strict"

//* Regular Function 

function sum() {
    var add = 2 + 3;
    console.log("This is an sum of two no. " + add);
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

//* In function, when we use "use strict" then it will show the output undefined.


//! EXERCISE

const exercise = {
    name: "King",
    branch: "CS",
    func: function () {
        let pro_lang = "JavaScript";
        console.log("What is your fav. language", pro_lang);
        console.log(this)

        function multi(z, y) {
            let mul = y * z;
            console.log("The multiple value of two no. is",mul);
            console.log(this) //! This show "undefined" rather it show's owner object because in regular function it will show only global object.
        }   
        multi(12, 53);
    }
}

exercise.func();