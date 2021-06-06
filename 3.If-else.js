var age = 20;

if (age >= 18) {
    console.log("You are not eligible for the voting.");
} else {
    console.log("Congratulations! you are eligible for the voting.");
}

var year = 2021;

if (year % 4 == 0) {
    if (year % 100 == 00) {
        if (year % 400 == 0) {
            console.log(year + ' is an leap year');
        } else {
            console.log(year + ' is not an leap year');
        }
    } else {
        console.log(year + ' is an leap year');
    }
} else {
    console.log(year + ' is not an leap year');
}




// * Ternary 


// ! variables = coditions ? true : false;

let num = 34;

console.log(num = num >= 30 ? num + " is greater than thirty" : num + ' is not greater than thirty');