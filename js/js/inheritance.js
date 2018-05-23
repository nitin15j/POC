function Human(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Human.prototype.getFullName = function() {
  return this.firstName + " " + this.lastName;
};

function Player() {
  this.age = 30;
}

function CricketPlayer() {
  this.age = 30;
}

//inheriting property and method of Human into Player

//Player.prototype = Object.create(Human.prototype);
Player.prototype = new Human();
CricketPlayer.prototype = Object.create(Human.prototype);
CricketPlayer.prototype.constructor = CricketPlayer;
debugger;
