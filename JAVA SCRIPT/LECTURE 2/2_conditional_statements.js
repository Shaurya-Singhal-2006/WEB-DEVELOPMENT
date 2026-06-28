//                                          CONDITIONAL STATEMENTS

// to impliment some condition in the code 



// 1. IF

let age = 25;

if(age >=18){
    console.log("the person can vote")
}

if(age < 18){
    console.log("the person cannot vote")
}


// 2. IF ELSE 

let choice = "dark";
let color;

if(choice === "dark"){
    color = "black";
}
else{
    color = "white";
}

console.log(color);


// 3.  ELSE IF 

age = 20;

if(age <= 19){
    console.log("TEENAGER");
}
else if(age > 20 && age <= 60){
    console.log("ADULT");
}
else{
    console.log("SENIOR")
}




// TERNARY OPERATOR 

// condition ? true output: false output

marks = 35

marks > 33 ? console.log("PASS") : console.log("FAIL")