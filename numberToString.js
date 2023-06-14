let n = 123456.789
n.toFixed(0) // => "123457"
n.toFixed(2) // => "123456.79"
n.toFixed(5) // => "123456.78900"
n.toExponential(1) // => "1.2e+5"
n.toExponential(3) // => "1.235e+5"
n.toPrecision(4) // => "1.235e+5"
n.toPrecision(7) // => "123456.8"
n.toPrecision(10) // => "123456.7890"


