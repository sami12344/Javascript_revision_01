let a = ['a', 'b', 'c'] // An array we want to copy
let b = [] // A distinct array we'll copy into
for (let i = 0; i < a.length; i++) {
  // For each index of a[]
  b[i] = a[i] // Copy an element of a into b
}
let c = Array.from(b) // In ES6, copy arrays with Array.from()
