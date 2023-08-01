class Triangle {
  getArea() {
    return this.a * this.b;
  }
}

class Triangle2 {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  getArea() {
    return this.a * this.b;
  }
}

// let myt = new Triangle();
// myt.a = 3;
// myt.b = 9;

// console.log(myt.getArea());

// console.log(typeof myt);
// console.log(typeof Triangle);

let myTri2 = new Triangle2(3, 4);
console.log(myTri2);

console.log(myTri2.getArea());
