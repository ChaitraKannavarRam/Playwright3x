const data = require('fs').readFileSync(0, 'utf8');
const str = data.split('\n')[0];

const reverseString = str.split('').reverse().join('');

console.log(reverseString);