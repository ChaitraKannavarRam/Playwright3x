//Check whether a number is Even or Odd

const data = require('fs').readFileSync(0, 'utf8').trim();
const number = Number(data);

if (number === '' || !Number.isInteger(number)) {
    console.log('Please enter a valid integer.');
} else if (number % 2 === 0) {
    console.log('Even');
} else {
    console.log('Odd');
}