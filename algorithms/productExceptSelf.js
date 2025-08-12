/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // empty array as our result
    const result = [];
    let prefix = 1;
    let suffix = 1;

    // Loop input array - for each position
    // result array should equal prefix tracker

    // Then, update the prefix tracker to be the product of itself,
    // multiplied by the input value at the position
    for (let i=0;i<nums.length;i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    // loop backwards through the array
    // for each iteration, set the result array to be
    // the product of itself multiplied by the suffix tracker

    // then, update the suffix tracker to be the product of itself,
    // multiplied by the input value at that position
    for (let i=nums.length - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }
    
    return result;
};