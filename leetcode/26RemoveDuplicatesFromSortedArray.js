/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length <= 1) return nums.length;
    for(let i = 1; i < nums.length + 1 ; i++) {
        if(nums[i] === nums[i-1]) {
            nums.splice(i, 1)
            i--;
        }
    }
    return nums;
};

/**
 * 参考解法
 * @param {} nums 
 */
var removeDuplicates = function(nums) {
    const size = nums.length;
    let slowP = 0;
    for (let fastP = 0; fastP < size; fastP++) {
        if (nums[fastP] !== nums[slowP]) {
            slowP++;
            nums[slowP] = nums[fastP]
        }
    }
    return slowP + 1;
};

console.log(removeDuplicates([]));
console.log(removeDuplicates([1]));
console.log(removeDuplicates([0,1,1,2,2,3,4]));
console.log(removeDuplicates([0,1,1,1,1,1,2,3,4]));
console.log(removeDuplicates([0,1,2,3,4]));


/**
 * 【总结】
 * 1. 使用splice操作，在i点进行splice则需要进行length-i次赋值。每次重复都需要这么多次赋值。
 *    splice是强大的位置操作，可以对当前数组进行删除、插入、替换。需要区分数组的slice操作，它是基于当前数组创建一个新数组。
 * 2. 参考答案的方法是找到不想等的值，然后在后面添加，可以想像成2个数组在操作，只不过在操作当前数组而已。赋值次数是length-1。
 * 3. 2种方法进行比较，第1种方法对于其他没有数组splice操作的语言还要自己写splice方法，不具备通用性。
 * 4. 测试用例要考虑低临界点，也要考虑高零界点。
 */