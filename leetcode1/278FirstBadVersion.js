/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    if(n === 0) return -1;

    let start = 1
    let end = n
    let mid

    while(start + 1 < end) {
      mid = parseInt(start + (end - start)/2)
      if (isBadVersion(mid)) {
        end = mid
      } else {
        start = mid
      }
    }

    if (isBadVersion(start)) return start
    if (isBadVersion(end)) return end

    return -1
  };
};

function isBadVersion (version) {
  if (version >= 1) {
    return true
  }
  return false
}

console.log(solution(isBadVersion)(100))

