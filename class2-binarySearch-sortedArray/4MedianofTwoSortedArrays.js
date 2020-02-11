/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const size1 = nums1.length
  const size2 = nums2.length
  const k = Math.floor((size1 + size2)/2)

  if ((size1 + size2)%2 === 0) {
    // 整除
    return (findKth(nums1, 0, nums2, 0, k) + findKth(nums1, 0, nums2, 0, k + 1))/2
  } else {
    return findKth(nums1, 0, nums2, 0, k + 1)
  }
};

// 坐标B = 坐标A + 数量 - 1
function findKth (A_array, A_start, B_array, B_start, k) {
  if (A_start >= A_array.length) {
    return B_array[B_start + k - 1]
  }

  if (B_start >= B_array.length) {
    return A_array[A_start + k - 1]
  }

  if (k === 1) {
    return Math.min(A_array[A_start], B_array[B_start])
  }

  const mount = Math.floor(k/2)
  // 注意检查越界的情况
  const A_key = A_start + mount - 1 < A_array.length ? A_array[A_start + mount - 1] : Infinity
  const B_key = B_start + mount - 1 < B_array.length ? B_array[B_start + mount - 1] : Infinity

  if (A_key < B_key) {
    // 坐标往右边移一位 + 1，加上 mount 后坐标 -1 抵消了
    // 所有通过个数算坐标的要 -1
    return findKth(A_array, A_start + mount, B_array, B_start, k - mount)
  } else {
    return findKth(A_array, A_start, B_array, B_start + mount, k - mount)
  }
}

console.log(findMedianSortedArrays([1, 3], [2]))
console.log(findMedianSortedArrays([1, 2], [3, 4]))