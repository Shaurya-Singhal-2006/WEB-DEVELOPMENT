//                                 LOOPS 

// loops are used to execute a piece of code again and again 


// FOR 

// initilize ; stopping condition ; updation 
for(let i = 1 ; i <= 5 ; i++){
    console.log(i);
}



// INFINITE LOOP 
// a loop that never ends    (we should not use this in out programm)



// WHILE 

let sum = 0;
let i = 0;

while(i<=5){
    sum += i;
    i++;
}
    
console.log(sum);        // 15



//  DO WHILE 
// runs atleast one time 

let j = 1;
do{
    console.log("Hello World ");
    j++;
}while(j<=5);



// FOR OF
// loop on strings and arrays

let name  = "Shaurya"
let len = 0;
for(let i of name){
    console.log(i);
    len++;
}

console.log("size of string is : ",len);


// FOR IN 
// loops for object (keys) and arrays


let student = {
    name : "Shaurya Singhal",
    age: 19,
    cgpa : 8.38,
    ispass : true,
};

for(let i in student){
    console.log("key = ",i, "value = ",student[i] );             //return keys of the objects
}