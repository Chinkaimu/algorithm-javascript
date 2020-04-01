/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 * 思考方向： 求长度方法。give the first place find the last place; the first place continue.
 *  sum[i][j] = sum[j] - sum[i], sum[i][j] >= s means sum[j] - sum[i] >= s.
 *  sum[j] >= sum[i] + s，length = j - i + 1。 according the s[i] + s, find the first place that >= s[j]. calculate the length
 *  transfer to Binary Search
 * 
 */
var minSubArrayLen = function(s, nums) {
  if (!nums || !nums.length) return 0;

  let minSofar = Number.MAX_SAFE_INTEGER;
  const sums = new Array(nums.length + 1);
  sums[0] = 0;

  // 求和
  for (let i = 1; i <= nums.length; i++){
  // sums[1] = sum[0] + nums[0]
    sums[i] = sums[i - 1] + nums[i - 1];
  }

  for (let i = 0; i < nums.length; i++) {
    let pos = binarySearch(sums, sums[i] + s, i + 1, nums.length)
    if (pos > nums.length) continue;
    // 长度 pos - i
    minSofar = Math.min(minSofar, pos - i)
  }

  return minSofar === Number.MAX_SAFE_INTEGER ? 0 : minSofar;
}

function binarySearch (sums, target, start, end ) {
  while (start <= end) {
    mid = Math.floor((start + end)/2);

    if (target > sums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start;
}

console.log(minSubArrayLen(4, [2,3,1,2,4,3]))