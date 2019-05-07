 
// function add(...args) {
//   let sum = args.reduce((acc, cur) => acc + cur);
//   const tmp = function (...args) {
//     sum = sum + args.reduce((acc, cur) => acc + cur);
//     return tmp;
//   };
//   tmp.toString = function () {
//     return sum;
//   };
//   tmp.valueOf = function () {
//     return sum;
//   };
//   return tmp;
// }
// console.log(add(1, 2)(2, 3)(4, 5) + 'fef')
const sumArray = (arr) => {
  let arrLen = arr.length
  let sum = 0
  for (let i = 0; i < arrLen; i++) {
    if (typeof arr[i] === 'number') {
      sum += arr[i]
    } else {
      sum += sumArray(arr[i])
    }
  }
  return sum
}
console.log(sumArray([1, [2, 3], [4, [5, 6]]]))
console.log('fetch')
console.log('weweewgreg')
