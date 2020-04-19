const promiseFn = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('fee')
  }, 1000)
})

// const generator = function * () {
//   // yield 1
//   yield promiseFn()
//   console.log('a') // next的迭代次数到达前不会执行
//   // yield console.log('complete')
// }
// const asyncGenerator = generator()
// // const info = asyncGenerator.next()
// const info1 = asyncGenerator.next()
// console.log(info1)
// asyncGenerator.next()
// setTimeout(() => {
//   console.log('after', info1)
// }, 1000)
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
        console.log(info)
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
    const value1 = yield 1
    const value = yield promiseFn()
    console.log(value)
    // const value1 = yield promiseFn()
    console.log(value1 + '1')
    console.log('a')
  })
  return (...args) => _ref(...args)
})()

asyncFn()
// ½ÓÊÕµ½118.112.72.187·¢À´µÄ±¨ÎÄ,±¨ÎÄÄÚÈÝÈçÏÂ:

// <?xml version='1.0' encoding='GB2312'?><CBSERPPGK><INFO><FUNNAM>ERAGNOPR</FUNNAM></INFO><APPAYSAVX><OPRTYP>203</OPRTYP><BNKTYP>CMB</BNKTYP><CLTNBR>0001</CLTNBR><REFNBR>wee28</REFNBR><CLTACC>755915680210402</CLTACC><TRSAMT>100</TRSAMT><BUSTYP>1</BUSTYP><OPRMOD>3</OPRMOD><PAYTYP>2</PAYTYP><RECNUM>23</RECNUM><RACINF>´ú·¢ÆäËû</RACINF><TRSUSE>test</TRSUSE><TRSINF>rrrr</TRSINF></APPAYSAVX><APSALSAVX><REVACC>6225880280120198 </REVACC><REVNAM>ß÷ÐÇÈË</REVNAM><WAGMNY>100</WAGMNY></APSALSAVX></CBSERPPGK>

// --------------------2020/3/19 16:32:01------------------------

// ×¼±¸·¢ËÍºóÌ¨µÄ×ª»»ºó±¨ÎÄÄÚÈÝÈçÏÂ:
// ÇëÇóID[ERAGNOPR]

// [APPAYSAVX]

// BNKTYP=CMB ;BUSTYP=1 ;CLTACC=755915680210402 ;CLTNBR=0001 ;ERPTYP=H ;OPRMOD=3 ;OPRTYP=203 ;PAYTYP=2 ;RACINF=´ú·¢ÆäËû ;RECNUM=23 ;REFNBR=wee28 ;TRSAMT=100 ;TRSINF=rrrr ;TRSUSE=test

// [APSALSAVX]

// ERPTYP=H ;REVACC=6225880280120198 ;REVNAM=ß÷ÐÇÈË ;WAGMNY=100
