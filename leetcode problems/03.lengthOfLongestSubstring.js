/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   const arr = s.split("");
//   let count = 0;
//   const map = new Map();
//
//   if (s === " ") return 1;
//
//   for (let i = 0; i < arr.length; i++) {
//     if (!map.get(s[i])) {
//       map.set(s[i], s[i]);
//     } else {
//       if (map.size > count) {
//         count = map.size;
//         i -= map.size;
//         map.clear();
//       } else {
//         i -= map.size;
//         map.clear();
//       }
//     }
//   }
//
//   if (map.size > count) count = map.size;
//   return count;
// };

var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let count = 0;
  let j = 0;

  for (let i in s) {
    while (set.has(s[i])) {
      set.delete(s[j - 1]);
      j--;
    }
    j++;
    set.add(s[i]);
    count = Math.max(count, i + 1);
  }
};

// lengthOfLongestSubstring("abcabcbb");
// lengthOfLongestSubstring("bbbbb");
// lengthOfLongestSubstring("pwwkew");
// lengthOfLongestSubstring("c");
// lengthOfLongestSubstring("aab");
// lengthOfLongestSubstring("dvdf");
// lengthOfLongestSubstring("anviaj");
lengthOfLongestSubstring("jbpnbwwd");
