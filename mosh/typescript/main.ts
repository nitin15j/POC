// importing line class from module
import { Line } from "./line";

import { LikeComponent } from "./like/like";

/* 1. Different Data type we have in Type Script */

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[];
let f: any[];

enum Color {
  Red,
  Green,
  Blue
}

/* 2. Type Assertion, does not change this variable at runtime. it helps you in intellisense only*/

let message;
message = "abc";
//let endsWithC = (<string>message).endsWith("c");
//let alternativeWay = (message as string).endsWith("c");

/* 3. Arrow functions, in other languages we call it Lambda function and in TS we call it Arrow function */

let log = function(message) {
  console.log(message);
};

let doLog = message => {
  console.log(message);
};

/* 4. Interfaces: helps to define the shape of any Object, should be used in defining the custom types. They can only have
 declaration/signature and can't have defination/implementation */

interface Point {
  x: number;
  y: number;
  drawing: () => void;
}

let drawPoint = function(point: Point) {
  //.........
};

/* 5. Classes .. There is a concept like Cohesion in OO, which means things which are related whould be part of one unit, 
they should go together. so Class groups variables(properties) and functions(method) that are highly related  */

class Point {
  //fields
  x: number;
  y: number;
  private z: number;

  // classes have constructor function which automatically get called when we create instace of class using 'new'
  // Optional parameter : add '?' to make it optional parameter
  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }
  //functions
  draw() {
    console.log("X:" + this.x + " Y: " + this.y);
  }

  getDistance(anotherPoint: Point) {
    //.....
  }
}

/* 6. Objects are instance of class */

let point: Point;
//point.draw(); // undefined
/* this will result in undefined becuase we have defined an custom type (class), unlike default types in TS if we are using
Custome type then we expecitly need to initialize it to get memory in space*/

let myPoint: Point = new Point(1, 2);
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

let line = new Line();
line.draw();

// Excercise of all above in Like folder

let johnLike: LikeComponent = new LikeComponent(3, false);
johnLike.onClick();
