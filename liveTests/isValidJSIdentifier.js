function isValidJsBasicsIdentifier(name) {

  let key = ["let", "const", "var", "class", "function", "return"]

  let clean = name.trim();
  if (key.includes(clean)) return false;
  else {
    let reg = /^[a-zA-Z_$]+[a-zA-Z_$0-9]+$/;
    if (reg.test(name)) return true;
    else return false;
  }
}

isValidJsBasicsIdentifier('1login')