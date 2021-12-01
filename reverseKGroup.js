const reverseKGroup = (head, k) => {
  let count = 0;
  let ptr = head;

  while (count < k && ptr) {
    ptr = ptr.next;
    count++;
  }

  if (count === k) {
    let reversed = reverseLinkedList(head, k);
    head.next = reverseKGroup(ptr, k);
    return reversed;
  }

  return head;
};

const reverseLinkedList = (head, k) => {
  let dummy = new ListNode(null);
  let ptr = head;
  while (k > 0) {
    let nextNode = ptr.next;
    ptr.next = dummy;
    dummy = ptr;
    ptr = nextNode;
    k--;
  }
  return dummy;
};
