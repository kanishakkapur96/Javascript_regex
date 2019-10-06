let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\s/;
let result = ohRegex.test(ohStr);

/**
 * You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns.

For example, to match only the letter a appearing between 3 and 5 times in the string "ah", your regex would be /a{3,5}h/.

    let A4 = "aaaah";
    let A2 = "aah";
    let multipleA = /a{3,5}h/;
    multipleA.test(A4); // Returns true
    multipleA.test(A2); // Returns false
 */
