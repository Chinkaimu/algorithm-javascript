/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/
 * @param {number[]} prices
 * @return {number}
 * 思路： 
 *  * 升序则卖，求最大两者的和
 *  * 存在降序的情况下，两者求和会比单次大。可以假设参数 x y 等进行描述
 */
// var maxProfit = function(prices) {
//   // 分别是 1 次和 2 次的最大收益。 max1 > max2
//   let max1 = 0
//   let max2 = 0

//   // max 单独 1 次时最大收益
//   let max = 0

//   // 每一轮的当前最小值
//   let curMin = prices[0]
//   // 全局最小值
//   let min = prices[0]

//   for (let i = 1; i < prices.length; i++) {
//     // 当前轮的最大值
//     if (prices[i] > curMin) {
//       if (prices[i] > prices[i - 1] || (i + 1) === prices.length) {
//         let current = prices[i] - curMin
//         // 3 个数取大的两个
//         if (current > max1) {
//           // 需要将 max 移动到 max2 先
//           max2 = max1
//           max1 = current
//         } else if (current > max2) {
//           max2 = current
//         }
//       } else {
//         curMin = prices[i]
//       }
//     } else if (prices[i] < curMin){
//       curMin = prices[i]
//     }

//     if (prices[i] < min) {
//       min = prices[i]
//     } else if (prices[i] > min) {
//       max = Math.max(prices[i] - min, max)
//     }

//     console.log('max = ' + max + ' ; max1 = ' + max1 + ' ; max2 = ' + max2)
//     if (max >= (max1 + max2)) {
//       max1 = max
//       max2 = 0
//       console.log('inner max = ' + max + ' ; max1 = ' + max1 + ' ; max2 = ' + max2)
//     }
//   }

//   return max1 + max2
// };

// console.log(maxProfit([1,2,3,4,5,6]))
// console.log(maxProfit([5,3,2]))
// console.log(maxProfit([]))

var maxProfit = function(prices) {
  // 分别是 1 次和 2 次的最大收益。 max1 > max2
  let max1 = 0
  let max2 = 0

  // 当前最小值
  let min = prices[0]
  
  // 如果一次 transaction 的最大值
  const max = maxProfitOnce(prices)

  for (let i = 1; i < prices.length; i++) {
    // 当前轮的最大值
    if (prices[i] > min) {
      if (((i + 1) < prices.length && prices[i] > prices[i + 1]) || (i + 1) === prices.length) {
        let current = prices[i] - min
        if (i === 5) {
          console.log('price[i]', prices[i])
          console.log('min', min)
          console.log('current', current)
        }
        // 3 个数取大的两个
        if (current > max1) {
          // 需要将 max 移动到 max2 先
          max2 = max1
          max1 = current
        } else if (current > max2) {
          max2 = current
        }

        if (i === 5) {
          console.log('max11', max1)
          console.log('max21', max1)
        }
        if (max[i] >= (max1 + max2)) {
          max1 = max[i]
          max2 = 0
        }

        if (i === 5) {
          console.log('max1', max1)
        }

        min = prices[i + 1]
        i++
      }
    } else if (prices[i] < min){
      min = prices[i]
    }
  }

  return max1 + max2
};

var maxProfitOnce = function(prices) {
  let currentMinprice = prices[0]
  let currentMaxProfit = [0]

  prices.forEach((price, index) => {
    if (price < currentMinprice) {
      currentMinprice = price
    } else if (price > currentMinprice) {
      if (index > 0) {
        currentMaxProfit[index] = Math.max(price - currentMinprice, currentMaxProfit[index - 1])
      }
    }
  })

  return currentMaxProfit
};

var maxProfit = function(prices) {
  var firstBuy = Number.NEGATIVE_INFINITY;
  var firstSell = 0;
  var secondBuy = Number.NEGATIVE_INFINITY;
  var secondSell = 0;

  for (var i = 0; i < prices.length; i++) {
      if (secondBuy + prices[i] > secondSell) {
          secondSell = secondBuy + prices[i];
      }
      if (firstSell - prices[i] > secondBuy) {
          secondBuy = firstSell - prices[i];
      }
      if (firstBuy + prices[i] > firstSell) {
          firstSell = firstBuy + prices[i];
      }
      if (0 - prices[i] > firstBuy) {
          firstBuy = 0 - prices[i]
      }
  }
  
  return secondSell;
};

console.log(maxProfit([1,2,4,2,5,7,2,4,9,0]))
