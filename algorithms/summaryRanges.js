function summaryRanges(nums) {
  const result = [];
  let left = nums[0];

  for (let i = 1; i <= nums.length; i++) {
    if ((nums[i - 1] + 1) !== nums[i]) {
      left === nums[i - 1] ? result.push(`${left}`) : result.push(`${left}->${nums[i - 1]}`);
    };
  };
  return result;
}