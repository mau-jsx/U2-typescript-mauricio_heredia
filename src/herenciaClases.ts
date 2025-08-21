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

class ElectricCar extends Car {
  batteryLife: number;

  constructor(make: string, batteryLife: number) {
    super(make);
    this.batteryLife = batteryLife;
  }

  charge() {
    console.log("El coche se está cargando.");
  }
}

let myElectricCar = new ElectricCar("Tesla", 100);
myElectricCar.drive();
myElectricCar.charge();
