const data = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const n = data[0];
const arr = data.slice(1, 1 + n);
// Write your solution here

let evenNumbers = arr.filter(x => x % 2 == 0);
let oddNumbers = arr.filter(x => x % 2 == 1);

console.log(`Even Numbers: ${evenNumbers.join(' ')} Odd Numbers: ${oddNumbers.join(' ')}`);