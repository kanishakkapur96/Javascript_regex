let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
/**
 * In an earlier challenge, you used the caret character (^) inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is used to search for patterns at the beginning of strings.

    let firstString = "Ricky is first and can be found.";
    let firstRegex = /^Ricky/;
    firstRegex.test(firstString);
    // Returns true
    let notFirst = "You can't find Ricky now.";
    firstRegex.test(notFirst);
    // Returns false
 *
 */
