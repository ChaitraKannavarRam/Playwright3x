const data = require('fs').readFileSync(0, 'utf8');
const str = data.split('\n')[0];
// Write your solution here
if (str.trim().length === 0) {
    console.log("Empty string");
} else {
    console.log(str.trim().split(/\s+/g).length);
}