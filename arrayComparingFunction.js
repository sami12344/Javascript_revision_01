function equalArrays(a, b) {
 if (a === b) return true; // Identical arrays are equal
 if (a.length !== b.length) return false; // Different-size arrays not equal
 for(let i = 0; i < a.length; i++) { // Loop through all elements
 if (a[i] !== b[i]) return false; // If any differ, arrays not equal
 }
 return true;
}