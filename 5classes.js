var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TypeScript = /** @class */ (function () {
    function TypeScript(version) {
        this.version = version;
    }
    TypeScript.prototype.info = function (name) {
        return "[".concat(name, "]: Typescript version is ").concat(this.version);
    };
    return TypeScript;
}());
/* class Car {
    readonly model:string
    readonly numberOfWheels: number = 4

    constructor(theModel:string){
        this.model = theModel
        
    }
} */
// More elegant way to implement this.
// Absolutely equal to the code we have before lines 15 - 23
var Car1 = /** @class */ (function () {
    function Car1(model) {
        this.model = model;
        this.numberOfWheels = 4;
    }
    return Car1;
}());
// =========================
// Modifiers
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = ''; // if we are not use any modifier the default will be public
        this.color = 'black'; // public is available for all instances
        this.go();
    }
    Animal.prototype.go = function () {
        console.log('Go');
    }; //'black' is default in this case
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
        //this.go()            Not available here because property is private
    };
    return Cat;
}(Animal));
var cat = new Cat();
cat.setVoice('test');
console.log(cat.color);
// cat.voice not available here because it is protected 
// here we can work only through the function setVoice
//===============================
// Abstract classes
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponent.prototype.render = function () {
        console.log('Component on render');
    };
    AppComponent.prototype.info = function () {
        return 'This is info';
    };
    return AppComponent;
}(Component));
