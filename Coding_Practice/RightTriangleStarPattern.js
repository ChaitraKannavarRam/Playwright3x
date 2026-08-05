const data = require('fs').readFileSync(0, 'utf8');
const n = parseInt(data.trim(), 10);
// Write your solution here
for (let i = 1; i <= n; i++){
    let stars = "";
    for (let j = 1; j <= i; j++){
        stars += "*";
    }
    console.log(stars);
}