const caesarCipher = require("../js/caesarCipher");
const cc = caesarCipher();

//encrypt
test("n = 1E, abced --> bcdef", () => expect(cc.encrypt("abcde", 1)).toEqual("bcdef"));
test("n = 10E, jest --> tocd", () => expect(cc.encrypt("jest", 10)).toEqual("tocd")); //tests for wrap
test("n = 25E, abcedxyz --> zabdcwxy", () => expect(cc.encrypt("abcedxyz", 25)).toEqual("zabdcwxy"));
test("n = 1E, zyx --> azy", () => expect(cc.encrypt("zyx", 1)).toEqual("azy"));
test("n = 18E, car go fast --> usj yg xskl", () => expect(cc.encrypt("car go fast", 18)).toEqual("usj yg xskl"));
test("n = 53E, xyzab --> yzabc", () => expect(cc.encrypt("xyzab", 53)).toEqual("yzabc")); //overflow

//decrypt
test("n = 9E, yqxwn arwp --> phone ring", () => expect(cc.decrypt("yqxwn arwp", 9)).toEqual("phone ring"));
test("n = 17E, drkyvdrkztrc --> mathematical", () => expect(cc.decrypt("drkyvdrkztrc", 17)).toEqual("mathematical"));
