const input = require('fs').readFileSync(0, 'utf8').trim();

if (!/^\d+$/.test(input)) {
    console.log('Please enter a valid non-negative integer.');
} else {
    const number = Number(input);
    let a = 0, b = 1, nextTerm;

    if (number === 0) {
        console.log('Please enter the nonzero number.');
    } else if (number === 1) {
        console.log(b);
    } else {
        let series = [a, b];
        for (let i = 2; i < number; i++) {
            nextTerm = a + b;
            series.push(nextTerm);
            a = b;
            b = nextTerm;
        }
        console.log(series.join(' '));
    }
}   