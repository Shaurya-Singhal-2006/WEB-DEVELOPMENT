//                                ARRAY METHODS



// 1. push()   ---> add to end
let items = ["potato","apple","litchi","mango","tomato"];
items.push("chips");
console.log(items);



// 2. pop()  ---> delete from end and return
items = ["potato","apple","litchi","mango","tomato"];
console.log(items);
let delValue = items.pop();
console.log(items);
console.log(delValue);



// 3. toString()  --->  convert array to string
items = ["potato","apple","litchi","mango","tomato"];
console.log(items);
console.log(items.toString())         // this make the whole a single string



// 4. Concat()  ---> joins multiple array and return result
let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9];
let finalarr = arr1.concat(arr2);
console.log(finalarr);



// 5. unshift()  ---> add to start
items = ["potato","apple","litchi","mango","tomato"];
items.unshift("chips");
console.log(items);



// 6. shift()  ---> delete from start and return 
items = ["potato","apple","litchi","mango","tomato"];
console.log(items);
delValue = items.shift();
console.log(items);
console.log(delValue);



// 7. Slice()  ---> returns a piece of the array
items = ["potato","apple","litchi","mango","tomato"];
let sli_arr = items.slice(0,3);                         // end index not included
console.log(sli_arr);



// 8. Splice  ---> change original array(add,remove,replace)
items = ["potato","apple","litchi","mango","tomato"];
items.splice(1,2,"grapes","candy");         //( startIDX , delCount , newEl1 , newEl2)
console.log(items);