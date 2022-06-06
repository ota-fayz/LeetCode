/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

class Node {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
}

var hasCycle = function (head) {
    let slow = head
    let fast = head

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next

        if (slow === fast) return true
    }

    return false
}

const ll = new LinkedList()
const a = new Node(3)
const b = new Node(2)
const c = new Node(0)
const d = new Node(-4)
ll.head = a
a.next = b
b.next = c
c.next = d
// d.next = b
console.log(hasCycle(ll.head))

// console.dir(ll, { depth: null });

