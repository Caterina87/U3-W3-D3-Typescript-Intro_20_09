console.log("Hello world");

const inputName = document.querySelector("#name") as HTMLInputElement;
const inputAge = document.querySelector("#age") as HTMLInputElement;
const inputForm = document.querySelector("form")!;
const greeting = document.querySelector(".greeting") as HTMLDivElement;

interface PersonInterface {
  name: string;
  age: number;
}

class Person implements PersonInterface {
  constructor(public name: string, public age: number) {}

  greet() {
    return `Hi, my name is ${this.name} and I am ${this.age}`;
  }
}

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const person = new Person(inputName.value, inputAge.valueAsNumber);

  greeting.innerText = person.greet();

  inputForm.reset();
});

function doSomething<T>(arg: T): T {
  return arg;
}

doSomething<string>("3");

interface book<T> {
  id: number;
  name: string;
  data: T;
}

const abook: book<string> = {
  id: 1,
  name: "Title 1",
  data: "more data here",
};

const bbook: book<string[]> = {
  id: 2,
  name: "Title 2",
  data: ["Review 1", "Review 2"],
};

enum ManufacturerMake {
  TESLA,
  AUDI,
  MERCEDES,
  VOLVO,
  BMV,
}

const myCar = {
  year: 2020,
  make: ManufacturerMake.VOLVO,
};

console.log(myCar.make);
