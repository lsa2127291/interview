 const repeat = (str, n) => {
   if (n > 0) {
    const m = parseInt(n / 2)
    if (n % 2 === 1) {
      return repeat(str, m) + repeat(str, m) + str
    } else {
      return repeat(str, m) + repeat(str, m)
    }
   }
   return ''
 }

//  const repeat = (str, n) => {
//    if (n === 0) {
//      return ''
//    }
//    if (n === 1) {
//      return str
//    }
//    let result = str
//    for (let i = 2; i <= n; ) {
//      result += result
//      if (i * 2 > n) {
//       const len = (i * 2 - n) * str.length
//       result = result + result.substring(0, result.length - len)
//      }
//      i = i * 2
//    }
//    return result
//  }

// substring 在js为o(1)，java7以上为o(n)之前为o(1)，因为o(1)算法会造成内存泄露
 console.log(repeat('aa', 7))