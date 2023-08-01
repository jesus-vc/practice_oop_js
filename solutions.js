//New variable for testing
const test = (a) => console.log(a);

/** Part One */
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return "Beep";
  }
  toString() {
    return `The vehicle is a ${this.make + " " + this.model} from ${
      this.year
    }.`;
  }
}
/** Part One Tests 
// let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
// test(myFirstVehicle);
// test(myFirstVehicle.honk()); // "Beep."
// test(myFirstVehicle.toString());
*/

/** Part Two */
class Car extends Vehicle {
  constructor(make, model, year, color) {
    super(make, model, year);
    this.color = color;
    this.numWheels = 4;
  }
  describe() {
    return super.toString() + ` Color is ${this.color}!`;
  }
}
/** Part Two Tests
// let x = new Car("Honda", "Monster Truck", 1999, "red");
// test(x.color);
// test(x.numWheels);
// test(x.describe());
 */

/** Part Three */
class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    return "VROOM!!!";
  }
}
/** Part Three Tests
let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
test(myFirstMotorcycle.toString());
test(myFirstMotorcycle.honk());
test(myFirstMotorcycle.revEngine());
test(myFirstMotorcycle.numWheels);
 */

/** Part Four */

class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }

  add(newClass) {
    if (this.vehicles.length < 2) {
      if (newClass instanceof Vehicle) {
        this.vehicles.push(newClass);
        return "Vehicle added!";
      } else {
        return "Only vehicles are allowed in here!";
      }
    } else {
      return "Sorry, we're full.";
    }
  }
}

//Part Four Tests
// let garage = new Garage(2);

// garage.add(new Car("Hyundai", "Elantra", 2015));
// test(garage.vehicles);

// test(garage.add("Taco"));

// garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
// test(garage.vehicles);

// test(garage.add(new Motorcycle("Honda", "Nighthawk", 2001)));
