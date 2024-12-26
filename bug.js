function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This line is incorrect for the case when both a and b are 0
  } else {
    return a / b; 
  }
}

console.log(myFunction(0,0)); // Output: 0. Should be either an error or a specific value like NaN or Infinity.