
//! Default Parameter's 
//! value always passed in the default parameter in first position

function dParameter1(a = 23, b) {
    console.log("a : ", a );
    console.log("b : ", b );
    }
    
    dParameter1(10, 50); //* we override the value of the 'a'
    
    dParameter1(30); //* 30 override the value of 'a' but not passed in the value 'b'
    
    console.log("\n");
    
    function dParameter2(a, b= 2){
        return `multiplication of a : ${a} and b : ${b} =  ${a*b}`;
    }
    
    console.log(dParameter2(10));
    
    console.log("\n");
    
