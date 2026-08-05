const data = require('fs').readFileSync(0, 'utf8');
const str = data.split('\n')[0].toLowerCase();
// Write your solution here

let isPalindrome = true;

for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
        isPalindrome = false;
        break; // Stop immediately on mismatch
    }
}

console.log(isPalindrome ? "YES" : "NO");