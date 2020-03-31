/**
 * 插入排序
 *   如果 a[j] > a[j + 1]，就把后面大的数替换到前面去。
 *   外循环： 1 -> arr.length 需要向前插入，找相应的位置
 *   内循环： (i - 1) -> 0 递减，前面的数大就要替换到后面去。没有更大了则停止循环。
 */
function insertSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
    }
  }

  return arr;
}

console.log(insertSort([]))
console.log(insertSort([3]))
console.log(insertSort([3,1]))
console.log(insertSort([3,1,4,2,6,1,3]))