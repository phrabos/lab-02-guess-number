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
let guessesRemaining = 4;
let secretNumber = Math.ceil(Math.random() * 20)
// console.log(`this is the secret number ${secretNumber}`)

// set event listeners to update state and DOM
submitButton.addEventListener("click", () => {
    --guessesRemaining
    guessesRemainingSpan.textContent = guessesRemaining;
    resultsParagraph.classList.remove("hidden");

    let numberGuess = numberGuessInput.value;
    let someNum = compareNumbers(numberGuess, secretNumber);
 
    if(someNum === 1){
        resultsSpan.textContent = "too high";
    } else if (someNum === -1) {
        resultsSpan.textContent = "too low"
    } else {
        winLoseParagraph.classList.remove("hidden");
        resultsParagraph.classList.add("hidden");
        winLoseSpan.textContent = "Congratulations, you win!!!"
    } 

    if(guessesRemaining === 0){
        winLoseParagraph.classList.remove("hidden");
        resultsParagraph.classList.add("hidden");
        winLoseSpan.textContent = "GAME OVER, YOU LOSE!!!";
        submitButton.disabled = true;
    }
})

resetButton.addEventListener("click", () => {
    guessesRemaining = 4;
    guessesRemainingSpan.textContent = guessesRemaining;
    numberGuessInput.value="";
    resultsParagraph.classList.add("hidden");
    secretNumber = Math.ceil(Math.random() * 20);
    submitButton.disabled = false;
})
