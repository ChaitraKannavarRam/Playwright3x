function filterSupportedJsBasicsTopics(topics) {
  // write your code here
  for (let i in topics) {
    topics[i] = topics[i].trim().toLowerCase();
  }

  let canonical = ["npm", "node", "v8"];
  let answer = [];

  for (let k in topics) {
    if(canonical.includes(topics[k]) && !answer.includes(topics[k])) answer.push(topics[k])
  }
  console.log(answer)
  return answer;

}

filterSupportedJsBasicsTopics(["node","runtime","node"])
