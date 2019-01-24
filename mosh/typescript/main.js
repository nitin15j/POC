"use strict";
exports.__esModule = true;
// importing line class from module
var line_1 = require("./line");
var like_1 = require("./like/like");
/* 1. Different Data type we have in Type Script */
var a;
var b;
var c;
var d;
var e;
var f;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
/* 2. Type Assertion, does not change this variable at runtime. it helps you in intellisense only*/
var message;
message = "abc";
//let endsWithC = (<string>message).endsWith("c");
//let alternativeWay = (message as string).endsWith("c");
/* 3. Arrow functions, in other languages we call it Lambda function and in TS we call it Arrow function */
var log = function (message) {
    console.log(message);
};
var doLog = function (message) {
    console.log(message);
};
var drawPoint = function (point) {
    //.........
};
/* 5. Classes .. There is a concept like Cohesion in OO, which means things which are related whould be part of one unit,
they should go together. so Class groups variables(properties) and functions(method) that are highly related  */
var Point = /** @class */ (function () {
    // classes have constructor function which automatically get called when we create instace of class using 'new'
    // Optional parameter : add '?' to make it optional parameter
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    //functions
    Point.prototype.draw = function () {
        console.log("X:" + this.x + " Y: " + this.y);
    };
    Point.prototype.getDistance = function (anotherPoint) {
        //.....
    };
    return Point;
}());
/* 6. Objects are instance of class */
var point;
//point.draw(); // undefined
/* this will result in undefined becuase we have defined an custom type (class), unlike default types in TS if we are using
Custome type then we expecitly need to initialize it to get memory in space*/
var myPoint = new Point(1, 2);
myPoint.draw();
/* 7. Access modifiers helps in controlling the access of class variables from outside
=> public, private, protected....
by default all members are public
*/
/* 8. Modules... also called type defination... if you have 100 of classes then you can't have put all the stuff in a
single file, in TS each file is a module,
Module help you in organization of different code
Angular module helps in organizing small features area in one place
if a TS file have a import or export statment that file is a module in TS
for module ex. look for line.ts
*/
var line = new line_1.Line();
line.draw();
// Excercise of all above in Like folder
var johnLike = new like_1.LikeComponent(3, false);
johnLike.onClick();
