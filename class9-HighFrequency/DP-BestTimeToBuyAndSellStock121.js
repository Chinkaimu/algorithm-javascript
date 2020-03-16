/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 * 思路：最小买进，在最小点后面的最大卖出
 * 记录当前位置之前最小的点，以及最大的收益。
 * 如果碰到更小的点，将它替代当前最小点，继续往后走，如果收益增大则记录更大收益。点仍然是最小点不变。
 */
var maxProfit = function(prices) {
  let currentMinprice = prices[0]
  let currentMaxProfit = 0

  prices.forEach(price => {
    if (price < currentMinprice) {
      currentMinprice = price
    } else if (price > currentMinprice) {
      currentMaxProfit = Math.max(price - currentMinprice, currentMaxProfit)
    }
  })

  return currentMaxProfit
};

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))