/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var storageObject = {};
  for (var i =0;i<nums.length;i++){
      if(storageObject[nums[i]]!==undefined){
          console.log([storageObject[nums[i]], i]);
      }
      else{
          storageObject[target - nums[i]] = i;
      }
  }
};
twoSum([3,4,5,8], 10);