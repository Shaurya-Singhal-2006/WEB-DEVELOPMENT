//                                 FUNCTIONS

// block of code that performs a spicific task , can be invoked whenever needed

// FUNCTION DEFINITION

// function functionName(){
//     do some work
// }

function printhello(){
    console.log("HELLO USER");
}

function Func(mes){         // mes --> parameter 
    console.log(mes);
}

// we can give multiple parameters 
function intro(user,age){
    console.log(`hello ${user} you are ${age} years old`)
}


// FUNCTION CALL
printhello();
Func("HELLO WORLD");       // argument 
intro("shaurya",19);


// function to sum two numbers

function sum(num1 , num2){
    return num1 + num2;
}

let answer = sum(5,10);
console.log(answer);
