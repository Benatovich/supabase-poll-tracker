// IMPORT MODULES under test here:
import { renderPoll } from '../render-utils.js';

const test = QUnit.test;

test('renderPoll(poll) should render a poll', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderPoll(poll);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
