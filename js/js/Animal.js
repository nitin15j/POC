function Animal(name) {
  this.name = name;

  this.getColor = function() {
    console.log("Color of the Animal");
  };
}

Animal.prototype.getType = function() {
  console.log("Type Of Animal");
};

function Dog() {}

Dog.prototype = new Animal();
