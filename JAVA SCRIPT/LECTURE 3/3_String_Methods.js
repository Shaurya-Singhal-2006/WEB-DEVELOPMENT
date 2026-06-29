//                                STRING METHODS 

// STRINGS ARE IMMUTABLE

// they are build in functions to manipulate a string
// these return a new value (does not make changes in the original string)


// 1. toUpperCase   ---> make every alphabet to upper Case 
let string = "shaurya singhal";
console.log(string.toUpperCase());



// 2. toLowerCase   ---> make every alphabet to lower case 
string = "SHAURYA SINGHAL";
console.log(str.toLowerCase());



// 3. trim   ---> to remove white spaces (start and end)
string = "       there is whitespace in the starting of this sentence    ";
console.log(string.trim());



// 4. slice(start,end)    ---> return part of string (end value not included)
string = "this is a sentence"; 
console.log(string.slice(3,13));



// 5. concat(str2)  ---> joins string 1 and string 2
string = "SHAURYA";
let string2 = " SINGHAL";
console.log(string.concat(string2));
// we can do this with + also 



// 6. replace(searchval, newval)   ---> replace the old value with the new value in the string
string = "abababababab";
console.log(string.replace("ab","123"));
// replace only one time to erplace all we use another function (replaceAll)
console.log(string.replaceAll("ab","12"));



// 7. charAt   ---> returns the char the the given index
string = "SHAURYA";
console.log(string.charAt(4))