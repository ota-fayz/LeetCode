/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
    words.sort((a, b) => a.length - b.length)

    let dp = []
    let max = 1

    for (let i = 0; i < words.length; i++) dp[i] = 1

    for (let i = 1; i < words.length; i++) {
        for (let j = 0; j < i; j++) {
            if (isPredecessor(words[j], words[i])) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
                max = Math.max(max, dp[i])
            }
        }
    }

    return max
}

function isPredecessor(word1, word2) {
    for (let i = 0; i < word2.length; i++) {
        if (word1 === word2.substring(0, i) + word2.substring(i + 1, word2.length)) return true
    }

    return false
}

longestStrChain(["a", "b", "ba", "bca", "bda", "bdca"])
longestStrChain(["xbc", "pcxbcf", "xb", "cxbc", "pcxbc"])
longestStrChain(["abcd", "dbqca"])
