// // brute force o(n^2) TC o(1) SC
// const getIntersectionNode = (headA, headB) => {
//   while (headA) {
//     let dummy = headB;
//     while (dummy) {
//       if (headA === dummy) {
//         return headA;
//       }
//       dummy = dummy.next;
//     }
//     headA = headA.next;
//   }
//   return null;
// };

// // using sets o(n) TC o(n) SC
// const getIntersectionNode = (headA, headB) => {
//   let nodesB = new Set();
//   while (headB) {
//     nodesB.add(headB);
//     headB = headB.next;
//   }
//   while (headA) {
//     if (nodesB.has(headA)) return headA;
//     headA = headA.next;
//   }
//   return null;
// };

// even less space, fast o(n) TC o(n) SC
const getIntersectionNode = (headA, headB) => {
  let pA = headA;
  let pB = headB;
  while (pA != pB) {
    pA = pA ? pA.next : headB;
    pB = pB ? pB.next : headA;
  }
  return pA;
};
