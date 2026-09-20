function countPassingJsBasicsChecks(results) {
  // write your code here
  let count = 0;
  let reg = /pass|PASS+/g;
  for (let i in results) {
    if (results[i].includes("pass") || results[i].includes("PASS")) count += 1;
  }
  console.log(count)
  return count;

}

countPassingJsBasicsChecks(["SETUP PASS","CONFIG PASS"])
