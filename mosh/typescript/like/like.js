"use strict";
exports.__esModule = true;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_noOfLikes, _islikeButtonSelected) {
        this.noofLikes = _noOfLikes;
        this.isLikeButtonSelected = _islikeButtonSelected;
    }
    LikeComponent.prototype.onClick = function () {
        if (this.isLikeButtonSelected) {
            this.noofLikes--;
            this.isLikeButtonSelected = false;
        }
        else {
            this.noofLikes++;
            this.isLikeButtonSelected = true;
        }
        console.log("no. of likes : " + this.noofLikes + ", button is on: " + this.isLikeButtonSelected);
    };
    Object.defineProperty(LikeComponent.prototype, "noOfLikes", {
        get: function () {
            return this.noOfLikes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "isLikeButtonSelectec", {
        get: function () {
            return this.isLikeButtonSelected;
        },
        enumerable: true,
        configurable: true
    });
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
