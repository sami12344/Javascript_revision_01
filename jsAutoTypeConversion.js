10 + ' objects' // => "10 objects": Number 10 converts to a string
'7' * '4' // => 28: both strings convert to numbers
let n = 1 - 'x' // n == NaN; string "x" can't convert to a number
n + ' objects' // => "NaN objects": NaN converts to string "NaN"
