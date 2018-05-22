function Shape() {
  alert("Shape()");
}

Shape.prototype.draw = function() {
  alert("Shape -> draw");
};

Shape.prototype.getHeight = function() {
  alert("Shape -> height");
};
