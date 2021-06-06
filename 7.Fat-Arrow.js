//! Fat Arrow Funtion 

//? Traditional function decalaration

function tDecalration() {
    let a = 23;
    let b = 2;

    return `The sum of a : ${a} and b : ${b} = ${a + b}`
}

console.log(tDecalration());

console.log("\n");

//? Fat arrow decalaration 

const mDecalaration = () => `The multipication of a : ${a = 3} and b : ${b = 4} = ${a * b}`

const mDecalaration2 = () => `The divison ${(x = 9) - (y = 6)}`

console.log(mDecalaration());
console.log("\n");
console.log(mDecalaration2());