let oldArray = [{key:"A"},{key:"B"},{key:"C"},{key:"D"}]
let newArray = [{key:"B"},{key:"A"},{key:"D"},{key:"C"}]
let newArray1 = [{key:"B"},{key:"D"},{key:"A"},{key:"C"}]
let newArray2 = [{key:"C"},{key:"D"},{key:"A"},{key:"B"}]
let newArray3 = [{key:"D"},{key:"C"},{key:"B"},{key:"A"}]
let newArray4 = [{key:"D"},{key:"E"},{key:"B"},{key:"A"}]
let newArray5 = [{key:"F"},{key:"D"},{key:"E"},{key:"B"},{key:"A"}]

function assignedSorted(oldArray, newArray) {
  for (let i in oldArray) {
    oldArray[i].visited = false
  }

  let maxMountIndex = -1
  
  for (let i = 0; i < newArray.length; i++) {
    let oldMountKey = getKeyFromAnother(newArray[i], oldArray)

    // 在后面插入新节点需要插入，插入节点数+1
    if (oldMountKey === -1) {
      const newItem = { key: newArray[i].key, visited: true}
      // splice 如果 start 超出了数组长度，则从数组末尾添加内容，已访问节点的最大下标应该 +1
      oldArray.splice(++maxMountIndex, 0, newItem)
    } else {
      oldArray[oldMountKey].visited = true
    
      if (oldMountKey < maxMountIndex) {
        // 从 oldMountKey 移动到 maxMountIndex
        const toRemoveItem = oldArray.splice(oldMountKey,1)
        oldArray.splice(maxMountIndex,0,toRemoveItem[0])
      }
  
      if (oldMountKey > maxMountIndex) {
        maxMountIndex = oldMountKey
        // console.log('maxMountIndex',maxMountIndex)
      }
    }
  }

  // 增加判断是否有老节点需要删除。最终新老序列的长度应该是一致的
  // 对于节点而言，被访问过的老节点可以增加标记，最后一次循环删除没有被访问过的老节点。
  if (oldArray.length > newArray.length) {
    for (let i = 0 ; i < oldArray.length; i++) {
      // 不存在节点删除
      if (!oldArray[i].visited) {
        oldArray.splice(i,1)
      }
    }
  }
  return oldArray
}

function getKeyFromAnother(value, array) {
  for (let index in array) {
    if (array[index].key === value.key) {
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
    if (arr1[i].key !== arr2[i].key) {
      return `result ${JSON.stringify(arr1)} is not equal ${JSON.stringify(arr2)}`
    }
  }
  return true
}