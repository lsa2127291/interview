const heapSort = (inputs) => {
  createHeap(inputs)
  const len = inputs.length
  const sort = []
  for (let i = 0; i < len; i++) {
    sort[i] = inputs.shift()
    console.log(inputs)
    adjustHeap(inputs)
  }
  return sort
}
/**
 * 假如有N个节点，那么高度为H=logN，最后一层每个父节点最多只需要下调1次，倒数第二层最多只需要下调2次，顶点最多需要下调H次，而最后一层父节点共有2^(H-1)个,倒数第二层公有2^(H-2),顶点只有1(2^0)个，所以总共的时间复杂度为s = 1 * 2^(H-1) + 2 * 2^(H-2) + ... + (H-1) * 2^1 + H * 2^0将H代入后s= 2N - 2 - log2(N)，
 * 近似的时间复杂度就是O(N)。经评论提醒，H=log2(N)  +  1 
 *
 */
const createHeap = (inputs) => {
  const inputLen = inputs.length
  const len  = Math.floor(inputLen / 2)
  for (let i = 0; i < len; i++) {
    const leftChild = i * 2 + 1;
    const rightChild = i * 2 + 2;
    const leftVal = inputs[leftChild]
    const rightVal = inputs[rightChild]
    let compareVal 
    let compareChild
    if (rightChild >= inputLen) {
      compareVal = leftVal
      compareChild = leftChild
    } else if (leftVal < rightVal) {
      compareVal = leftVal
      compareChild = leftChild
    } else {
      compareVal = rightVal
      compareChild = rightChild
    }
    let k = i
    while (k >= 0 && inputs[k] > compareVal) {
      const tmp = inputs[k]
      inputs[k] = compareVal
      inputs[compareChild] = tmp
      compareChild = k
      k % 2 === 0 ? k = (k - 2) / 2 : k = (k - 1) / 2
    }
    // k = i
    // while (k >= 0 && inputs[k] > rightVal) {
    //   const tmp = inputs[k]
    //   inputs[k] = rightVal
    //   inputs[rightChild] = tmp
    //   k % 2 ? k = (k - 2) / 2 : k = (k - 1) / 2
    // }
  }
}

const adjustHeap = (inputs) => {
  const len = inputs.length
  let i = 0
  while (i < len) {
    const leftChild = i * 2 + 1;
    const rightChild = i * 2 + 2;
    const leftVal = inputs[leftChild]
    const rightVal = inputs[rightChild]
    let compareVal 
    let compareChild
    if (rightChild >= len) {
      compareVal = leftVal
      compareChild = leftChild
    } else if (leftVal < rightVal) {
      compareVal = leftVal
      compareChild = leftChild
    } else {
      compareVal = rightVal
      compareChild = rightChild
    }
    if (inputs[i] > compareVal) {
      const tmp = inputs[i]
      inputs[i] = compareVal
      inputs[compareChild] = tmp
      i = compareChild
    } else {
      break
    }
  }
}
console.log(heapSort([3, 2, 2, 2, 4]))