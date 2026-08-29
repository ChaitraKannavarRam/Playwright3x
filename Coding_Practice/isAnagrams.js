const data = require('fs').readFileSync(0, 'utf8');
const lines = data.split('\n');
let s1 = (lines[0] || '');
let s2 = (lines[1] || '');


s1 = s1.toLowerCase().split('').sort().join('')
s2 = s2.toLowerCase().split('').sort().join('');
if (s1 === s2)
    console.log("YES");
else
    console.log("NO");