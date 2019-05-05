

const findThreeSum = (arr, target) => {
  const arrLen = arr.length
  arr = arr.sort((a, b) => {
    return a - b
  })
  for (let i = 0; i < arrLen - 2; i++) {
    for (let j = i + 1, k = arrLen - 1; j < k;) {
        const sum = arr[i] + arr[j] + arr[k]
        if (sum === target) {
          return [i, j, k]
        }
        if (sum < target) {
          j++
        } else {
          k--
        } 
    }
  }
  return false
}
