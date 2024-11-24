'beginner evaluation from ChatGPT';

function basicCalculator(x, y, operator) {
    let result;

    if (operator === '+') {
        result = x + y;
    } else if (operator === '-') {
        result = x - y;
    } else if (operator === '*') {
        result = x * y;
    } else if (operator === '/') {
        result = y !== 0 ? x / y : "cannot divide by zero";
    } else {
        return "invalid operator";
    }

    return result;
}

// Test cases
console.log(basicCalculator(5, 3, '+')); // Output: 8
console.log(basicCalculator(5, 3, '-')); // Output: 2
console.log(basicCalculator(5, 3, '*')); // Output: 15
console.log(basicCalculator(5, 0, '/')); // Output: "cannot divide by zero"
console.log(basicCalculator(5, 3, '^')); // Output: "invalid operator"
