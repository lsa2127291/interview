const qsort = (inputs, start = 0, end = inputs.length) => {
  if (start >= end) {
    return
  }
  const selectVal = inputs[start]
  let selectValPosition = start
  for (let i = start + 1; i < end; i++) {
    if (inputs[i] < selectVal) {
      swap(inputs, i, selectValPosition)
      selectValPosition = i
    }
  }
  qsort(inputs, 0, selectValPosition)
  qsort(inputs, selectValPosition + 1, end)
  return inputs
}

const swap = (array, a, b) => {
  const tmp = array[a]
  array[a] = array[b]
  array[b] = tmp
}

console.log(qsort([2, 1, 6, 4]))