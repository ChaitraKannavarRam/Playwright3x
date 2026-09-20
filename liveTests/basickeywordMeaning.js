function getJsBasicsKeywordMeaning(term) {
  // write your code here
  let map = {
    "node": "runtime",
    "v8": "engine",
    "npm": "package-manager",
     "not-a-topic" : "unknown"
  };

  let cleaned = term.trim().toLowerCase();
  console.log(map[cleaned]);
  return map[cleaned];
}

getJsBasicsKeywordMeaning("NODE");