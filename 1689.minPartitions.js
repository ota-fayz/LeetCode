/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  let max = -Infinity;

  for (let i = 0; i < n.length; i++) {
    max = Math.max(max, Number(n[i]));
  }

  return max;
};

minPartitions("32");
minPartitions("82734");
minPartitions("27346209830709182346");
