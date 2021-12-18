function capitalize(str) {
  if (typeof str !== "string") {
    return undefined;
  }
  if (str.length > 0) {
    capCharCode = str.charCodeAt(0);
    if (capCharCode > 95 && capCharCode < 123) {
      capCharCode -= 32;
      str = String.fromCharCode(capCharCode) + str.substring(1);
    }
  }
  return str;
}

module.exports = capitalize;
