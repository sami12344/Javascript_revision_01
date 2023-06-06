let zero = 0 // Regular zero
let negz = -0 // Negative zero
zero === negz // => true: zero and negative zero are equal
1 / zero === 1 / negz // => false: Infinity and -Infinity are not equal
