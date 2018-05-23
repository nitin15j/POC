/*
More information can be taken from here : https://hackernoon.com/prototypes-in-javascript-5bba2990e04b
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

/*
On executing the above code JavaScript engine will create two copy of constructor 
function each for sachin and dhoni.
i.e. every object created using the constructor function will have it’s own copy of properties and methods.
It doesn’t make sense to have two instances of function fullName that do the same thing. Storing separate instances
of function for each objects results into wastage of memory. 
We will see as we move forward how we can solve this issue.
*/

/*
Using Prototypes to solve above problem

When a function is created in JavaScript, JavaScript engine adds a prototype property to the function. 
This prototype property is an object (called as prototype object) has a constructor property by default. 
constructor property points back to the function on which prototype object is a property.
We can access the function’s prototype property using the syntax functionName.prototype.
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
debugger;
