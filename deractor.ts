import "reflect-metadata";

// 类装饰器

function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
  return class extends constructor {
      newProperty = "new property";
      hello = "override";
  }
}

@classDecorator
class Greeter {
  property = "property";
  hello: string;
  constructor(m: string) {
      this.hello = m;
  }
}

// 方法装饰器

function enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      descriptor.enumerable = value;
  };
}
// console.log(new Greeter("world"));

class Greeter1 {
  greeting: string;
  constructor(message: string) {
      this.greeting = message;
  }

  @enumerable(false)
  greet() {
      return "Hello, " + this.greeting;
  }
}

// 访问器装饰器

class Point {
  private _x: number;
  private _y: number;
  constructor(x: number, y: number) {
      this._x = x;
      this._y = y;
  }

  @configurable(false)
  get x() { return this._x; }

  @configurable(false)
  get y() { return this._y; }
}

function configurable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      descriptor.configurable = value;
  };
}

// 属性装饰器

class Greeter3 {
  @format("Hello, %s")
  greeting: string;

  constructor(message: string) {
      this.greeting = message;
  }
  greet() {
      let formatString = getFormat(this, "greeting");
      return formatString.replace("%s", this.greeting);
  }
}

const formatMetadataKey = Symbol("format");

function format(formatString: string) {
    return Reflect.metadata(formatMetadataKey, formatString);
}

function getFormat(target: any, propertyKey: string) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}

// 属性装饰器

const requiredMetadataKey = Symbol("required");

function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}

function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    let method = descriptor.value;
    descriptor.value = function () {
        let requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
        if (requiredParameters) {
            for (let parameterIndex of requiredParameters) {
                if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
                    throw new Error("Missing required argument.");
                }
            }
        }

        return method.apply(this, arguments);
    }
}

// 三斜线指令
/// <reference path="..." />