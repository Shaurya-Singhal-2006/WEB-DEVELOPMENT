//                                      ARRAYS

// collection of items

// we preffer making array of same data type
let marks = [56,67,78,89,90];
let info = ["rahul",20,"Delhi"];

console.log(marks);
console.log(marks.length);

console.log(typeof(marks));             //object




// ARRAYS INDICES

console.log(marks[0]);     // 56
console.log(marks[2]);     // 78
console.log(marks[4]);     // 90
console.log(marks[6]);     // undefined

// arrays are mutable 
marks[2] = 92;         
console.log(marks[2]);