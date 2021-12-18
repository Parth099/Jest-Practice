function caesarCipher() {
  function encrypt(S, k) {
    encrypted = "";
    let charCode;
    for (let i of S) {
      charCode = i.charCodeAt();
      if (charCode > 96 && charCode < 123) {
        charCode = ((charCode - 97 + k) % 26) + 97;
        encrypted += String.fromCharCode(charCode);
      } else if (charCode > 64 && charCode < 91) {
        charCode = ((charCode - 65 + k) % 26) + 65;
        encrypted += String.fromCharCode(charCode);
      } else {
        encrypted += i;
      }
    }
    return encrypted;
  }
  function decrypt(S, k) {
    return encrypt(S, 26 - (k % 26));
  }

  return { encrypt, decrypt };
}

module.exports = caesarCipher;
