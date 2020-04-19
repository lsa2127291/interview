var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import "reflect-metadata";
// 类装饰器
function classDecorator(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.newProperty = "new property";
            this.hello = "override";
        }
    };
}
let Greeter = class Greeter {
    constructor(m) {
        this.property = "property";
        this.hello = m;
    }
};
Greeter = __decorate([
    classDecorator,
    __metadata("design:paramtypes", [String])
], Greeter);
// 方法装饰器
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
// console.log(new Greeter("world"));
class Greeter1 {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
__decorate([
    enumerable(false),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Greeter1.prototype, "greet", null);
// 访问器装饰器
class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    get x() { return this._x; }
    get y() { return this._y; }
}
__decorate([
    configurable(false),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Point.prototype, "x", null);
__decorate([
    configurable(false),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Point.prototype, "y", null);
function configurable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.configurable = value;
    };
}
// 属性装饰器
class Greeter3 {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        let formatString = getFormat(this, "greeting");
        return formatString.replace("%s", this.greeting);
    }
}
__decorate([
    format("Hello, %s"),
    __metadata("design:type", String)
], Greeter3.prototype, "greeting", void 0);
const formatMetadataKey = Symbol("format");
function format(formatString) {
    return Reflect.metadata(formatMetadataKey, formatString);
}
function getFormat(target, propertyKey) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}
// <?xml version='1.0' encoding='GB2312'?><elXmlIniPlus><Section SectionName='APPAYSAVX'><elXmlProperty><Attribute key='OPRTYPE' value='202' /><Attribute key='BUSTYP' value='0' /><Attribute key='RECNUM' value='23' /><Attribute key='REFNBR' value='fwefewf1232454' /><Attribute key='CLTNBR' value='0001' /><Attribute key='CLIACC' value='755915676410307' /><Attribute key='TRSAMT' value='100.23' /><Attribute key='TRSUSE' value='test' /><Attribute key='REVACC' value='755915676410401' /><Attribute key='REVBNK' value='鎷涘晢閾惰娣卞湷鍒嗚钀ヤ笟閮�' /><Attribute key='REVNAM' value='浼佷笟缃戦摱鏂�20161053' /><Attribute key='REVCIT' value='鎴愰�????' /><Attribute key='BNKTYP' value='CMB' /><Attribute key='OPRMOD' value='3' /><Attribute key='PAYTYP' value='2' /></elXmlProperty></Section></elXmlIniPlus>
