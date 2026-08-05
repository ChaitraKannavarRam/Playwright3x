const data = require('fs').readFileSync(0, 'utf8');
// Write your solution here

if ((data % 4 == 0 && data % 100 != 0) || ( data % 400 == 0)) console.log("YES");
else console.log("NO");