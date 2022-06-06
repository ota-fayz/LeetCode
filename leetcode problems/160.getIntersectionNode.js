/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

var getIntersectionNode = function (headA, headB) {
    let p1 = headA, p2 = headB

    while (p1 !== p2) {
        if (!p1) {
            p1 = headB
        } else {
            p1 = p1.next
        }

        if (!p2) {
            p2 = headA
        } else {
            p2 = p2.next
        }
    }

    return p1
}

const ll1 = new LinkedList()
const a = new Node(4)
const b = new Node(1)
const c = new Node(8)
const d = new Node(4)
const e = new Node(5)
ll1.head = a
a.next = b
b.next = c
c.next = d
d.next = e

const ll2 = new LinkedList()
const f = new Node(5)
const g = new Node(6)
const h = new Node(1)
const i = new Node(8)
const j = new Node(4)
const k = new Node(5)
ll2.head = f
f.next = g
g.next = h
h.next = i
i.next = j
j.next = k

getIntersectionNode(ll1, ll2)