const data = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const n = data[0];
const arr = data.slice(1, 1 + n);
// Write your solution here

if (n == 0) console.log("Array is empty");
else{

min = arr[0];
arr.forEach(num => {
    if (num < min) min = num;
});
console.log(min);
};