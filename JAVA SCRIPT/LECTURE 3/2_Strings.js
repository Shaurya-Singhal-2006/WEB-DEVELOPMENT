//                                          STRINGS

// string is a sequence of character used to represent text



//  CREATE STRING

let str = "Shaurya Singhal";


// STRING LENGTH

console.log(str.length)        // 15


// STRING INDICES 

console.log(str[0],str[2],str[5]);



// TEMPLATE LITERALS 

let sentence = `this is a special string`
console.log(sentence);
console.log(typeof(sentence));



// it is like f string from python

let obj = {
    item : "pen",
    price : 60,
};

// STRING INTERPOLATION
// to create strings by doing substitution of placeholder 
console.log(`the item is ${obj.item} and the cost is ${obj.price} rupees`);

// \n  --> next line
// \t  --> tab space 

console.log("Hello \nWorld");
console.log("Hello \tWorld");
