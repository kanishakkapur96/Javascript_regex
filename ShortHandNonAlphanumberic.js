let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
/**
 * You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].

    let shortHand = /\W/;
    let numbers = "42%";
    let sentence = "Coding!";
    numbers.match(shortHand); // Returns ["%"]
    sentence.match(shortHand); // Returns ["!"]
 */
