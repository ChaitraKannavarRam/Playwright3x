// Find the Largest of 3 Numbers.

const  data = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

if (
    data.length !== 3 ||
    data.some(number => !Number.isInteger(number))
) {
    console.log('Please enter exactly 3 valid integers.');
} else {
    console.log(Math.max(...data));
}