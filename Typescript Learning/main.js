"use strict";
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
exports.__esModule = true;
var message = 'Welcome back';
console.log(message);
var isBeginner = true; //boolean type
var total = 0; //number type
var name = 'Madhes'; //string type
var sentence = "I am ".concat(name, " ,am a beginner in TS"); //using a sentence along with a string type variable inside of it
//remember ``for writing sentence
console.log(sentence); //for printing the sentence in the console
var n = null;
var u = undefined;
// let isNew: boolean=null;
// let myName: string=undefined;
var list1 = [1, 2, 3]; //number array
var list2 = [1, 2, 3]; //number array both are same so thats upto us what to use
var person1 = ['Madhes', 23];
//tuple //order of datatypes should be matched //cant add extra values
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; //initializing enum values with name color-starts with 0
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 5] = "Red";
    Color1[Color1["Green"] = 6] = "Green";
    Color1[Color1["Blue"] = 7] = "Blue";
})(Color1 || (Color1 = {})); //intializing enum values but with giving a index value of our
var c = Color.Green; //initializing the enum value to 'c'
var c1 = Color1.Green; //6
console.log(c1);
var randomValue = 10;
randomValue = true;
randomValue = 'Madhes';
//with 'any' keyword we can assign any value to that variable without any error
var myVariable = 10;
//console.log(myVariable.name);
//myVariable(); //calling it as function
//myVariable.toUpperCase();
var myVariable1 = 10;
//function 
function hasName(obj) {
    return !!obj &&
        typeof obj == "object" &&
        "name" in obj;
}
if (hasName(myVariable1)) {
    console.log(myVariable1.name);
}
//myVariable1(); //calling it as function
//(myVariable as string).toUpperCase(); 
//since we declared the myVariable1 as unknown we are typecasting it to string using as.
var a;
a = 10;
a = true;
var multiType;
multiType = 23;
multiType = true; //we can use intelli support
var anyType;
anyType = 23;
anyType = true;
//functions in typescript               //return type
function add(num1, num2) {
    if (num2 === void 0) { num2 = 3; }
    if (num2) //hardcoded value
        return num1 + num2;
    else
        return num1;
}
add(10, 3); //calling the function with 2 parameters
add(10); //calling the function with 1 parameter
//Before Interface
function fullName(person) {
    console.log("".concat(person.firstName).concat(person.lastName));
}
var p = {
    firstName: 'Madhes',
    lastName: 'war'
};
//passing the values using 'p'
fullName(p);
function fullName1(person) {
    console.log("".concat(person.firstName).concat(person.lastName));
}
var p1 = {
    firstName: 'Madhes',
    lastName: 'war'
};
//passing the values using 'p1'
fullName1(p1);
//TS class
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name; //we are saying that employeeName is equal to name inside constructor
    }
    Employee.prototype.greet = function () {
        console.log("Good morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee('Madhesss');
console.log(emp1.employeeName);
emp1.greet();
//Inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Madhes');
m1.delegateWork;
m1.greet;
console.log(m1.employeeName);
//Access Specifier
//public: everywhere
//private: only within the class
//protected: Inside the class and the classes derived from it 
