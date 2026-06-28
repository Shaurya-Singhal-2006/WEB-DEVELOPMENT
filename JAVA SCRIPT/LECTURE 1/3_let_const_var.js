//                              VAR , LET AND CONST


// 1. var     ---> Variables can be re declared and updated .A global scope variable 
// 2. let     ---> Variable cannot be re declared but can be updated .A block scope variable 
// 3. const   ---> Variables annot be re declared or updated .A block scope variable

let name = "shaurya singhal";
let age = 19;

console.log(name);
console.log(age);

name = "SHAURYA";
age = 20;

console.log(name);
console.log(age);


// now the value can not be changed
const Name = "Rohan";
const Age = 29;

console.log(Name);
console.log(Age);


// Name = "shaurya singhal";      this will give error in the console window
// console.log(Name);


const PI = 3.14;
console.log(PI);

let a;
console.log(a);      //undefined
a = 10;
console.log(a);      // 10


// BLOCK
{
    let b = 50;
//  let b = 60;   this will give error
    console.log(b);
}

{
    let b = 60;
    console.log(b);
}