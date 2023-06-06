1234n // A not-so-big BigInt literal
0b111111n // A binary BigInt
0o7777n // An octal BigInt
0x8000000000000000n // => 2n**63n: A 64-bit integer
/*You can use BigInt() as a function for converting regular JavaScript numbers or
strings to BigInt values:
*/
BigInt(Number.MAX_SAFE_INTEGER) // => 9007199254740991n
let string = "1" + "0".repeat(100); // 1 followed by 100 zeros.
BigInt(string) // => 10n**100n: one googol
/*
Arithmetic with BigInt values works like arithmetic with regular JavaScript numbers,
except that division drops any remainder and rounds down (toward zero):
*/
1000n + 2000n // => 3000n
3000n - 2000n // => 1000n
2000n * 3000n // => 6000000n
3000n / 997n // => 3n: the quotient is 3
3000n % 997n // => 9n: and the remainder is 9
(2n ** 131071n) - 1n // A Mersenne prime with 39457 decimal digits