// import functions and grab DOM elements
import { compareNumbers, logic, showResParagraph, updateRemainingGuesses, resetGame } from "./utils.js";
const numberGuessInput = document.getElementById("number-guess");
const submitButton = document.getElementById("submit-button");
const resetButton = document.getElementById("reset-button");
const gameStrings = ["too high", "too low", "Congrats, you Win!!!", "You Lose, GAME OVER, Go Home!"]

// initialize state
export let guessesRemaining = [4];
export let secretNumber = [Math.ceil(Math.random() * 20)]

// set event listeners to update state and DOM
submitButton.addEventListener("click", () => {
    --guessesRemaining[0];
    updateRemainingGuesses();
    showResParagraph();

    let numberGuess = Number(numberGuessInput.value);
    let someNum = compareNumbers(numberGuess, secretNumber[0]);

    logic(someNum,gameStrings[0], gameStrings[1], gameStrings[2], gameStrings[3]);
    if(guessesRemaining[0] === 0){submitButton.disabled = true};
})

resetButton.addEventListener("click", () => {
    resetGame();
    numberGuessInput.value="";
    submitButton.disabled = false;
})