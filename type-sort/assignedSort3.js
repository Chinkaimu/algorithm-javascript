let oldArray = ["A","B","C","D"]
let newArray = ["B","A","D","C"]
let newArray1 = ["B","D","A","C"]
let newArray2 = ["C","D","A","B"]
let newArray3 = ["D","C","B","A"]
let newArray4 = ["D","E","B","A"]
let newArray5 = ["F", "D","E","B","A"]

const UpdateType = {
  INSERT_MARKUP: 'INSERT_MARKUP',
  MOVE_EXISTING: 'MOVE_EXISTING',
  REMOVE_NODE: 'REMOVE_NODE'
} 

function assignedSorted(oldArray, newArray) {
  /**
   * updateQueue 
   * {
   * type: 'INSERT_MARKUP'、 'MOVE_EXISTING'、'REMOVE_NODE'
   * fromIndex: 移动原始位置
   * toIndex: 移动目标位置
   * }
   */
  const updateQueue = []
  // 记录需要插入的新节点
  const markupQueue = []

  const changeArray = [...oldArray]

  let maxMountIndex = -1

  for (let i = 0; i < newArray.length; i++) {
    let oldMountKey = getKeyFromAnother(newArray[i], oldArray)

    // 在后面插入新节点需要插入，插入节点数+1
    if (oldMountKey === -1) {
      // 记录修改
      updateQueue.push({
        type: UpdateType.INSERT_MARKUP,
        fromIndex: ++maxMountIndex,
        // markupQueue 存放需要创建的新节点。
        markupIndex: markupQueue.push(newArray[i]) - 1
      })

      continue
    } else {
      if (oldMountKey < maxMountIndex) {
        // 从 oldMountKey 移动到 maxMountIndex
        updateQueue.push({
          type: UpdateType.MOVE_EXISTING,
          fromIndex: oldMountKey,
          toIndex: maxMountIndex
        })
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
        updateQueue.push({
          type: UpdateType.REMOVE_NODE,
          fromIndex: i
        })
      }
    }
  }

  return update(updateQueue, markupQueue, changeArray)
}

function getKeyFromAnother(value, array) {
  for (let index in array) {
    if (array[index] === value) {
      return index
    }
  }
  return -1
}

function update(updateQueue, markupQueue, changeArray) {
    console.log('updateQueue', updateQueue)
    // 根据 updateQueue 对 oldArray 进行更改
    while (updateQueue.length > 0) {
      console.log('changeArray', changeArray)
      const operation = updateQueue.shift()

      if (operation.type === UpdateType.INSERT_MARKUP) {
        changeArray.splice(operation.fromIndex, 0, markupQueue[operation.markupIndex]) //直接操作数组
      }

      if (operation.type === UpdateType.MOVE_EXISTING) {
        const toRemoveItem = oldArray.splice(operation.fromIndex, 1)
        changeArray.splice(operation.toIndex, 0, toRemoveItem[0])
      }

      if (operation.type === UpdateType.REMOVE_NODE) {
        changeArray.splice(fromIndex, 1)
      }
    }

    return changeArray
}



/**
 * TestCase
 */
// console.log(equalArray(assignedSorted(oldArray, newArray), newArray))
// console.log(equalArray(assignedSorted(newArray, newArray1), newArray1))
console.log(equalArray(assignedSorted(newArray1, newArray2), newArray2))
// console.log(equalArray(assignedSorted(newArray2, newArray3), newArray3))
// // 替换单个数据
// console.log(equalArray(assignedSorted(newArray3, newArray4), newArray4))
// // 末尾插入，移动，删除
// console.log(equalArray(assignedSorted(newArray4, newArray5), newArray5))

function equalArray (arr1, arr2) {
  if (arr1.length !== arr2.length) return false
  for (let i in arr1) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}