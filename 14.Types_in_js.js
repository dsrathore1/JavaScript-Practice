let a = 2;
let b = "String";
let c = true;
let d;
let e = "";

console.log(typeof (a));
console.log(typeof (b));
console.log(typeof (c));
console.log(typeof (d));
console.log(typeof (e)); // Null returns string but it is an null type

let obj = {
    name : "DS",
    branch : "CS",
}
obj.profession = "App developer";


console.log(typeof({})); // Object
console.log(typeof([])); // Array

console.log(obj)

const func = () => {
    console.log("Hello i am a function")
}

func()
console.log(typeof(func)); // It show's function but still this is an object