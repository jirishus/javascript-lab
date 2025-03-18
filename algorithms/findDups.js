// given an int array
// return an array of all ints that appear more than once

function findDups(nums) {
  let dups = [];
  for (let i=0;i<nums.length;i++) {
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) {
      dups.push(Math.abs(nums[i]));
    }
    nums[index] = -nums[index];
  }
  return dups;
}

console.log(findDups([1,2,3,4,3,2]));

