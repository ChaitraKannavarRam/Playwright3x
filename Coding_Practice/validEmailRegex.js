const data = require('fs').readFileSync(0, 'utf8');
const email = data.split('\n')[0];


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (emailRegex.test(email)) {
     console.log("Valid")
} else {
    console.log("Invalid")
}