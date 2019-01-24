"use strict";
/* In order to make this class use outside we need to export this class also to use it somewhere else
we need to import this class there
*/
exports.__esModule = true;
var Line = /** @class */ (function () {
    // classes have constructor function which automatically get called when we create instace of class using 'new'
    // Optional parameter : add '?' to make it optional parameter
    function Line(x, y) {
        this.x = x;
        this.y = y;
    }
    //functions
    Line.prototype.draw = function () {
        console.log("X:" + this.x + " Y: " + this.y);
    };
    Line.prototype.getDistance = function (anotherLine) {
        //.....
    };
    return Line;
}());
exports.Line = Line;
