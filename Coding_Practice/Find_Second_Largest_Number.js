const data = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const n = data[0];
const arr = data.slice(1, 1 + n);
// Write your solution here

// const uniqueArray = [...new Set(arr)];
// uniqueArray.sort((a, b) => (b - a));

// console.log(uniqueArray[1]);


function secondLargest(arr) {
    if (arr.length < 2) {
        return -Infinity;
    }

    let first = -Infinity, second = -Infinity;
    for (const v of arr) {
        if (v > first) {
            second = first;
            first = v;
        } else if (v > second && v !== first) {
            // v is between first and second, or equal to first (skipped)
            second = v;
        }
    }
    return second;
}

console.log(secondLargest(arr));