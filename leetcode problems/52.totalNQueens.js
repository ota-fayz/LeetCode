/**
 * @param {number} n
 * @return {number}
 */

var totalNQueens = function (n) {
    // global result
    const result = []

    function dfs(i, slate) {
        let lastQ = i - 1

        for (let prevQ = 0; prevQ < lastQ; prevQ++) {
            if (slate[prevQ] === slate[lastQ]) return

            let rowDiff = Math.abs(prevQ - lastQ)
            let colDiff = Math.abs(slate[prevQ] - slate[lastQ])

            if(rowDiff === colDiff) return
        }
        if (i === n) {
            result.push(slate.slice())
            return
        }

        for (let col = 0; col < n; col++) {
            slate.push(col)
            dfs(i + 1, slate)
            slate.pop()
        }
    }

    dfs(0, [])
    return result.length
}

const ans = totalNQueens(4)
console.log(ans)
