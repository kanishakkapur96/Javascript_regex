let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);
/**
 * To search or extract a pattern more than once, you can use the g flag.

    let repeatRegex = /Repeat/g;
    testStr.match(repeatRegex);
    // Returns ["Repeat", "Repeat", "Repeat"]
 */
