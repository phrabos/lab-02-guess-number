// import functions and grab DOM elements
const guessesRemainingSpan = document.getElementById("remaining-guesses");
const resultsParagraph = document.getElementById("results");
const winLoseParagraph = document.getElementById("win-lose");
const winLoseSpan = document.getElementById("win-lose-span");
const numberGuess = document.getElementById("number-guess");
const submitButton = document.getElementById("submit-button");
const resetButton = document.getElementById("reset-button");


// initialize state
let guessesRamaining = 4;
let secretNumber = Math.ceil(Math.random() * 20)
// let secretNumber = 5;

// set event listeners to update state and DOM