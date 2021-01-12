// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { compareNumbers } from "../utils.js";

const test = QUnit.test;

test('if guess is 7 & correctNumber 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(7,3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if guess is 1 & correctNumber 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(1,3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('if guess is 3 & correctNumber 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(3,3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});