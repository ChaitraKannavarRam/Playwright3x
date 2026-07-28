// The first line contains an integer n, followed by n log lines. Print the number of log lines that contain the substring "ERROR" (case-sensitive).

// Example 1
// Input
// 5
// 2026-07-01 INFO Server started
// 2026-07-01 ERROR Connection refused
// 2026-07-01 WARN Slow response
// 2026-07-01 ERROR Timeout waiting for page
// 2026-07-01 INFO Test finished
// Output
// 2

const input = require('fs').readFileSync(0, 'utf8');
const lines = input.split('\n');
const n = parseInt(lines[0], 10);

// Write your solution here
let errorCount = 0;
for (let i = 1; i <= n; i++){
    if (lines[i].includes("ERROR")) {
        errorCount += 1;
    }
}
console.log(errorCount);
