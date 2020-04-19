
// const promiseTest = Promise.resolve(1)
// promiseTest.then(val => {
//   console.log('val:', val)
//   return val
// }).then(val => {
//   console.log('val1:', val)
// })
// const promiseTest1 = new Promise((resolve, reject) => {
//   resolve(1)
// }).then(val => {
//   console.log('val2:', val)
// })
// console.log('ccc', promiseTest)

new Promise((resolve, reject) => {
  console.log('外部promise');
  resolve();
})
  .then(() => {
    console.log('外部第一个then');
    new Promise((resolve, reject) => {
      console.log('内部promise');
      resolve();
    })
      .then(() => {
        console.log('内部第一个then');
        return Promise.resolve();
      })
      .then(() => {
        console.log('内部第二个then');
      })
  })
  .then(() => {
    console.log('外部第二个then');
  })
  .then(() => {
    console.log('外部第三个then');
  })