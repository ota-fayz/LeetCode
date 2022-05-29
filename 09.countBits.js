/**
 * @param {number} n
 * @return {number[]}
 */

// function fromDecimalToBinary(n) {
//     let binaries = []
//     let reminder
//     let num = n
//     do {
//         reminder = num % 2
//         num = Math.floor(num / 2)
//         binaries.push(reminder)
//     } while (num !== 0)
//     binaries.reverse()
//     return binaries
// }
//
// function countOnes(arr) {
//     let sumOnes = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 1) {
//             sumOnes += 1
//         }
//     }
//     return sumOnes
// }
//
// var countBits = function (n) {
//     let ans = []
//     for (let i = 0; i <= n; i++) {
//         let binary = fromDecimalToBinary(i)
//         ans.push(countOnes(binary))
//     }
//     console.log(ans)
//     return ans
// }

var countBits = function (n) {
    const ans = [0]
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            ans.push(ans[i - 1] + 1)
        } else {
            ans.push(ans[i / 2])
        }
    }
    return ans
}

countBits(2);
countBits(5);
