import { guessesRemaining, secretNumber } from "./app.js";
const resultsParagraph = document.getElementById("results");
const winLoseParagraph = document.getElementById("win-lose");
const winLoseSpan = document.getElementById("win-lose-span");
const resultsSpan = document.getElementById("results-span")
const guessesRemainingSpan = document.getElementById("remaining-guesses");

export function compareNumbers(guess, correctNumber) {
    if(guess > correctNumber){
        return 1;
    } else if(guess < correctNumber) {
        return -1;
    }else {
        return 0;
    }
}

export function logic (resultAsInteger, stringHigh, stringLow, stringWin, stringLose) {
    if(resultAsInteger === 1) {
        resultsSpan.textContent = stringHigh;
    } else if (resultAsInteger === -1) {
        resultsSpan.textContent = stringLow;
    } else {
        winLoseParagraph.classList.remove("hidden");
        resultsParagraph.classList.add("hidden");
        winLoseSpan.textContent = stringWin;
    }
    if(guessesRemaining[0] === 0){
        showWinLosePargraph();
        hideResParagraph();
        winLoseSpan.textContent = stringLose;
       
    }
}
export function resetGame (){
    guessesRemaining[0] = 4;
    updateRemainingGuesses();
    secretNumber[0] = Math.ceil(Math.random() * 20);
    hideResParagraph();
    hideWinLoseParagraph();
}

export function showResParagraph(){
    resultsParagraph.classList.remove("hidden");
}
export function hideResParagraph(){
    resultsParagraph.classList.add("hidden");
}
export function showWinLosePargraph(){
    winLoseParagraph.classList.remove("hidden");
}
export function hideWinLoseParagraph(){
    winLoseParagraph.classList.add("hidden")
}
export function updateRemainingGuesses(){
    guessesRemainingSpan.textContent = guessesRemaining[0];
}