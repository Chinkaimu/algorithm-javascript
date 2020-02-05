function searchPosition (array, target) {
  if (array.length === 0) {
    return [-1, -1]
  }

  return [binarySearchFirst(array, target), binarySearchLast(array,target)]
}

function binarySearchFirst (array, target) {
  let start = 0;
  let end = array.length - 1;
  let mid;

  while (start + 1 < end) {
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
    return start;
  }

  if (array[end] === target) {
    return end;
  }

  return -1;
}

function binarySearchLast (array, target) {
  let start = 0;
  let end = array.length - 1;
  let mid;

  while (start + 1 < end) {
    mid = parseInt(start + (end - start)/2);
    if (array[mid] === target) {
      start = mid;
    } else if (array[mid] < target) {
      start = mid;
    } else if (array[mid] > target) {
      end = mid;
    }
  }

  if (array[end] === target) {
    return end;
  }

  if (array[start] === target) {
    return start;
  }

  return -1;
}

// console.log(searchPosition([],9))
// console.log(searchPosition([0,1,1],1))
// console.log(searchPosition([1,1,1,1,2,3],1))
// console.log(searchPosition([5,7,7,8,8,8,8,10],8))
// console.log(searchPosition([5,7,7,8,8,8,8,10],11))


console.log(binarySearchLast([5, 7, 7, 8, 8], 7))