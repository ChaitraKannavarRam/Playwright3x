const data = require('fs').readFileSync(0, 'utf8');
const n = parseInt(data.trim(), 10);

// Write your solution here
for (let i = n; i >= 1; i--) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}