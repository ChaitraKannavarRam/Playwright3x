const data = require('fs').readFileSync(0, 'utf8');
const str = data.split('\n')[0];
// Write your solution here

// console.log(parseInt(str));
console.log(str.replace(/^0+/, ''));