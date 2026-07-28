const lines = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const n = parseInt(lines[0], 10);

// Lines 1..n are '<testId> PASS' or '<testId> FAIL'. Print:
// Total: <n> / Passed: <x> / Failed: <y> / Pass Rate: <z>%
let PassCount=0,FailCount=0;
for (let i =1; i <= n; i++) {
    if (lines[i].endsWith("PASS")){
        PassCount += 1;
    }
    if (lines[i].endsWith("FAIL")){
        FailCount += 1;
    }
}
let passRate = Math.round((PassCount / n )* 100);
console.log(`Total: ${n} Passed: ${PassCount} Failed: ${FailCount} Pass Rate: ${passRate}%`)