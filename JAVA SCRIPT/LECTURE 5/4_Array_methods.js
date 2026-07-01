//                                        ARRAY METHODS

// 1. map() --> creates a new array with the result of some operation the value its callback return are used to form new array
// arr.map(callbackFun(value, idx, array ))

let val = [1,2,3,4,5];

val.map((val) =>{
    console.log(val);
})

// return new array
let newArr = val.map((val =>{
    return val;
}))

console.log(newArr);




// 2. filter() --> creates a new array of elements that give true for a condition/filter
// eg: all even elements

let value = [1,2,3,4,5,6,7,8];

// even value
let evenArr = value.filter((val) =>{
    return val % 2 == 0;
})
console.log(evenArr);

// value greater than 3
let greaterThan3 = value.filter((val) =>{
    return val > 3;
})
console.log(greaterThan3);




// 3. reduce() --> perform some operation and reduce the array to a single value . it returns that single value

arr = [1,2,3,4,5];

const output = arr.reduce((res,curr) =>{
    return res + curr;
})
console.log(output);

// 1,2,3,4
// res -> 1 + curr -> 2 ==> 3 (stored in res)
// res -> 3 + curr -> 3 ==> 6 (stored in res)
// res -> 6 + curr -> 4 => 10 (stored in res)

// output res


// largest value

const largestValue = arr.reduce((res,curr) =>{
    return res > curr ? res : curr;
});

console.log(largestValue);