const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n').filter(Boolean);

const moduleMap = new Map();
for (const line of input) {
    const [name, status] = line.split('|');
    const counts = moduleMap.get(name) || [0, 0];
    if (status === 'PASS') counts[0]++;
    else counts[1]++;
    moduleMap.set(name, counts);
}

const sorted = [...moduleMap.entries()].sort((a, b) => a[0] > b[0] ? 1 : -1);

for (const [module, [pass, fail]] of sorted) {
    const total = pass + fail;
    const rate = pass / total * 100; // handles total > 0
    // Round-half-up to 2 decimals:
    const rounded = Math.floor(rate * 100 + 0.5) / 100;
    console.log(module + ' ' + rounded.toFixed(2));
}