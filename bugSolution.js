function myFunction(a, b) {
  if (a === 0 && b === 0) {
    return NaN; // Or throw an error: throw new Error("Division by zero");
  } else if (b === 0) {
    return Infinity; // Or throw an error: throw new Error("Division by zero");
  } else {
    return a / b; 
  }
}

console.log(myFunction(0,0)); // Output: NaN 
console.log(myFunction(10,0)); //Output: Infinity
console.log(myFunction(10,2)); //Output: 5