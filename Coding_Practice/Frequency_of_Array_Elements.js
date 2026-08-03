const data = require('fs').readFileSync(0, 'utf8');
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);

// Write your solution here
if (n == 0) console.log("Array is empty");
freqMap = new Map();

arr.forEach(num => freqMap.set(num, (freqMap.get(num) || 0)+1)) ;

freqMap.forEach((count, num) => {
        console.log(`${num} appears ${count} times`)
});