// craete a game where you start with any random number .Ask the user to keep guessing the game number untill the user enters correct value 

let gameNumber = 36;
let userNumber;

userNumber = prompt("ENTER A NUMBER :");

while(userNumber != gameNumber){
    userNumber = prompt("GUESS AGAIN :");
}

console.log("YOU GUESSED IT !!!");