# JavaScript Division by Zero Edge Case Bug

This repository demonstrates a common error in JavaScript: incorrect handling of division by zero. The `myFunction` attempts to divide `a` by `b`, but it fails to correctly handle the case where both `a` and `b` are 0.  The solution demonstrates how to use a `try-catch` block or conditional checks to gracefully handle this situation. 

## Bug

The `bug.js` file contains the faulty function. The function returns 0 when both inputs are 0 which is not mathematically correct. 

## Solution

The `bugSolution.js` file provides a correct implementation that handles the division by zero case.

This demonstrates the importance of comprehensive error handling, especially when dealing with potential division-by-zero errors.