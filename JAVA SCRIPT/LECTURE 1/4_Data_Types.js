//                                     DATA TYPES 


//  ALL THESE ARE PRIMITIVE DATA TYPES

age = 19;
console.log("age is :",typeof(age));              // Number

price = 50.99; 
console.log("price is :",typeof(price));          // number

Fullname = "Shaurya Singhal";
console.log("Fullname is :",typeof(Fullname));    //string

isFollow = true;
console.log("isFollow is :",typeof(isFollow));    //boolean

let z;
console.log("z is :",typeof(z));                  //undefined

let b  = null;
console.log("b is :",typeof(b));                  //object

let c = BigInt("123456");
console.log("c is :",typeof(c));                 //bigint 

let d = Symbol("hello!!!!");
console.log("d is :",typeof(d));                 //symbol




// NON - PRIMITIVE
// Object  --> it is a collection of values 

// Arrays , Functions 

// key : value

const student = {
    Fullname : "Rahul",
    age : 25,
    cgpa : 7.1,
    ispass : true 
};

console.log(student);
console.log(student["cgpa"]);
console.log(student.Fullname);



// to make changes in object variables
student.age = 26;
console.log(student.age);                // 26

//   OR

student["age"] = student["age"] + 1;
console.log(student.age);                // 27
