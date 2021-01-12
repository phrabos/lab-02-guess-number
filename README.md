# lab-02-guess-number

## Find a number between 1-20 (including 1 and 20)
## User gets 4 guesses
    - Number of guesses left
## State
    1) Number of guesses left
    2) Secret Number
## Stretch Goals
    1) New Game Button
    2) Track what numbers the user already guessed

# HTML  

    `` <label for="quantity">Quantity (between 1 and 5):</label>
    <input type="number" id="quantity" name="quantity" min="1" max="5"> ``
    - submit button
    - ```<div>``` remaining guesses
    - <div> too high/too low/you got it
    - reset button

# JS
    - Initial State
        - randomNumber = Math.random();
        - guessesRemaining = 4;
    - Add Event Listeners
        - submit
        - reset
            - submit
                - decrement number of guesses
                - store user guess in a variable (Number.(input.value))
                - compare user guess with number
                - update the view
                    - if user guess is > the random number, add " too high" into results <span>
                    - if user guess is < the random number, add " too low" into results <span>
                    - if user guess is = the random number, add " congratulations" into results <span>
                        - disable input if they win