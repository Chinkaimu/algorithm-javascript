/**
 * Given a sorted array of n integers, find the starting and ending 
 * position of a given target value. If the target is not found in
 * array, return [-1,-1]
 * Example given [5,7,7,8,8,10] and target value 8, return [3,4]
 * @param {*} array 
 * @param {*} target 
 */
function searchPosition(array, target) {
  if (array.length === 0) {
    return [-1,-1];
  }

  let start = 0;
  /** initial value is 5 */
  let end = array.length - 1;
  let mid;

  while (start+1 < end) {
    /**initial value is 2*/
    mid = parseInt(start + (end - start)/2);
    if (array[mid] === target) {
      end = mid;
    } else if (array[mid] < target) {
      start = mid;
    } else if (array[mid] > target) {
      end = mid;
    }
  }

  if (array[start] === target) {
    end = start;
    for (let i = start+1; i < array.length; i++) {
      if (array[i] === target) {
        end = i;
        // if we check the last position, return
        if (i === array.length - 1) {
          return [start, end];
        }
      } else if (array[i] !== target) {
        return [start, end];
      }
    }
  }

  if (array[end] === target) {
    start = end;
    for (let i = end+1; i < array.length; i++) {
      if (array[i] === target) {
        end = i;
        // if we check the last position, return
        if (i === array.length - 1) {
          return [start, end];
        }
        // if we find the unequal value , return
      } else if (array[i] !== target) {
        return [start, end];
      }
    }
  }

  return [-1, -1];
}

console.log(searchPosition([],9))
console.log(searchPosition([0,1,1],1))
console.log(searchPosition([1,1,1,1,2,3],1))
console.log(searchPosition([5,7,7,8,8,8,8,10],8))
console.log(searchPosition([5,7,7,8,8,8,8,10],11))