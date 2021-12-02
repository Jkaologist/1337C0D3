// // worst case O(n)
// const findPeakElement = (nums) => {
//   if (nums.length < 2) return -1;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > nums[i - 1] && nums[i] < nums[i + 1]) {
//       return i;
//     }
//   }
// };

const findPeakElement = (nums) => {
  let r = nums.length - 1;
  let l = 0;
  while (l < r) {
    let m = Math.floor((r + l) / 2);
    if (nums[m] > nums[m + 1]) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  return l;
};
