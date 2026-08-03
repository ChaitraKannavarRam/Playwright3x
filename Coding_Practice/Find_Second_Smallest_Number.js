const data = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const n = data[0];
const arr = data.slice(1, 1 + n);
// Write your solution here

const uniqueArray = [...new Set(arr)];
uniqueArray.sort((a, b) => (a - b));

console.log(uniqueArray[1]);