/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false

    return parseInt(x.toString().split("").reverse().join("")) === x
};

isPalindrome(121)
isPalindrome(-121)
isPalindrome(10)