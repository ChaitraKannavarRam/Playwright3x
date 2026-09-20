function summarizeJsBasicsResults(lines) {
  // write your code here

  let PassCount=0,FailCount=0, skipCount=0;
for (let i in lines) {
    if (lines[i].includes("pass")){
        PassCount += 1;
    }
  if (lines[i].includes("fail")){
        FailCount += 1;
    }
  if (lines[i].includes("skip")){
        skipCount += 1;
    }
}
  let n = lines.length;

  let answer = { "passed": PassCount,"failed":FailCount, "skipped": skipCount, "total":n}
return answer
}

summarizeJsBasicsResults(["login-pass","api-fail","profile-skip"]);