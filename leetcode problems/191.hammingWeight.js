/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let count = 0
    while (n) {
        console.log(n)
        n &= n - 1
        count++
    }
    return count
}

// hammingWeight(0o0000000000000000000000000001011)
// hammingWeight(0o0000000000000000000000010000000)
hammingWeight(11111111111111111111111111111101)