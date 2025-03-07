var search = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
      let mid = Math.floor((start + end)/2)
      if (nums[mid] < target) {
          start = mid + 1;
      } else if (nums[mid] > target) {
          end = mid - 1;
      } else {
          return mid;
      }
  }

  return -1;
};

console.log(search([-1,0,3,5,9,12], 9));
console.log(search([-1,0,3,5,9,12], 2));