/* In order to make this class use outside we need to export this class also to use it somewhere else
we need to import this class there
*/

export class Line {
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

  getDistance(anotherLine: Line) {
    //.....
  }
}
