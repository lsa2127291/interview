enum Space {x = 4, y = 5, z = 8}
function keepWholeObject(wholeObject: { a: string, b?: number }) {
  let { a, b = 1001 } = wholeObject;
  console.log(a)
}
keepWholeObject({a: '12'})

const o = {
  a: 1,
  b: 2
}
const {a: ww, b: ff} : {a: number, b: number} = o
const f:number = 14
console.log(ww)
console.log(f)
console.log(ff)

interface Point {
  readonly x: number;
  readonly y: number;
}

const p:Point = {x: 43, y: 78}
console.log('p', p.x)
interface SquareConfig {
  color?: string,
  width?: number,
  [propName: string]: any
}
const sq:SquareConfig = {color: 'white', gg: 'ffff', hh: 'wrrg'}
console.log('sq', sq)

interface PersonFunc {
  (body: string, head: string) : void
}

let personFunc: PersonFunc = function (body: string, head22: string) {
  console.log('body', body)
  console.log('head22', head22)
}

// 检查不通过
// let personFunc: PersonFunc = function (body: number, head22: string) {
//   console.log('body', body)
//   console.log('head22', head22)
// }

personFunc('body', 'head')

// 可索引的类型
interface StringArray {
  [index: number]: string
}
let myArray: StringArray
myArray = ['Bob', 'Fred']

// name的类型与字符串索引类型不匹配，所以类型检查器给出一个错误提示：

// interface numberDictionary {
//   [index: string]: number,
//   length: number,
//   name: string
// }

interface ReadonlyStringArray {
  readonly [index: number]: string
}

// 你可以将索引签名设置为只读，这样就防止了给索引赋值：
let rs: ReadonlyStringArray = ['xxx', 'mmm']
