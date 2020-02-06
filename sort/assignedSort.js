let oldArray = ["A","B","C","D"]
let newArray = ["B","A","D","C"]
let newArray1 = ["B","D","A","C"]
let newArray2 = ["C","D","A","B"]
let newArray3 = ["D","C","B","A"]
let newArray4 = ["D","E","B","A"]
let newArray5 = ["F", "D","E","B","A"]

function assignedSorted(oldArray, newArray) {
  let maxMountIndex = -1

  for (let i = 0; i < newArray.length; i++) {
    let oldMountKey = getKeyFromAnother(newArray[i], oldArray)

    // 在后面插入新节点需要插入，插入节点数+1
    if (oldMountKey === -1) {
      // 在框架中应该是记录需要进行的操作，然后对真实 DOM 进行操作
      oldArray.splice(++maxMountIndex, 0, newArray[i])
      continue
    } else {
      if (oldMountKey < maxMountIndex) {
        // 从 oldMountKey 移动到 maxMountIndex
        const toRemoveItem = oldArray.splice(oldMountKey,1)
        oldArray.splice(maxMountIndex,0,toRemoveItem[0])
      }
      if (oldMountKey > maxMountIndex) {
        maxMountIndex = oldMountKey
      }
    }
  }

  // 增加判断是否有老节点需要删除。最终新老序列的长度应该是一致的
  if (oldArray.length > newArray.length) {
    for (let i = 0 ; i < oldArray.length; i++) {
      // 不存在节点删除
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

console.log(equalArray(assignedSorted(oldArray, newArray), newArray))
console.log(equalArray(assignedSorted(newArray, newArray1), newArray1))
console.log(equalArray(assignedSorted(newArray1, newArray2), newArray2))
console.log(equalArray(assignedSorted(newArray2, newArray3), newArray3))
// 替换单个数据
console.log(equalArray(assignedSorted(newArray3, newArray4), newArray4))
// 末尾插入，移动，删除
console.log(equalArray(assignedSorted(newArray4, newArray5), newArray5))

function equalArray (arr1, arr2) {
  if (arr1.length !== arr2.length) return false
  for (let i in arr1) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}