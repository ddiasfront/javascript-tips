class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const reverseLinkedList = (head) => {
  let current = head;
  let previous = null;
  while (current !== null) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
};

const reversed = reverseLinkedList(a);

const printLinkedList = (head) => {
  //POINTER
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
};

printLinkedList(reversed);
// LEET CODE VERSION
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;
  for (let i = 1; i < left; i++) {
    prev = prev.next;
  }
  let curr = prev.next;
  // +---+
  // | 2 |
  // +---+
  //   |ß
  //   V
  // +---+    +---+    +---+    +---+
  // | 3 | -> | 4 | -> | 5 | -> |null|n
  // +---+    +---+    +---+    +---+

  //start reverting
  for (let i = left; i < right; i++) {
    let next = curr.next;
    // +---+    +---+    +---+    +---+
    //NEXT    // | 3 | -> | 4 | -> | 5 | -> |null|
    // +---+    +---+    +---+    +---+
    curr.next = next.next;
    // +---+
    // | 2 | // CURRENT
    // +---+
    //   |
    //   V     //NEXT.NEXT
    // +---+    +---+    +---+    +---+
    // | 3 | -> | 4 | -> | 5 | -> |null|
    // +---+    +---+    +---+    +---+

    // +---+
    // | 2 | // CURRENT
    // +---+
    //   |
    //   V     //NEXT.NEXT
    // +---+    +---+    +---+    +---+
    // | 4 | -> | 4 | -> | 5 | -> |null|
    // +---+    +---+    +---+    +---+

    next.next = prev.next;

    prev.next = next;
  }
  return dummy.next;
};
