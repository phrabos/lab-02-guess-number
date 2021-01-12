// import functions and grab DOM elements
import { compareNumbers } from "./utils.js";
const guessesRemainingSpan = document.getElementById("remaining-guesses");
const resultsParagraph = document.getElementById("results");
const resultsSpan = document.getElementById("results-span")
const winLoseParagraph = document.getElementById("win-lose");
const winLoseSpan = document.getElementById("win-lose-span");
const numberGuessInput = document.getElementById("number-guess");
const submitButton = document.getElementById("submit-button");
const resetButton = document.getElementById("reset-button");


// initialize state
let guessesRamaining = 4;
let secretNumber = Math.ceil(Math.random() * 20)
console.log(`this is the secret number ${secretNumber}`)

// set event listeners to update state and DOM
submitButton.addEventListener("click", () => {
    --guessesRamaining
    guessesRemainingSpan.textContent = guessesRamaining;
    resultsParagraph.classList.remove("hidden");
    // numberGuessInput.value = '';
    let numberGuess = numberGuessInput.value;
    let someNum = compareNumbers(numberGuess, secretNumber);
    console.log(someNum);
    if(someNum === 1){
        resultsSpan.textContent = "too high";
    } else if (someNum === -1) {
        resultsSpan.textContent = "too low"
    } else {
        winLoseParagraph.classList.remove("hidden");
        resultsParagraph.classList.add("hidden");
        winLoseSpan.textContent = "Congratulations, you win!!!"
    }
  console.log(numberGuess)  
})

resetButton.addEventListener("click", () => {
    
})
