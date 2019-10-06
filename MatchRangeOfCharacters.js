let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex);
/**
 * Inside a character set, you can define a range of characters to match using a hyphen character: -.

For example, to match lowercase letters a through e you would use [a-e].

    let catStr = "cat";
    let batStr = "bat";
    let matStr = "mat";
    let bgRegex = /[a-e]at/;
    catStr.match(bgRegex); // Returns ["cat"]
    batStr.match(bgRegex); // Returns ["bat"]
    matStr.match(bgRegex); // Returns null
 */
