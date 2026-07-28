const data = require('fs').readFileSync(0, 'utf8');
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);


if (arr.length == 0) console.log("Array is empty.");
let max = arr[0];
for (let i = 1; i < arr.length; i++){
    if (arr[i] > max) max = arr[i];
}
console.log(max)