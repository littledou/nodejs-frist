/**
 * util.inherits(constructor, superConstructor) 是一个实现对象间原型继承的函数。
JavaScript 的面向对象特性是基于原型的，与常见的基于类的不同。JavaScript 没有提供对象继承的语言级别特性，而是通过原型复制来实现的。
在这里我们只介绍 util.inherits 的用法，
Sub 仅仅继承了Base 在原型中定义的函数，而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承。
同时
 */

var util = require('util');

class Base {
    constructor() {
        this.name = 'base';
        this.base = 1991;
        this.sayHello = function () {
            console.log('hello ' + this.name);
        };
    }
    showName() {
        console.log(this.name);
    }
}

class Sub {
    constructor() {
        this.name = 'sub';
    }
}

util.inherits(Sub, Base);

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
// objSub.sayHello();
console.log(objSub);