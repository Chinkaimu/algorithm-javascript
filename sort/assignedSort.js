let oldArray = ["A","B","C","D"]
let newArray = ["B","A","D","C"]
let newArray1 = ["B","D","A","C"]
let newArray2 = ["C","D","A","B"]
let newArray3 = ["D","C","B","A"]

function assignedSorted(oldArray, newArray) {
  let maxMountedIndex = 0;

  for (let i = 0; i < newArray.length; i++) {
    let oldMountKey = getKeyFromOld(newArray[i], oldArray);

    if (oldMountKey < maxMountedIndex) {
      // 从 oldMountKey 移动到 maxMountedIndex
      // moveChild(oldMountKey, maxMountedIndex)
      // console.log(oldArray.splice(oldMountKey,1))
      // console.log('oldArray1', oldArray)
      // console.log(oldArray.splice(maxMountedIndex,0,newArray[i]))
      // console.log('oldArray2', oldArray)
      oldArray.splice(oldMountKey,1)
      oldArray.splice(maxMountedIndex,0,newArray[i])
    }

    if (oldMountKey > maxMountedIndex) {
      maxMountedIndex = oldMountKey;
      // console.log('maxMountedIndex',maxMountedIndex)
    }
  }
  return oldArray
}

function getKeyFromOld(value, oldArray) {
  for (let index in oldArray) {
    if (oldArray[index] === value) {
      return index
    }
  }
}

console.log(assignedSorted(oldArray, newArray))
console.log(assignedSorted(oldArray, newArray1))
console.log(assignedSorted(oldArray, newArray2))
console.log(assignedSorted(oldArray, newArray3))


