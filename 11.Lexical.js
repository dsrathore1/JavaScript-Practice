let a = "Hello";

function first() {
    let b = "world";
    second();
    function second() {
        let c = "My name is King";
        console.log(a, b, c);
        three();
    }
}
function three() {
    let d = "My name is AISHA";
    console.log(a, d);
    // console.log(a, b, c, d)  //! Not  possible, because b and c are not an global scope even not into the function three and as we know one function did not interfare into the another function.
}
first();


