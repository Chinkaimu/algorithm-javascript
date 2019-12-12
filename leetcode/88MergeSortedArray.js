/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 
 */
var merge = function(nums1, m, nums2, n) {
  if(m === 0 && n > 0) {
    nums1.splice(0,nums2.length,...nums2);
  }

  let validLen = m;

  for(let i = 0; i < validLen; i++) {
    if(nums2.length <= 0) break;

    if(nums2[0] <= nums1[i]) {
      nums1.splice(i,0,nums2.shift());
      nums1.pop();
      validLen++;
    }

    // 如果大于最后一个有效值，则直接整个数组替代。
    if((nums2[0] > nums1[i] && (i+1 === validLen || undefined === nums1[i+1]))) {
      // splice 的指定开始位置超过长度则会从末尾添加
      nums1.splice(i+1, nums2.length, ...nums2);
      nums2.length = 0;
    }
  }
  console.log(nums1);
};

merge([1,2,3,0,0,0],3,[2,5,6],3);
merge([0],0,[1],1);
merge([1,2,3,4,5],3,[6],1);
merge([-1,0,0,3,3,3,0,0,0],6,[1,2,2],3);
