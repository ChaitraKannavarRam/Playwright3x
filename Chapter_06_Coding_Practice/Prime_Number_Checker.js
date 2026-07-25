// Write a program to check if a given number is prime. A prime number is only divisible by 1 and itself.


const data = require('fs').readFileSync(0, 'utf8');
const num = parseInt(data.trim(), 10);

if(num<0){console.log("non prime")}
let squareRoot = Math.round(Math.sqrt(num));
let isPrime = "YES";
for (let i = 2; i <= squareRoot; i++){
    if (num % i == 0) {
        isPrime = "NO";
        break;
    }
}
console.log(isPrime);