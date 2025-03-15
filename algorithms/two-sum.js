let nums = [2 , 7, 11, 15, 7, 7];

function twoSum(nums, target) {
 let map = new Map();
 for (let i=0;i<nums.length;i++) {
  let comp = target - nums[i];
  if (map.has(comp)) {
    return [map.get(comp), i];
  }
  map.set(nums[i], i);
 }
 return [];
}

console.log(twoSum(nums, 14));