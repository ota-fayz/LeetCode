/**
 * @param {number} n
 * @return {string[][]}
 */

const formatBoard = board => {
    let result = []

    for (let col = 0; col < board.length; col++) {
        let newRow = new Array(board.length).fill(".")
        newRow[board[col]] = "Q"
        result.push(newRow.join(""))
    }

    return result
}

var solveNQueens = function (n) {
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
    return result.map(board => formatBoard(board))
}

const ans1 =solveNQueens(4)
const ans2 =solveNQueens(2)
console.log(ans2)
