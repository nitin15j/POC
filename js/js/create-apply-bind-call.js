/* There are multiple ways we can create Objects in JS
1. Object Literal   -> var obj = {} - fastest and easy way amongs the other
2. new Operator     -> var obj = new Object()
3. constructor function     -> var obj = new Humman()
4. Object.create api -> var obj = Object.create(prototypeObject, propertyObject), in this api, it will
return new object with its prototype pointing towards the first argument
5. we majorly use this api to create inheritance in JS, this is Douglus crockford suggest way  
*/

function Human(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = 30;

  this.getFullName = function() {
    return this.firstName + " " + this.lastName;
  };
}

var sachin = new Human("Sachin", "Tendulkar");
var dhoni = new Human("Mahendra", "Dhoni");

var kohli1 = new Object(); // will create object with prototype pointing to Base JS Object
var kohli2 = Object.create(null); // will create Object with null prototype
var kohli3 = Object.create(Human.prototype); // will create Object with Human Prototype

debugger;
