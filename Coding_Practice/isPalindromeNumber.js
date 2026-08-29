const data = require('fs').readFileSync(0, 'utf8');
let num = parseInt(data.trim(), 10);
let x = num;
// Write your solution here

if (x < 0) { console.log("false") }

else {
    let revnum = 0;

        while (x > 0) {
            let rem = x % 10;
            revnum = (revnum * 10) + rem;
            x = Math.floor(x / 10);
        }
        console.log(revnum === num);