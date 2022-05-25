/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0
    let temp
    let min = Infinity
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
        } else {
            temp = Math.abs(prices[i] - min)
        }
        if (temp > profit) {
            profit = temp
        }
    }
    return profit
}

maxProfit([7, 1, 5, 3, 6, 4])
maxProfit([7, 6, 4, 3, 1])
