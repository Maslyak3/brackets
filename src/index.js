module.exports = function check(str, bracketsConfig) {
  let bracketCount = 0;
  for (i = 0; i <= str.length; i++) {
    if (i === "(" || i === '[') {
      result = bracketCount++
    }
    else {
      result = bracketCount--
    }
  }
  if (result === 0) {
    return true
  }
  else {return false}

}
