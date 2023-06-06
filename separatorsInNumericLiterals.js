/*You can use underscores within numeric literals to break long literals up into chunks
that are easier to read: */
let billion = 1_000_000_000; // Underscore as a thousands separator.
let bytes = 0x89_AB_CD_EF; // As a bytes separator.
let bits = 0b0001_1101_0111; // As a nibble separator.
let fraction = 0.123_456_789; // Works in the fractional part, too.
/* 
At the time of this writing in early 2020, underscores in numeric literals are not yet
formally standardized as part of JavaScript. But they are in the advanced stages of the
standardization process and are implemented by all major browsers and by Node.
*/

