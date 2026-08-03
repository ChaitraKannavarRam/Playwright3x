const data = require('fs').readFileSync(0, 'utf8');
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);

// Write your solution here
let duplicateMap = new Map();

arr.forEach(num => duplicateMap.set(num, (duplicateMap.get(num) || 0) + 1));

let result = [];
duplicateMap.forEach((count, num)=>{
    if (count > 1) result.push(num);
});

for (let i = result.length - 1; i >= 0; i--){
    console.log(result[i]);
}