const binarySort = (inputs, start = 0, end = inputs.length) => {
  if (start >= end - 1) {
    if (inputs[start]) {
      return [inputs[start]]
    }  else {
      return []
    }
  }
  const mid = Math.floor((start + end) / 2)
  const leftArr = binarySort(inputs, start, mid)
  const rigthtArr = binarySort(inputs, mid, end)
  const tempArr = []
  const leftLen = leftArr.length
  const rightLen = rigthtArr.length
  let i = 0, j = 0
  for (; i < leftLen && j < rightLen; ) {
    if (leftArr[i] < rigthtArr[j]) {
      tempArr.push(leftArr[i])
      i++
    } else if (leftArr[i] > rigthtArr[j]) {
      tempArr.push(rigthtArr[j])
      j++
    } else {
      tempArr.push(leftArr[i])
      tempArr.push(rigthtArr[j])
      i++
      j++
    }
  }
  while (i < leftLen) {
    tempArr.push(leftArr[i++])
  }
  while (j < rightLen) {
    tempArr.push(rigthtArr[j++])
  }
  return tempArr
}
console.log(binarySort([2, 1, 6, 4]))
