const input = require('fs').readFileSync(0, 'utf8').trim();

if (!/^\d+$/.test(input)) {
    console.log('Please enter a valid non-negative integer.');
} else{
    const number = Number(input);
    let isPrime = true;

    if (number <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    console.log(isPrime ? 'true' : 'false');    
}