const bubbleSort = (inputs) => {
  const len = inputs.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (inputs[i] > inputs[j]) {
        const tmp = inputs[i]
        inputs[i] = inputs[j]
        inputs[j] = tmp
      } 
    }
  }
  return inputs
}

console.log(bubbleSort([3, 1, 2, 0]))