// https://leetcode.com/problems/shuffle-an-array/
/**
 * @param {number[]} nums
 */

// random swap
class Solution {
  constructor(nums) {
      this.nums = nums;
  }
  
  reset(){
      return this.nums;
  }
  
  shuffle() {
      const res = [...this.nums];
      const n = this.nums.length;
      for (let i=0; i<n; i++) {
          const targetIdx = Math.floor(n * Math.random());
          [res[targetIdx], res[i]] = [res[i], res[targetIdx]] ;
      }
      return res;
  }
}

var Solution = function(nums) {
  this.data = Array.from(nums);
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.data;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  const tempData = [...this.data];
  const len = this.data.length;
  const result = [];

  let random;
  let count = 0;
  while (count++ < len) {
    random = Math.floor(Math.random() * len);

    if (tempData[random] === null) {
      let left = random - 1;
      let right = random + 1;
      while (left >= 0 || right < len) {
        // TODO: undefined not equal, control left and right doesn't overstep the boundary
        if (left >= 0 && tempData[left] !== null) {
          random = left;
          break;
        }

        if (right < len && tempData[right] !== null) {
          random = right;
          break;
        }

        left--;
        right++;
      }
    }

    result.push(tempData[random]);
    tempData[random] = null;
  }

  return result;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

const obj = new Solution([[1,2,3,4,5,6,7,8,9,10]])
console.log(obj.shuffle());
