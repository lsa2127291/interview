const promiseFn = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('fee')
  }, 1000)
})

// const generator = function * () {
//   yield promiseFn()
//   console.log('a')
//   // yield console.log('complete')
// }
// const asyncGenerator = generator()
// const info = asyncGenerator.next()
// Promise.resolve(info.value).then(() => {
//   asyncGenerator.next()
// })
// asyncGenerator.next()

// const asyncFn = async function () {
//   await promiseFn()
//   console.log('a')
// }

/** yield + promise 实现 async\await */
const _asyncToGenerator = fn => {
  return (...args) => {
    const gen = fn(...args)
    return new Promise((resolve, reject) => {
      const setup = (key, arg) => {
        let info
        try {
          info = gen[key](arg)
        } catch (err) {
          reject(err)
        }
        if (info.done) {
          resolve(info.value)
        } else {
          Promise.resolve(info.value).then(value => {
            setup('next', value)
          })
        }
      }
      setup('next')
    })
  }
}

const asyncFn = (() => {
  const _ref = _asyncToGenerator(function * () {
    const value = yield promiseFn()
    console.log(value)
    const value1 = yield promiseFn()
    console.log(value1 + '1')
    console.log('a')
  })
  return (...args) => _ref(...args)
})()


asyncFn()
