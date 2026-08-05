const data = require('fs').readFileSync(0, 'utf8');

sides = data.split(" ")
// Write your solution here
if ((sides[0] === sides[1] && sides[0] !== sides[2]) || (sides[2] === sides[1] && sides[1] !== sides[0]) || (sides[2] ===sides[0] && sides[0] !==sides[1]))   console.log("Isosceles");
else if (sides[0] === sides[1] && sides[1]  === sides[2]) console.log("Equilateral");
else console.log("Scalene");


// // 1
// Sample case
// in 5 5 5
// out Equilateral
// 2
// Sample case
// in 5 5 3
// out Isosceles