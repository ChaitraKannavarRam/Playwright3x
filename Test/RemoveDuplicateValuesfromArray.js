const input = require('fs').readFileSync(0, 'utf8').trim();

const numbers = input ? input.split(/\s+/).map(Number) : [];


if (numbers.length === 0 || numbers.some(Number.isNaN)) {
    console.log('Please enter valid numbers.');
} else {
    let seen =[];
    numbers.forEach(i=> {
        if( !seen.includes(i)){
            seen.push(i);
        }
    }
        )
            console.log(seen);
}