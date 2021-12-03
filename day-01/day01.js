const fs = require('fs');

const lines = fs
  .readFileSync('day-01.txt', { encoding: 'utf-8' })
  .split('\n')
  .filter((n) => Boolean(n))
  .map((n) => parseInt(n));

// console.log(lines.length);

// let ans = 0;

// for (let i = 1; i < lines.length; i++) {
//   const last = lines[i - 1];
//   const current = lines[i];

//   if (current > last) ans++;
// }

// console.log(ans);

let ans2 = 0;

for (let i = 3; i < lines.length; i++) {
  const last = lines[i - 1] + lines[i - 2] + lines[i - 3];
  const current = lines[i] + lines[i - 1] + lines[i - 2];

  if (current > last) ans2++;
}

console.log(ans2);
