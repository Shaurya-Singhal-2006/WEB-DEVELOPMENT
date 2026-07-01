// for a given array of number , print the square of each value using forEach loop

let arr = [1,2,3,4,5];

arr.forEach(function sqr(val){
    x = val*val;
    console.log(x);
})

// arroe function 
arr.forEach((val) =>{
    console.log(val*val);
})

// OR

function square(val){
    console.log(val**2);
};

arr.forEach(square);
