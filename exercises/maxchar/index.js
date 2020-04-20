// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {};
  let max = 0;
  let maxChar = "";
  for (const iterator of str) {
    chars[iterator] = chars[iterator] + 1 || 1;
  }

  for (const key in chars) {
    if (chars[key] > max) {
      max = chars[key];
      maxChar = key;
      chars;
    }
  }

  return maxChar;
}

module.exports = maxChar;
