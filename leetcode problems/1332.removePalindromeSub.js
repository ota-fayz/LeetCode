/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function (s) {
  return s === s.split("").reverse().join("") ? 1 : 2;
};

removePalindromeSub("ababa");
removePalindromeSub("abb");
removePalindromeSub("baabb");
