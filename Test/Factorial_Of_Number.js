const data = require('fs').readFileSync(0, 'utf8').trim();

if(data === '' || !Number.isInteger(Number(data)) || Number(data) < 0) {
    console.log('Please enter a valid non-negative integer.');
} else if(Number(data) === 0 || Number(data) === 1) {
    console.log(1);
}

else {
    const number = Number(data);

    let factorial = 1;

    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }

    console.log(factorial);
}