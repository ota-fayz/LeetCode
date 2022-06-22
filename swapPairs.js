/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

var swapPairs = function (head) {
  let first, second;

  if (!head || !head.next) return head;

  first = head.next;
  second = head.next.next;
  first.next = head;
  head.next = swapPairs(second);

  return first;
};

const ll = new LinkedList();
const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
ll.head = a;
a.next = b;
b.next = c;
c.next = d;
swapPairs(ll.head);
