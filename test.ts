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

interface ClockInterface {
  currentTime: Date
  setTime (d: Date)
}

class Clock implements ClockInterface {
  currentTime: Date
  constructor (h: number, m: number) {
  }
  setTime (d: Date) {
    this.currentTime = d
  }
}

// class Clock implements ClockConstructor {
//   currentTime: Date
//   constructor(h: number, m: number) {}
// }

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface1;
}
interface ClockInterface1 {
  tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface1 {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface1 {
  constructor(h: number, m: number) { }
  tick() {
      console.log("beep beep");
  }
}
let digital = createClock(DigitalClock, 12, 17);

// 继承接口
interface Shape {
  color: string
}

interface Square extends Shape {
  sideLength: number
}
// let square: Square = {
//   color: 'red',
//   sideLength: 1
// }

interface We {
  world: string
}
interface Square1 extends Square, We {
  cool: boolean
}

let squar1 = <Square1> {}
squar1.color = 'white'
squar1.world = 'ww'
interface Counter {
  (start: number): string
  interval: number
  reset(): void
}

function getContour (): Counter {
  let counter = <Counter>function (start: number) {
    return 'few'
  }
  return counter
}

class Control {
  private state: string
}

interface SelectableControl extends Control {
  select(): void
}

class Button extends Control implements SelectableControl {
  select() { }
}
class TextBox extends Control {
}

// class Image implements SelectableControl {
//   select() { }
// }

class Animal {
  protected name: string
  private world: string
  constructor(theName: string) { this.name = theName}
  move(distanceInMeters: number = 0) {
      console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
      console.log('Woof! Woof!');
  }
}
class Snake extends Animal {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 5) {
      console.log("Slithering...");
      super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 45) {
      console.log("Galloping...");
      super.move(distanceInMeters);
  }
  getName () {
    return this.name
  }
  // getWorld () {
  //   return this.world
  // }
}

const horse = new Horse('feee')
class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor (theName: string) {
      this.name = theName;
  }
}
let dad = new Octopus('wfeef wef')

class A {
  private _a: string
  get a(): string {
    return this._a
  }
  set a(name) {
    this._a = name
  }
}
const aa = new A()
aa.a = 'wwwfff'
console.log('aa', aa)

class Grid {
  static origin  = {x: 0, y: 0}
  addGrid () {
    return Grid.origin.x++
  }
}
const a: Grid = new Grid()
const b: Grid = new Grid()
console.log(a.addGrid())
console.log(b.addGrid())

abstract class Abs {
  abstract makeSound(): void
  moveBy(): void {
    console.log('wwwwww')
  }
}

class Figurative extends Abs {
  makeSound () {
    console.log('do song')
  }
}

function build (f: string, s?: string) {

}

build('ww', 'we')

function buildRest (f: string, ...rest: string []) {
  console.log('rest', rest)
}
buildRest('wefw', 'fretre', 'yrtyhurt', 'wefe')

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i)
  }, 0)
}

// --noImplicitThis 会提示this指向不符合意图
let deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function() {
      return function() {
          let pickedCard = Math.floor(Math.random() * 52);
          let pickedSuit = Math.floor(pickedCard / 13);

          return {suit: this.suits[pickedSuit], card: pickedCard % 13};
      }
  }
}
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void;
}

// class Handler {
//   info: string;
//   onClickBad(this: Handler, e: Event) {
//       // oops, used this here. using this callback would crash at runtime
//       this.info = e.message
//   }
// }
// let h = new Handler();
// let uiElement: UIElement
// uiElement.addClickListener(h.onClickBad) // error!

// let suits = ["hearts", "spades", "clubs", "diamonds"];

// function pickCard(x): any {
//     // Check to see if we're working with an object/array
//     // if so, they gave us the deck and we'll pick the card
//     if (typeof x == "object") {
//         let pickedCard = Math.floor(Math.random() * x.length);
//         return pickedCard;
//     }
//     // Otherwise just let them pick the card
//     else if (typeof x == "number") {
//         let pickedSuit = Math.floor(x / 13);
//         return { suit: suits[pickedSuit], card: x % 13 };
//     }
// }

// let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
// let pickedCard1 = myDeck[pickCard(myDeck)];
// console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

// let pickedCard2 = pickCard(15);
// console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);

// 重载
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);

// 泛型 -> 类型变量

function identity<T> (arg: T): T {
  return arg
}

let output = identity<string>('fff')

function loggingIdentity<T>(arg: Array<T>): Array<T> {
  console.log(arg.length)
  return arg
}
loggingIdentity<string>(['1', '3', '5'])

// 泛型类型
// interface GenericIdentityFn {
//   <T>(arg: T): T;
// }

// function identity<T>(arg: T): T {
//   return arg;
// }

// let myIdentity: GenericIdentityFn = identity

// 一个相似的例子，我们可能想把泛型参数当作整个接口的一个参数。这样我们就能清楚的知道使用的具体是哪个泛型类型（比如： Dictionary<string>而不只是Dictionary）
interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identity1<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;

// 泛型类

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

// 泛型约束

interface Lengthwise {
  length: number
}

function logIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);  // Now we know it has a .length property, so no more error
  return arg;
}

// logIdentity(3) error
logIdentity(['ww'])

function create<T>(c: {new(): T; }): T {
  return new c();
}

class BeeKeeper {
  hasMask: boolean;
}

class ZooKeeper {
  nametag: string;
}

class Animal1 {
  numLegs: number;
}

class Bee extends Animal1 {
  keeper: BeeKeeper;
}

class Lion extends Animal1 {
  keeper: ZooKeeper;
}

function createInstance<A extends Animal1>(c: new () => A): A {
  return new c();
}

createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!

enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}
console.log(Direction.Down)

enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

// interface Square {
//   kind: ShapeKind.Square;
//   sideLength: number;
// }

// let c: Circle = {
//   kind: ShapeKind.Square,
//   //    ~~~~~~~~~~~~~~~~ Error!
//   radius: 100,
// }

// enum E {
//   Foo,
//   Bar,
// }

// function f(x: E) {
//   if (x !== E.Foo || x !== E.Bar) {
//       //             ~~~~~~~~~~~
//       // Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.
//   }
// }

// enum Enum {
//   A
// }
// let a = Enum.A;
// let nameOfA = Enum[a]; // "A"

const enum Directions {
  Up,
  Down,
  Left,
  Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]

declare enum Enum {
  A = 1,
  B,
  C = 2
}


// 上下文类型
window.onmousedown = function(mouseEvent) {
  console.log(mouseEvent.button);  //<- Error
};

// function createZoo(): Animal[] {
//   return [new Rhino(), new Elephant(), new Snake()];
// }

// 最佳通用类型
let zoo: Animal1[] = [new Lion(), new Bee()];

function createZoo(): Animal1[] {
  return [new Lion(), new Bee()];
 
}

// TypeScript里的类型兼容性是基于结构子类型的
interface Named {
  name: string;
}

class Person {
  name: string;
}

let p3: Named;
// OK, because of structural typing
p3 = new Person();

interface Named {
  name: string;
}

let x: Named;
// y's inferred type is { name: string; location: string; }
let y = { name: 'Alice', location: 'Seattle' };
x = y;

enum EventType { Mouse, Keyboard }

interface Event { timestamp: number; }
// interface MouseEvent extends Event { x: number; y: number }
interface KeyEvent extends Event { keyCode: number }


function listenEvent(eventType: EventType, handler: (n: Event) => void) {
    /* ... */
}

// Unsound, but useful and common
listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + ',' + e.y));

// Undesirable alternatives in presence of soundness
listenEvent(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).x + ',' + (<MouseEvent>e).y));
listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => console.log(e.x + ',' + e.y)));

// Still disallowed (clear error). Type safety enforced for wholly incompatible types
// listenEvent(EventType.Mouse, (e: number) => console.log(e));

function invokeLater(args: any[], callback: (...args: any[]) => void) {
  /* ... Invoke callback with 'args' ... */
}

// Unsound - invokeLater "might" provide any number of arguments
invokeLater([1, 2], (x, y) => console.log(x + ', ' + y));

// // Confusing (x and y are actually required) and undiscoverable
// invokeLater([1, 2], (x?, y?) => console.log(x + ', ' + y));

// function invokeLater(args: any[], callback: (...args: any[]) => void) {
//   /* ... Invoke callback with 'args' ... */
// }

// Unsound - invokeLater "might" provide any number of arguments
invokeLater([1, 2], (x, y) => console.log(x + ', ' + y));

// Confusing (x and y are actually required) and undiscoverable
invokeLater([1, 2], (x?, y?) => console.log(x + ', ' + y));

// 枚举类型与数字类型兼容，并且数字类型与枚举类型兼容。不同枚举类型之间是不兼容的。
enum Status {Ready, Waiting}
enum Color {Red, Blue, Green}
let status1 = Status.Ready
// status1 = Color.Green

// 比较两个类类型的对象时，只有实例的成员会被比较。 静态成员和构造函数不在比较的范围内
class Animal2 {
  feet: number;
  constructor(name: string, numFeet: number) { }
}

class Size2 {
  feet: number;
  constructor(numFeet: number) { }
}

let a2: Animal2;
let s2: Size2;

a2 = s2;  // OK
s2 = a2;  // OK


// 因为TypeScript是结构性的类型系统，类型参数只影响使用其做为类型一部分的结果类型。比如，

interface Empty<T> {
}
let x3: Empty<number>;
let y3: Empty<string>;

x3 = y3;  // OK, because y matches structure of x

// interface NotEmpty<T> {
//   data: T;
// }
// let x4: NotEmpty<number>;
// let y4: NotEmpty<string>;

// x4 = y4;  // Error, because x and y are not compatible

// 联合类型
// interface Bird1 {
//   fly();
//   layEggs();
// }

// interface Fish1 {
//   swim();
//   layEggs();
// }

// function getSmallPet1(): Fish1 | Bird1 {
//   // ...
// }

// let pet = getSmallPet1();
// pet.layEggs(); // okay
// // pet.swim();    // errors 只能访问共有类型
// function isFish(pet: Fish1 | Bird1): pet is Fish1 {
//   return (<Fish1>pet).swim !== undefined;
// }

// if (isFish(pet)) {
//   pet.swim();
// }
// else {
//   pet.fly();
// }
function broken(name: string | null): string {
  function postfix(epithet: string) {
    return name.charAt(0) + '.  the ' + epithet; // error, 'name' is possibly null
  }
  name = name || "Bob";
  return postfix("great");
}

function fixed(name: string | null): string {
  function postfix(epithet: string) {
    return name!.charAt(0) + '.  the ' + epithet; // ok
  }
  name = name || "Bob";
  return postfix("great");
}

// 接口 vs. 类型别名
type Alias = { num: number }
interface Interface {
    num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing === "ease-in") {
            // ...
        }
        else if (easing === "ease-out") {
        }
        else if (easing === "ease-in-out") {
        }
        else {
            // error! should not pass null or undefined.
        }
    }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
// button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here

// function rollDie(x: number): 1 | 2 | 3 | 4 | 5 | 6 {
//   // ...
//   if (x < 5 && x > 1) {
//     return <1 | 2 | 3 | 4 | 5 | 6>x
//   }
// }

// function foo(x: number) {
//   if (x !== 1 || x !== 2) {
//       //         ~~~~~~~
//       // Operator '!==' cannot be applied to types '1' and '2'.
//   }
// }

interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface Circle1 {
  kind: "circle";
  radius: number;
}

interface Triangle {
  kind: "triangle";
  radius: number;
}

type Shape1 = Square | Rectangle | Circle1 | Triangle;
function assertNever(x: never): never {
  throw new Error("Unexpected object: " + x);
}
function area(s: Shape1) {
  switch (s.kind) {
      case "square": return s.size * s.size;
      case "rectangle": return s.height * s.width;
      case "circle": return Math.PI * s.radius ** 2;
      // default: return assertNever(s); // error here if there are missing cases
  }
}

class BasicCalculator {
  public constructor(protected value: number = 0) { }
  public currentValue(): number {
      return this.value;
  }
  public add(operand: number): this {
      this.value += operand;
      return this;
  }
  public multiply(operand: number): this {
      this.value *= operand;
      return this;
  }
  // ... other operations go here ...
}

// let v = new BasicCalculator(2)
//             .multiply(5)
//             .add(1)
//             .currentValue();

// 多态this表示的是某个包含类或接口的 子类型。 这被称做 F-bounded多态性
class ScientificCalculator extends BasicCalculator {
    public constructor(value = 0) {
        super(value);
    }
    public sin() {
        this.value = Math.sin(this.value);
        return this;
    }
    // ... other operations go here ...
}

let v = new ScientificCalculator(2)
        .multiply(5)
        .sin()
        .add(1)
        .currentValue();
// 如果没有 this类型， ScientificCalculator就不能够在继承
// BasicCalculator的同时还保持接口的连贯性。 multiply将会返回
// BasicCalculator，它并没有 sin方法。 然而，使用 this类型，
//  multiply会返回 this，在这里就是 ScientificCalculator。

function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(n => o[n]);
}

interface Person {
    name: string;
    age: number;
}
let person: Person = {
    name: 'Jarid',
    age: 35
};
let strings: string[] = pluck(person, ['name']); // ok, string[]
function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name]; // o[name] is of type T[K]
}
let name1: string = getProperty(person, 'name');
let age: number = getProperty(person, 'age');
// let unknown = getProperty(person, 'unknown'); // error, 'unknown' is not in 'name' | 'age'

interface Map1 <T> {
  [key: string]: T;
}
let keys: keyof Map1<number>;
let value: Map1<number>['foo']

type Readonly1<T> = {
  readonly [P in keyof T]: T[P]
}
type ReadonlyMap1 = Readonly1<Map1<number>>
// interface PersonReadonly {
//   readonly name: string;
//   readonly age: number
// }

const sym: unique symbol = Symbol();

let obj = {
    [sym]: "value"
};

console.log(obj[sym]); // "value"

const getClassNameSymbol = Symbol();

class C {
    [getClassNameSymbol](){
       return "C";
    }
}

let c = new C();
let className = c[getClassNameSymbol](); // "C"
let pets = new Set(['Cat', 'Dog', 'Hamster'])
pets['species'] = 'mammals'
for (let pet in pets) {
  console.log(pet); // "species"
}

for (let pet of pets) {
  console.log(pet); // "Cat", "Dog", "Hamster"
}

// 模块里不要使用命名空间,命名空间在使用模块时几乎没什么价值

// namespace Validation {
//   export interface StringValidator {
//       isAcceptable(s: string): boolean;
//   }

//   const lettersRegexp = /^[A-Za-z]+$/;
//   const numberRegexp = /^[0-9]+$/;

//   export class LettersOnlyValidator implements StringValidator {
//       isAcceptable(s: string) {
//           return lettersRegexp.test(s);
//       }
//   }

//   export class ZipCodeValidator implements StringValidator {
//       isAcceptable(s: string) {
//           return s.length === 5 && numberRegexp.test(s);
//       }
//   }
// }

// Some samples to try
let strings1 = ["Hello", "98052", "101"];

// Validators to use
let validators: { [s: string]: Validation.StringValidator; } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of strings) {
  for (let name in validators) {
      console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
  }
}

namespace Shapes {
  export namespace Polygons {
      export class Triangle { }
      export class Square { }
  }
}

import polygons = Shapes.Polygons;
let sq1 = new polygons.Square(); // Same as "new Shapes.Polygons.Square()"

// 合并接口
interface Cloner {
  clone(animal: Animal): Animal;
}

interface Cloner {
  clone(animal: Dog): Dog;
}

// 合并命名空间和函数
function buildLabel(name: string): string {
  return buildLabel.prefix + name + buildLabel.suffix;
}

namespace buildLabel {
  export let suffix = "";
  export let prefix = "Hello, ";
}

console.log(buildLabel("Sam Smith"));

// 类不能与其它类或变量合并

// 模块扩展

// import { Observable } from "./observable";
// declare module "./observable" {
//     interface Observable<T> {
//         map<U>(f: (x: T) => U): Observable<U>;
//     }
// }
// Observable.prototype.map = function (f) {
//     // ... another exercise for the reader
// }


// // consumer.ts
// import { Observable } from "./observable";
// import "./map";
// let o: Observable<number>;
// o.map(x => x.toFixed());

// 装饰器

function f1() {
  console.log("f(): evaluated");
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("f(): called");
  }
}

function g() {
  console.log("g(): evaluated");
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("g(): called");
  }
}

// class C1 {
//   @f1()
//   @g()
//   method() {}
// }
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}
@sealed
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
  return class extends constructor {
      newProperty = "new property";
      hello = "override";
  }
}

@classDecorator
class Greeter2 {
  property = "property";
  hello: string;
  constructor(m: string) {
      this.hello = m;
  }
}

console.log(new Greeter("world"));
