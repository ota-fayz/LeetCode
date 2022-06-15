/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
  const sortArr = words.sort((a, b) => a.length - b.length);
  const map = new Map();
  map.set(sortArr[0], sortArr[0]);

  for (let i = 1, j = 2; i < sortArr.length - 1; i++) {
    let p1 = sortArr[i],
      p2 = sortArr[j];

    if (p1.length === Array.from(map.values()).pop().length + 1) {
      for (let i = 0; i < p1.length; i++) {
        const newStr = p1.slice(0, i) + p1.slice(i + 1);
        if (Array.from(map.values()).pop() === newStr) {
          map.set(p1, p1);
          break;
        }
      }
    }

    if (p2.length === Array.from(map.values()).pop().length + 1) {
      for (let i = 0; i < p2.length; i++) {
        const newStr = p2.slice(0, i) + p2.slice(i + 1);
        if (Array.from(map.values()).pop() === newStr) {
          map.set(p1, p1);
          break;
        }
      }
    }

    j++;
  }
  console.log(map);
};

longestStrChain(["a", "b", "ba", "bca", "bda", "bdca"]);
// longestStrChain(["xbc", "pcxbcf", "xb", "cxbc", "pcxbc"]);
// longestStrChain(["abcd", "dbqca"]);
