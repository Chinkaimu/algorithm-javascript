/**
 * 11:02 - 12:55 (1h)
 * design+coding: 11:02 - 11:18(16)
 * TODO: 输入的 month 是 1 - 12 不要与 Date.getMonth() 搞混淆
 * day 1- 31; month 1 - 12; year: 1971 - 2100
 * 1971.1.1 Sunday
 *    每 7 天一个轮回，1、8、15 是相同的 (n - start)%7 = 0 Sunday 开始
 *    问题转换为离 1971 年是多少天
 *    年  ->  天； 月 --> 天； 日 --> 天
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
  if (year < 1971 || year > 2100) {
    throw new Error('Year should between 1971 - 2100');
  }

  if (month < 1 || month > 12) {
    throw new Error('Month should between 1 - 12');
  }

  if (day < 1 || day > 31) {
    throw new Error('Month should between 1 - 31');
  }

  // TODO: 中间存在的润年，每年加 1。 从第一个闰年 1972 年开始，4年一闰。所以先减去1971年1年，然后减 1972，算有几个闰年。 （5 - 2）/4 = 1   1 （2） 3 4 5 （6） 7 8 9 （10） 11 （12）
  let dayOfYears = (year - 1971) * 365 + Math.floor((year - 1 - 1972) / 4);

  const daysInMonths = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
  let dayOfMonths = daysInMonths[month - 1];  // 计算上个月的数据
  if (month > 2 && isLeapYear(year)) {
    dayOfMonths++;
  }

  const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  // 1971年1月1日星期五。日期加 5。如果下标去减，可能会超出范围
  let days = dayOfYears + dayOfMonths + day + 5;

  return weeks[days%7];
};

function isLeapYear (y) {
  return y % 400 === 0 || (y % 100 !== 0 && y % 4 === 0)
}

/**
 * Test Case
 * 1. 存在哪些变量，会导致不同的结果
 *    * 是否闰年
 *    * 年份（1971 - 2010）、月份（1-12）、天（1-31）
 * 2. 每个变量的不同边界取值、特殊值
 */