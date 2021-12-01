/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

const mergeKLists = (lists) => {
  if (lists === [] || lists === [[]]) return [];
  let dummy = new ListNode(0);
  let point = dummy;
  let nodes = [];
  for (let list of lists) {
    while (list) {
      nodes = [...nodes, list.val];
      list = list.next;
    }
  }
  nodes.sort((a, b) => a - b);
  for (let node of nodes) {
    point.next = new ListNode(node);
    point = point.next;
  }
  return dummy.next;
};
