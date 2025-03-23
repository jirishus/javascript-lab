/**
 * Naive approach
 */

function merge(nums1, m, nums2, n) {
  for (let i=0;i<n;i++) {
    nums1[i + m] = nums2[i];
  }

  // sort nums1
  nums1.sort((a,b) => (a - b));
  return nums1;
}

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))