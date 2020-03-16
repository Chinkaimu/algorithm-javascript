/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 * @param {number[]} prices
 * @return {number}
 * 思路：
 *    * 低点买入，遇到下一个低点前的高点就卖，然后重新买；
 *    * 重新设置低点
 */
var maxProfit = function(prices) {
  let sumProfit = 0
  // 当前这次买入的最大可卖出价值
  let currentMaxProfit = 0
  let currentMinPrice = prices[0]

  for (let i = 1; i < prices.length; i++) {
    // 比前面的最低点低，则设置为最低点
    if (prices[i] < currentMinPrice) {
      currentMinPrice = prices[i]
      continue
    }

    // 如果比当前最高点高，将其设置为此轮最大收益点
    if ((prices[i] - currentMinPrice) > currentMaxProfit) {
      currentMaxProfit = prices[i] - currentMinPrice
    }

    // 下一个将会是低点 或者 最后一个点，卖出。然后下一轮最大可卖出价值初始化为 0，下一轮最低点是 prices[i + 1]，跳过下一个点的判断。它已经是最低点了。
    if (((i + 1) < prices.length && prices[i] > prices[i + 1])) {
      sumProfit += currentMaxProfit
      currentMaxProfit = 0
      currentMinPrice = prices[i + 1]
      i++
    }
    
    // 最后一个点直接卖出
    if((i + 1) === prices.length) {
      sumProfit += currentMaxProfit
    }
  }

  return sumProfit
};


var maxProfit1 = function(prices) {
  let maxProfit = 0
  for (let i = 1; i < prices.length; i++) {
      // 只要后面的价格比前面的高就买进、卖出
      if (prices[i] > prices[i - 1]) {
          maxProfit += prices[i] - prices[i - 1]
      }
  }
  return maxProfit
};

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([1,2,3,4,5]))