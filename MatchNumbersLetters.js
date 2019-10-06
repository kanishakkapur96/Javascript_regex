let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

/**
 * For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.

Also, it is possible to combine a range of letters and numbers in a single character set.

    let jennyStr = "Jenny8675309";
    let myRegex = /[a-z0-9]/ig;
    // matches all letters and numbers in jennyStr
    jennyStr.match(myRegex);
 */
