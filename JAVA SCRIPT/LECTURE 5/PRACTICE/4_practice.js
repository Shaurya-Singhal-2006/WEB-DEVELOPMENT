// Take a number n as input from user create an array of numbers from 1 to n
// use the reduce method to calculate sum of all number in the array
// use the reduce method to calculate product of all numbers in the array

let n = prompt("enter n number");

arr = [];

for(let i = 1 ; i <=n ; i++){
    arr[i] = i;
}

let totalSum = arr.reduce((res,curr) =>{
    return res + curr;
});
console.log(`the total sum is => ${totalSum}`);

let product = arr.reduce((prev,curr) =>{
    return prev * curr;
});
console.log(`the product of ever element in the array is => ${product}`);