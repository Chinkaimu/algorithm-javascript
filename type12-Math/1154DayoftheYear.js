/**
 * https://leetcode.com/problems/day-of-the-year/
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
  // TODO: 待优化，这里直接使用月份占年份中的天数
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const dates = date.split('-');

  const isLeap = isLeapYear(Number(dates[0]));

  let result = 0;

  // TODO: 加上已过去月份的天数，这里要减去 1
  for (let i = 0; i < (Number(dates[1]) - 1); i++) {
    result += daysInMonth[i];
  }

  // TODO: 3 月之后才要加 2 月份的数
  Number(dates[1]) > 2 && isLeap && result++;

  result += Number(dates[2]);

  return result;
};

function isLeapYear (year) {
  if (year % 100 === 0) {
    return year % 400 === 0;
  }

  return year % 4 === 0;
}

module.exports = dayOfYear;