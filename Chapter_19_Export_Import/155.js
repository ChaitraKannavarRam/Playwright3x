// import { BASE_URL, formatUpperCaseString } from './testutil.js';

// console.log(BASE_URL);

// let result = formatUpperCaseString("Pramod");
// console.log(result);

// // console.log(fname);

const steps = ["open", "fill"]; const alias = steps; steps.push("submit"); console.log("fail fail".replace("fail", "pass"));


let passCount = 0, failCount = 0, skipCount = 0, time = 0;
let failedNames = [];
function resultGenerator(tests) {

  for (let i of  tests) {
    if (i["status"] == 'passed') passCount += 1;
    if (i["status"] == 'failed') {
      failCount += 1; failedNames.push(i["name"]);
    }
    if (i["status"] == 'skipped') skipCount += 1; 
    time += i["durationMs"];
  
  }

console.log(`Total Steps: ${tests.length} Passed: ${passCount} Failed: ${failCount}, Skipped: ${skipCount}, Total Duration: ${time} Failed Steps: ${failedNames}`)
  
}

let results = [{ name: "open login", status: "passed", durationMs: 400 }, { name: "fill form", status: "failed", durationMs: 700 }, { name: "submit", status: "skipped", durationMs: 0 }]
resultGenerator(results)


let output = [];
function Users(names, roles) { 

  for (let i in names) {
    let name = names[i].trim().toLowerCase().split(" ").join('_');
    let value = `username: ${name} , email: ${name+"@playwrightbatch.com"}, role: ${roles[i]}`    ;
    output.push({value})
}

  console.log(output);

}

let names = ["Amit Kumar", "Neha Singh"], roles = ["admin", "viewer"]
Users(names,roles)