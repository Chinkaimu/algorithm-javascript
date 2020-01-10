let oldArray = ["A","B","C","D"]
let newArray = ["B","A","D","C"]
let newArray1 = ["B","D","A","C"]
let newArray2 = ["C","D","A","B"]
let newArray3 = ["D","C","B","A"]
let newArray4 = ["D","E","B","A"]

function assignedSorted(oldArray, newArray) {
  let maxMountedIndex = 0

  for (let i = 0; i < newArray.length; i++) {
    let oldMountKey = getKeyFromAnother(newArray[i], oldArray)

    // 在后面插入新节点需要插入，插入节点数+1
    if (oldMountKey === -1) {
      oldArray.splice(maxMountedIndex+1, 0, newArray[i])
    }

    if (oldMountKey < maxMountedIndex) {
      // 从 oldMountKey 移动到 maxMountedIndex
      // moveChild(oldMountKey, maxMountedIndex)
      // console.log(oldArray.splice(oldMountKey,1))
      // console.log('oldArray1', oldArray)
      // console.log(oldArray.splice(maxMountedIndex,0,newArray[i]))
      // console.log('oldArray2', oldArray)
      const toRemoveItem = oldArray.splice(oldMountKey,1)
      oldArray.splice(maxMountedIndex,0,toRemoveItem[0])
    }

    if (oldMountKey > maxMountedIndex) {
      maxMountedIndex = oldMountKey
      // console.log('maxMountedIndex',maxMountedIndex)
    }
  }

  // 增加判断是否有老节点需要删除。最终新老序列的长度应该是一致的
  if (oldArray.length > newArray.length) {
    for (let i = 0 ; i < oldArray.length; i++) {
      // 不存在节点删除
      // console.log('old', oldArray)
      if (getKeyFromAnother(oldArray[i], newArray) === -1) {
        oldArray.splice(i,1)
      }
    }
  }
  return oldArray
}

function getKeyFromAnother(value, array) {
  for (let index in array) {
    if (array[index] === value) {
      return index
    }
  }
  return -1
}

console.log(assignedSorted(oldArray, newArray))
console.log(assignedSorted(oldArray, newArray1))
console.log(assignedSorted(oldArray, newArray2))
console.log(assignedSorted(oldArray, newArray3))
console.log(assignedSorted(oldArray, newArray4))


