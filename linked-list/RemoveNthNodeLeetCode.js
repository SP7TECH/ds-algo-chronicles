/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function findKthFromEnd(head, n) {
  if (!head) return null;

  let fast = head;
  let slow = head;
  let prev = null;

  for (let i = 0; i < n; i++) {
    if (!fast) return null;
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    prev = slow;
    slow = slow.next;
  }

  return { slow, prev };
}

var removeNthFromEnd = function (head, n) {
  const dummyHeadNode = new ListNode(0);
  dummyHeadNode.next = head;

  let { slow, prev } = findKthFromEnd(head, n);

  console.log(slow, prev);

  if (!prev) {
    return head.next;
  } else {
    console.log(prev.next.next, slow.next);
    prev.next = prev.next.next;
    slow.next = null;
  }

  return head;
};
