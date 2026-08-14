const data = require('fs').readFileSync(0, 'utf8');
const str = data.split('\n')[0];

if (str.length== 0 ) { console.log("Empty string"); }

let result = "";
let seen = "";

for (let i = 0; i < str.length; i++){
    if (!seen.includes(str[i]) ) {
        result += str[i];
    } 
        seen += str[i];
    
}
console.log(result);

// let withoutDuplicate = new Set(str);
//  let uniqeChar = [...withoutDuplicate].join("");

// console.log(uniqeChar);


