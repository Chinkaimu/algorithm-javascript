/**
 * use Set
 * @param {*} arr 
 */
function duplicateRemove1 (arr) {
  return Array.from(new Set(arr))
}

function duplicateRemove2 (arr) {
  return arr.reduce ((accumulator, current) => {
    return accumulator.includes(current) ?
      accumulator : [...accumulator, current]
  }, [])
}

console.log(duplicateRemove2([2,3,4,5,5,6,8]))