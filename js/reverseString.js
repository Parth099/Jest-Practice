//recursive
function _resverseString(str) {
  if (str.length < 2) {
    return str;
  }
  return resverseString(str.substr(1)) + str[0];
}

function resverseString(str) {
  if (typeof str !== "string") {
    return undefined;
  }
  return _resverseString(str);
}

module.exports = resverseString;
