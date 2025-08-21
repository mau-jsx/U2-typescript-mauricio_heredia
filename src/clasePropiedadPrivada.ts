class Car {
  private make: string;

  constructor(make: string) {
    this.make = make;
  }

  getMake(): string {
    return this.make;
  }

  drive() {
    console.log(`Driving a ${this.make}`);
  }
}

let myCar = new Car("Toyota");
console.log(myCar.getMake());
