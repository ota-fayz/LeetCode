/**
 * @param {number[]} target
 * @return {boolean}
 */
const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

var isPossible = function (target) {
  let pq = new MaxPriorityQueue({ priority: (x) => x }),
    sum = 0;
  for (let num of target) (sum += num), pq.enqueue(num);
  while (pq.front().element !== 1) {
    let num = pq.dequeue().element;
    sum -= num;
    if (num <= sum || sum < 1) return false;
    (num %= sum), (sum += num), pq.enqueue(num || sum);
  }
  return true;
};

const ans = isPossible([9, 3, 5]);
console.log(ans);
