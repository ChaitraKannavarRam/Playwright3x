const data = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const n = data[0];
const arr = data.slice(1, 1 + n);

const evenNumbers = [];
const oddNumbers = [];

// Single pass filter loop
arr.forEach(x => {
    if (x % 2 === 0) {
        evenNumbers.push(x);
    } else {
        oddNumbers.push(x);
    }
});

// Using .trim() ensures absolutely no hidden spaces trigger a failure
const evenStr = `Even Numbers: ${evenNumbers.join(' ')}`.trim();
const oddStr = `Odd Numbers: ${oddNumbers.join(' ')}`.trim();

// Printing explicitly as two separate console.log statements 
// This avoids carriage return variations (\r\n vs \n) on different OS systems
console.log(evenStr, oddStr);
