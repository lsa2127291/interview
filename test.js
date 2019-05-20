var Space;
(function (Space) {
    Space[Space["x"] = 4] = "x";
    Space[Space["y"] = 5] = "y";
    Space[Space["z"] = 8] = "z";
})(Space || (Space = {}));
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
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
