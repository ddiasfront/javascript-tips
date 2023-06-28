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
var reverseList = function (head) {
  let current = head;
  let reversedLinkedList = null;
  while (current != null) {
    const next = current.next; //2-3-4-5 // 3-4-5
    current.next = reversedLinkedList; // null <- 1 // 2->1->null
    reversedLinkedList = current; // null <- 1 //  2->1->null
    current = next; // 3-4-5
  }
  return reversedLinkedList;
};
