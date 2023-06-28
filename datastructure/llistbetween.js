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
  //0
  let dummy = new ListNode();
  console.log(dummy);
  //0-1-2-3-4-5
  dummy.next = head;
  console.log(dummy);
  //0-1-2-3-4-5
  let previous = dummy;
  //0-1-2-3-4-5
  console.log(previous);

  for (let i = 1; i < left; i++) {
    previous = previous.next;
  }
  let current = previous.next;
  // console.log(current)
  //2-3-4-5 || 2-4-5
  for (let i = left; i < right; i++) {
    //3-4-5 || 4-5
    let next = current.next;
    //2-4-5 || 2-5
    current.next = next.next;
    //3-> 2-3-4-5 || 4-3-2-4-5 and here is the final modification to the linked list  itself.
    next.next = previous.next;
    //3-2-3-4-5
    previous.next = next;
  }
  return dummy.next;
};
