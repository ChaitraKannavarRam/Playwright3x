// Line 1 gives the expected field count k and line 2 gives the number of rows n, followed by n comma-separated rows. For each row i (1-based), print "Row i: OK" if splitting the row on commas yields exactly k fields, otherwise print "Row i: BAD". Empty values still count as fields (so "a,b," has 3 fields).

// Example 1
// Input
// 3
// 3
// TC01,Login,PASS
// TC02,Search
// TC03,Checkout,FAIL
// Output
// Row 1: OK
// Row 2: BAD
// Row 3: OK


const input = require('fs').readFileSync(0, 'utf8');
const lines = input.split('\n');
const expected = parseInt(lines[0], 10);
const n = parseInt(lines[1], 10);


let output = [];
for (let i = 2; i <= n+1; i++){
    if (lines[i].split(',').length == expected) console.log(`Row ${i - 1}: OK`);
    else console.log(`Row ${i - 1}: BAD`);
}
