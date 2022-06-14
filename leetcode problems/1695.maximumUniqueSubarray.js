/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (A) {
    let n = A.length;
    let max = A[0];

    let set = new Set();
    let sum = 0;
    for (let left = 0, right = 0; right < n; right++) {
        if (set.has(A[right])) {
            while (A[left] !== A[right]) {
                set.delete(A[left]); //       1(L) 2(L) 3    4    5 6 3(R)
                sum -= A[left];
                left++;
            }
            set.delete(A[left]); //           1    2    3(L) 4    5 6 3(R)
            sum -= A[left];
            left++;
        }
        set.add(A[right]); //                 1    2    3    4(L) 5 6 3(R)
        sum += A[right];
        max = Math.max(max, sum);
    }

    return max;
};

maximumUniqueSubarray([4, 2, 4, 5, 6])
// maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5])
// maximumUniqueSubarray([187,470,25,436,538,809,441,167,477,110,275,133,666,345,411,459,490,266,987,965,429,166,809,340,467,318,125,165,809,610,31,585,970,306,42,189,169,743,78,810,70,382,367,490,787,670,476,278,775,673,299,19,893,817,971,458,409,886,434])

