// prompt the user to enter full name . Generate a username for them based ib the imput start username with @, followed by their fullname and ending with the fullname length 

let fullName = prompt("enter yourfull name :");
let size = fullName.length;

console.log(`@${fullName}${size}`);