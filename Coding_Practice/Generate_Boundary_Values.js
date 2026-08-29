const lines = String(require('fs').readFileSync(0, 'utf8')).split('\n');
const rows = lines.filter(l => l.length > 0);
let values = rows[0].split(' ');
// Write your solution here
// console.log(values[1])
if (parseInt(values[0]) > parseInt(values[1])) console.log("INVALID");
else {
    let min = parseInt(values[0]), max = parseInt(values[1]);
    console.log(min - 1, min, min + 1, max - 1, max, max + 1);
}


// Read pairs of minimum and maximum values and generate the six boundary values a tester would try for each range: just below the minimum, the minimum, just above it, then just below the maximum, the maximum and just above it. If the minimum is greater than the maximum the range is nonsense, so print INVALID for that line.

// Example 1
// Input
// 1 10
// Output
// 0 1 2 9 10 11