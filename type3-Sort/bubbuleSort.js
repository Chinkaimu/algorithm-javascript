/**
 * 冒泡排序：
 *   【内循环】每次冒泡找到最大（升序最小）的数往前走；
 *   【外循环】需要找 arr.length 次
 */
function bubbleSort (arr) {
  
  // 外循环从 0 -> arr.length 递增
  for (let i = 0; i < arr.length; i++) {
    // 内循环
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }

  return arr;
}

console.log(bubbleSort([3,1,4,2,6,1,3]))