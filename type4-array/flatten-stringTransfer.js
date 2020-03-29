/**
 * String 转化不会留下 []
 * TODO: 需要转化为数字
 * @param {*} arr 
 */
function flatten (arr) {
  return arr.join(',').split(',').map(item => +item)
}
console.log(flatten([1, 2, [3, [4]]]))