// create a function using that takes a string as an argument and returns the number of vowels in the string 

function countVowels(str){
    let count = 0 ;
    for(let i = 0 ; i < str.length ; i++){
        if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
            count++;
        }
    }
    console.log(`the number of vowels in the string are => ${count}`);
}

let str = "shaurya";
countVowels(str);


// create an arrow function perform the same task

const vowelCount = (str) => {
    let count = 0 ;
    for(let i = 0 ; i < str.length ; i++){
        if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
            count++;
        }
    }
    console.log(`the number of vowels in the string are => ${count}`);
}

str = "hello";
vowelCount(str);
