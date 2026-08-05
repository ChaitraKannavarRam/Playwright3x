const data = require('fs').readFileSync(0, 'utf8');
const n = parseInt(data.trim(), 10);
// Write your solution here
let space = " ";
let stars = "*";
for (let i = 1; i <= n; i++) {
    let space = " ";
    let stars = "*";
    space = space.repeat(n - i);
    stars = stars.repeat(2 * i - 1);
    let result = space.concat(stars);
    console.log(result)
}