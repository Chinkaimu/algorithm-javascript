/**
 * 11:02 - 
 * design+coding: 11:02 - 11:18(16)
 * 
 * day 1- 31; month 0 - 11; year: 1971 - 2100
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

  if (month < 0 || month > 11) {
    throw new Error('Month should between 0 - 11');
  }

  if (day < 1 || day > 31) {
    throw new Error('Month should between 1 - 31');
  }
    
  const weeks = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let days = 0;
  let dayOfYears = 0;
  for (let y = 1971; y < year; y++) {
    if ( isLeapYear(y) ) {
      dayOfYears += 366;
    } else {
      dayOfYears += 365;
    }
  }

  let dayOfMonths = 0;
  const dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (let m = 0; m < month; m++) {
    dayOfMonths += dayInMonth[m];
    if (m === 1 && isLeapYear(year)) {
      dayOfMonths++;
    }
  }

  days = dayOfYears + dayOfMonths + day;
  if (month === 1 && isLeapYear(year)) {
    days++;
  }
  return weeks[days%7];
};

function isLeapYear (y) {
  return (y % 100 === 0 && y % 400 === 0) || (y % 100 !== 0 && y % 4 === 0)
}

/**
 * Test Case
 * 1. 存在哪些变量，会导致不同的结果
 * 2. 每个变量的不同边界取值
 */