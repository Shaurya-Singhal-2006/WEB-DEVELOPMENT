//                                FOR EACH LOOP 

// arr.forEach(callBackFunction)
// callBackFunction : here it is a function to execute for each element in the array
// A callBack is a function passed as an argument to another function 

let arr = [1,2,3,4,5,6,7,8];

arr.forEach(function printValue(val){
    console.log(val);
})

arr.forEach((val) => {
    console.log(val);
})

// value , index , arr

arr.forEach((val , idx , arr) =>{
    console.log(val,idx,arr);
})


// higher order function  ---> take another function as a parameter or return a function 