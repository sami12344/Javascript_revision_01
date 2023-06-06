Infinity // A positive number too big to represent
Number.POSITIVE_INFINITY // Same value
1 / 0 // => Infinity
Number.MAX_VALUE * 2 // => Infinity; overflow

-Infinity // A negative number too big to represent
Number.NEGATIVE_INFINITY // The same value
-1/0 // => -Infinity
-Number.MAX_VALUE * 2 // => -Infinity
NaN // The not-a-number value
Number.NaN // The same value, written another way
0/0 // => NaN
Infinity/Infinity // => NaN
Number.MIN_VALUE/2 // => 0: underflow
-Number.MIN_VALUE/2 // => -0: negative zero
-1/Infinity // -> -0: also negative 0
-0
// The following Number properties are defined in ES6
Number.parseInt() // Same as the global parseInt() function
Number.parseFloat() // Same as the global parseFloat() function
Number.isNaN(x) // Is x the NaN value?
Number.isFinite(x) // Is x a number and finite?
Number.isInteger(x) // Is x an integer?
Number.isSafeInteger(x) // Is x an integer -(2**53) < x < 2**53?
Number.MIN_SAFE_INTEGER // => -(2**53 - 1)
Number.MAX_SAFE_INTEGER // => 2**53 - 1
Number.EPSILON // => 2**-52: smallest difference between numbers