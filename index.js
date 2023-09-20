console.log("Hello world");
var inputName = document.querySelector("#name");
var inputAge = document.querySelector("#age");
var inputForm = document.querySelector("form");
var greeting = document.querySelector(".greeting");
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hi, my name is ".concat(this.name, " and I am ").concat(this.age);
    };
    return Person;
}());
inputForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var person = new Person(inputName.value, inputAge.valueAsNumber);
    greeting.innerText = person.greet();
    inputForm.reset();
});
function doSomething(arg) {
    return arg;
}
doSomething("3");
var abook = {
    id: 1,
    name: "Title 1",
    data: "more data here",
};
var bbook = {
    id: 2,
    name: "Title 2",
    data: ["Review 1", "Review 2"],
};
var ManufacturerMake;
(function (ManufacturerMake) {
    ManufacturerMake[ManufacturerMake["TESLA"] = 0] = "TESLA";
    ManufacturerMake[ManufacturerMake["AUDI"] = 1] = "AUDI";
    ManufacturerMake[ManufacturerMake["MERCEDES"] = 2] = "MERCEDES";
    ManufacturerMake[ManufacturerMake["VOLVO"] = 3] = "VOLVO";
    ManufacturerMake[ManufacturerMake["BMV"] = 4] = "BMV";
})(ManufacturerMake || (ManufacturerMake = {}));
var myCar = {
    year: 2020,
    make: ManufacturerMake.VOLVO,
};
console.log(myCar.make);
