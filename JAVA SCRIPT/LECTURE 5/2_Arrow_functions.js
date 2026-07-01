//                                ARROW FUNCTIONS

// compact way of writing a function

//  const functionname = (para1 , para2) => {
//      do some work 
// }



// sum fucntion

function sum(a,b){
    return a+b;
}

const arrowSum = (a,b) => {
    console.log(a+b);
};

arrowSum(3,4);



// multiply function 

function mul(a,b){
    return a*b;
}

const arrowMul = (a,b) => {
    console.log(a*b);
}

arrowMul(2,3);



// print hello

const hello = () => {
    console.log("hello");
}

hello();