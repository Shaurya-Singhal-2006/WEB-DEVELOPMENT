//                                    OPERATORS     

// used to perform operation on data 

// a + b 
// a , b --> operands 
// +     --> operator



// ARITHMETIC OPERATOR 

// 1. +  --> addition
// 2. -  --> subtraction
// 3. *  --> multiplication
// 4. /  --> division
// 5. %  --> modulo
// 6. ** --> power

let a = 10;
let b = 5;

console.log("a + b = ",a+b);
console.log("a - b = ",a-b);
console.log("a * b = ",a*b);
console.log("a / b = ",a/b);
console.log("a % b = ",a%b);
console.log("a ** b = ",a**b);



// UNARY OPERATOR 

// 1. increment --> x++ , ++x
// 2. decrement --> x-- , --x

let x = 10;

console.log("x++",x++);
console.log("x--",x--);
console.log("++x",++x);
console.log("--x",--x);


// ASSIGNMENT OPERATOR

// 1.  =  -->           assignment 
// 2.  +=
// 3.  -=
// 4.  *=
// 5.  /=
// 6.  %=
// 7. **=

let c = 10;

console.log("c += 4 = ",c+=4);
console.log("c -= 4 = ",c-=4);
console.log("c *= 4 = ",c*=4);
console.log("c /= 4 = ",c/=4);
console.log("c %= 4 = ",c%=4);
console.log("c **= 4 = ",c**=4);


// COMPARISON OPERATOR 

// 1. ==  --> equal to
// 2. !=  --> not equal to
// 3. === --> equal to and type    (data should be same)
// 4. !== --> not equal to and type

// 5. >=  -->  greater than equal to ( answer is in terms of true or false )(boolean value)
// 6. >   -->  greater than ( answer is in terms of true or false )(boolean value)
// 7. <=  -->  less than equal to ( answer is in terms of true or false )(boolean value)
// 8. <   -->  less than ( answer is in terms of true or false )(boolean value)


let y = 5;
let z = 3;
let d = "5";

console.log("y == z",y==z);
console.log("y != z",y!=z);
console.log("y === d",y===d);
console.log("y !== d",y!==d);

console.log("y >= z",y>=z);
console.log("y > z",y>z);
console.log("y <= z",y<=z);
console.log("y < z",y<z);


// LOGICAL OPERATOR 

// 1.  && AND -->  both condition needs to be true for the answer to be true
// 2.  || OR  -->  if one condition is true the answer is true   
// 3.  !  NOT -->  makes true false and false true

let e = true;
let f = false;
let g = true;
let h = false;

// AND
console.log("e && f",e&&f);
console.log("e && g",e&&g);

// OR
console.log("e || f",e||f);
console.log("h || f",h||f);

// NOT

console.log("!e",!e);
console.log("!f",!f);


