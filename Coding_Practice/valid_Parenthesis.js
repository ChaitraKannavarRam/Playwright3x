const data = require('fs').readFileSync(0, 'utf8');
const s = data.split('\n')[0];
// Write your solution here
var isValid = function (s) {
    // An odd length string can never be valid
    if (s.length % 2 !== 0) return false;

    const stack = [];
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        // If it is a closing bracket
        if (bracketMap[char]) {
            // Pop the top element from the stack (or use a dummy value if empty)
            const topElement = stack.pop();

            // If the popped bracket doesn't match the required opening bracket
            if (topElement !== bracketMap[char]) {
                return false;
            }
        } else {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }

    // If the stack is empty, all brackets were matched correctly
    return stack.length === 0;
};

console.log(isValid(s))