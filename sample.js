var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Validation;
(function (Validation) {
    var numberRegexp = /^[0-9]+$/;
    var ZipCodeValidator = /** @class */ (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
var _b;
var Space;
(function (Space) {
    Space[Space["x"] = 4] = "x";
    Space[Space["y"] = 5] = "y";
    Space[Space["z"] = 8] = "z";
})(Space || (Space = {}));
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _b = wholeObject.b, b = _b === void 0 ? 1001 : _b;
    console.log(a);
}
keepWholeObject({ a: '12' });
var o = {
    a: 1,
    b: 2
};
var ww = o.a, ff = o.b;
var f = 14;
console.log(ww);
console.log(f);
console.log(ff);
var p = { x: 43, y: 78 };
console.log('p', p.x);
var sq = { color: 'white', gg: 'ffff', hh: 'wrrg' };
console.log('sq', sq);
var personFunc = function (body, head22) {
    console.log('body', body);
    console.log('head22', head22);
};
// 检查不通过
// let personFunc: PersonFunc = function (body: number, head22: string) {
//   console.log('body', body)
//   console.log('head22', head22)
// }
personFunc('body', 'head');
var myArray;
myArray = ['Bob', 'Fred'];
// 你可以将索引签名设置为只读，这样就防止了给索引赋值：
var rs = ['xxx', 'mmm'];
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var digital = createClock(DigitalClock, 12, 17);
var squar1 = {};
squar1.color = 'white';
squar1.world = 'ww';
function getContour() {
    var counter = function (start) {
        return 'few';
    };
    return counter;
}
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TextBox;
}(Control));
// class Image implements SelectableControl {
//   select() { }
// }
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('Woof! Woof!');
    };
    return Dog;
}(Animal));
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    Horse.prototype.getName = function () {
        return this.name;
    };
    return Horse;
}(Animal));
var horse = new Horse('feee');
var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus('wfeef wef');
var A = /** @class */ (function () {
    function A() {
    }
    Object.defineProperty(A.prototype, "a", {
        get: function () {
            return this._a;
        },
        set: function (name) {
            this._a = name;
        },
        enumerable: true,
        configurable: true
    });
    return A;
}());
var aa = new A();
aa.a = 'wwwfff';
console.log('aa', aa);
var Grid = /** @class */ (function () {
    function Grid() {
    }
    Grid.prototype.addGrid = function () {
        return Grid.origin.x++;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var a = new Grid();
var b = new Grid();
console.log(a.addGrid());
console.log(b.addGrid());
var Abs = /** @class */ (function () {
    function Abs() {
    }
    Abs.prototype.moveBy = function () {
        console.log('wwwwww');
    };
    return Abs;
}());
var Figurative = /** @class */ (function (_super) {
    __extends(Figurative, _super);
    function Figurative() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Figurative.prototype.makeSound = function () {
        console.log('do song');
    };
    return Figurative;
}(Abs));
function build(f, s) {
}
build('ww', 'we');
function buildRest(f) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    console.log('rest', rest);
}
buildRest('wefw', 'fretre', 'yrtyhurt', 'wefe');
var _loop_1 = function (i) {
    setTimeout(function () {
        console.log(i);
    }, 0);
};
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
// --noImplicitThis 会提示this指向不符合意图
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
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
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        var pickedCard_1 = Math.floor(Math.random() * x.length);
        return pickedCard_1;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
var pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
var pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
// 泛型 -> 类型变量
function identity(arg) {
    return arg;
}
var output = identity('fff');
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity(['1', '3', '5']);
function identity1(arg) {
    return arg;
}
var myIdentity = identity;
// 泛型类
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
function logIdentity(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
// logIdentity(3) error
logIdentity(['ww']);
function create(c) {
    return new c();
}
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper() {
    }
    return ZooKeeper;
}());
var Animal1 = /** @class */ (function () {
    function Animal1() {
    }
    return Animal1;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(Animal1));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(Animal1));
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag; // typechecks!
createInstance(Bee).keeper.hasMask; // typechecks!
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Down);
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
// 上下文类型
window.onmousedown = function (mouseEvent) {
    console.log(mouseEvent.button); //<- Error
};
// function createZoo(): Animal[] {
//   return [new Rhino(), new Elephant(), new Snake()];
// }
// 最佳通用类型
var zoo = [new Lion(), new Bee()];
function createZoo() {
    return [new Lion(), new Bee()];
}
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var p3;
// OK, because of structural typing
p3 = new Person();
var x;
// y's inferred type is { name: string; location: string; }
var y = { name: 'Alice', location: 'Seattle' };
x = y;
var EventType;
(function (EventType) {
    EventType[EventType["Mouse"] = 0] = "Mouse";
    EventType[EventType["Keyboard"] = 1] = "Keyboard";
})(EventType || (EventType = {}));
function listenEvent(eventType, handler) {
    /* ... */
}
// Unsound, but useful and common
listenEvent(EventType.Mouse, function (e) { return console.log(e.x + ',' + e.y); });
// Undesirable alternatives in presence of soundness
listenEvent(EventType.Mouse, function (e) { return console.log(e.x + ',' + e.y); });
listenEvent(EventType.Mouse, (function (e) { return console.log(e.x + ',' + e.y); }));
// Still disallowed (clear error). Type safety enforced for wholly incompatible types
// listenEvent(EventType.Mouse, (e: number) => console.log(e));
function invokeLater(args, callback) {
    /* ... Invoke callback with 'args' ... */
}
// Unsound - invokeLater "might" provide any number of arguments
invokeLater([1, 2], function (x, y) { return console.log(x + ', ' + y); });
// // Confusing (x and y are actually required) and undiscoverable
// invokeLater([1, 2], (x?, y?) => console.log(x + ', ' + y));
// function invokeLater(args: any[], callback: (...args: any[]) => void) {
//   /* ... Invoke callback with 'args' ... */
// }
// Unsound - invokeLater "might" provide any number of arguments
invokeLater([1, 2], function (x, y) { return console.log(x + ', ' + y); });
// Confusing (x and y are actually required) and undiscoverable
invokeLater([1, 2], function (x, y) { return console.log(x + ', ' + y); });
// 枚举类型与数字类型兼容，并且数字类型与枚举类型兼容。不同枚举类型之间是不兼容的。
var Status;
(function (Status) {
    Status[Status["Ready"] = 0] = "Ready";
    Status[Status["Waiting"] = 1] = "Waiting";
})(Status || (Status = {}));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
var status1 = Status.Ready;
// status1 = Color.Green
// 比较两个类类型的对象时，只有实例的成员会被比较。 静态成员和构造函数不在比较的范围内
var Animal2 = /** @class */ (function () {
    function Animal2(name, numFeet) {
    }
    return Animal2;
}());
var Size2 = /** @class */ (function () {
    function Size2(numFeet) {
    }
    return Size2;
}());
var a2;
var s2;
a2 = s2; // OK
s2 = a2; // OK
var x3;
var y3;
x3 = y3; // OK, because y matches structure of x
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
function broken(name) {
    function postfix(epithet) {
        return name.charAt(0) + '.  the ' + epithet; // error, 'name' is possibly null
    }
    name = name || "Bob";
    return postfix("great");
}
function fixed(name) {
    function postfix(epithet) {
        return name.charAt(0) + '.  the ' + epithet; // ok
    }
    name = name || "Bob";
    return postfix("great");
}
var UIElement = /** @class */ (function () {
    function UIElement() {
    }
    UIElement.prototype.animate = function (dx, dy, easing) {
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
    };
    return UIElement;
}());
var button = new UIElement();
button.animate(0, 0, "ease-in");
function assertNever(x) {
    throw new Error("Unexpected object: " + x);
}
function area(s) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * Math.pow(s.radius, 2);
        // default: return assertNever(s); // error here if there are missing cases
    }
}
var BasicCalculator = /** @class */ (function () {
    function BasicCalculator(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
    }
    BasicCalculator.prototype.currentValue = function () {
        return this.value;
    };
    BasicCalculator.prototype.add = function (operand) {
        this.value += operand;
        return this;
    };
    BasicCalculator.prototype.multiply = function (operand) {
        this.value *= operand;
        return this;
    };
    return BasicCalculator;
}());
// let v = new BasicCalculator(2)
//             .multiply(5)
//             .add(1)
//             .currentValue();
// 多态this表示的是某个包含类或接口的 子类型。 这被称做 F-bounded多态性
var ScientificCalculator = /** @class */ (function (_super) {
    __extends(ScientificCalculator, _super);
    function ScientificCalculator(value) {
        if (value === void 0) { value = 0; }
        return _super.call(this, value) || this;
    }
    ScientificCalculator.prototype.sin = function () {
        this.value = Math.sin(this.value);
        return this;
    };
    return ScientificCalculator;
}(BasicCalculator));
var v = new ScientificCalculator(2)
    .multiply(5)
    .sin()
    .add(1)
    .currentValue();
// 如果没有 this类型， ScientificCalculator就不能够在继承
// BasicCalculator的同时还保持接口的连贯性。 multiply将会返回
// BasicCalculator，它并没有 sin方法。 然而，使用 this类型，
//  multiply会返回 this，在这里就是 ScientificCalculator。
function pluck(o, names) {
    return names.map(function (n) { return o[n]; });
}
var person = {
    name: 'Jarid',
    age: 35
};
var strings = pluck(person, ['name']); // ok, string[]
function getProperty(o, name) {
    return o[name]; // o[name] is of type T[K]
}
var name1 = getProperty(person, 'name');
var age = getProperty(person, 'age');
var keys;
var value;
// interface PersonReadonly {
//   readonly name: string;
//   readonly age: number
// }
var sym = Symbol();
var obj = (_b = {},
    _b[sym] = "value",
    _b);
console.log(obj[sym]); // "value"
var getClassNameSymbol = Symbol();
var C = /** @class */ (function () {
    function C() {
    }
    C.prototype[getClassNameSymbol] = function () {
        return "C";
    };
    return C;
}());
var c = new C();
var className = c[getClassNameSymbol](); // "C"
var pets = new Set(['Cat', 'Dog', 'Hamster']);
pets['species'] = 'mammals';
for (var pet in pets) {
    console.log(pet); // "species"
}
for (var _i = 0, pets_1 = pets; _i < pets_1.length; _i++) {
    var pet = pets_1[_i];
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
var strings1 = ["Hello", "98052", "101"];
// Validators to use
var validators = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
for (var _c = 0, strings_1 = strings; _c < strings_1.length; _c++) {
    var s = strings_1[_c];
    for (var name_1 in validators) {
        console.log("\"" + s + "\" - " + (validators[name_1].isAcceptable(s) ? "matches" : "does not match") + " " + name_1);
    }
}
