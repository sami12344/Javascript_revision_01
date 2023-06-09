/*
Value to String to Number to Boolean
undefined "undefined" NaN false
null "null" 0 false
true "true" 1
false "false" 0
"" (empty string) 0 false
"1.2" (nonempty, numeric) 1.2 true
"one" (nonempty, non-numeric) NaN true
0 "0" false
-0 "0" false
1 (nite, non-zero) "1" true
Infinity "Infinity" true
-Infinity "-Infinity" true
NaN "NaN" false
{} (any object) see §3.9.3 see §3.9.3 true
[] (empty array) "" 0 true
[9] (one numeric element) "9" 9 true
['a'] (any other array) use join() method NaN true
function(){} (any function) see §3.9.3 NaN true
*/