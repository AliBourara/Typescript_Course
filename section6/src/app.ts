type Admin = {
  name: string;
  privileges: string[];
};
type Employee = {
  name: string;
  starDate: Date;
};

// interface ElevatedEmpployee extends Employee,Admin {}
type ElevatedEmpployee = Admin & Employee;

const e1: ElevatedEmpployee = {
  name: "Link",
  privileges: ["Vase-smasher"],
  starDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmplyeeInsormation(emp: UnknownEmployee) {
  console.log("Name : " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges : " + emp.privileges);
  }
  if ("starDate" in emp) {
    console.log("StarDate : " + emp.starDate);
  }
}
printEmplyeeInsormation(e1);

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a Truck...");
  }
  loadCargo(amount: number) {
    console.log("Loading Cargo ... " + amount);
  }
}

type Vehicule = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicule(vehicule: Vehicule) {
  vehicule.drive();
  if (vehicule instanceof Truck) {
    vehicule.loadCargo(123);
  }
}

useVehicule(v1);
useVehicule(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}
interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed  :" + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });
// const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
const userInputElement = document.getElementById("user-input");
if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi there!";
}

interface ErrorContainer { // {email : 'Email not valid' , usernae: 'must start with letter'}

}