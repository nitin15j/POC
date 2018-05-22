function Circle() {
  alert("Circle()");
}
debugger;

Circle.prototype = Object.create(Shape.prototype);
//Circle.parent = Shape.prototype;
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
  // debugger;
  //this.__proto__.draw();
  // this.parent.draw();
  //this.prototype.draw();
  alert("Circle -> draw");
};
