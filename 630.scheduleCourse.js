/**
 * @param {number[][]} courses
 * @return {number}
 */
const {MaxPriorityQueue} = require("@datastructures-js/priority-queue")


var scheduleCourse = function (courses) {
    courses.sort((a, b) => a[1] - b[1])
    let total = 0, pq = new MaxPriorityQueue()

    for (let [dur, end] of courses) {
        if (dur + total <= end) {
            total += dur
            pq.enqueue(dur)
        } else if (pq.front() && pq.front().element > dur) {
            total += dur - pq.dequeue().element
            pq.enqueue(dur)
        }
    }
    return pq.size()
}

scheduleCourse([[100, 200], [200, 1300], [1000, 1250], [2000, 3200]])