// #region callback
// sum(display, 544, 8);

// function sum(callback, x, y) {
//   let result = x + y;
//   callback(result);
// }

// function display(result) {
//   console.log(result);
//   document.getElementById("myh1").textContent = result;
// }

// function subtract(callback, x, y) {
//   const result = x - y;
//   callback(result);
// }
// function showResult(result) {
//   console.log(result);
// }
// subtract(showResult, 55, 44);

// function multiplyAndCheck(callback, y, x) {
//   const result = y * x;
//   callback(result);
// }
// endregion calback

// function check(result) {
//   const n = result % 2;
//   console.log(n);

//   document.getElementById("myh1").textContent =
//     n == 0
//       ? `The result is ${result}. This number is even`
//       : `The result is ${result}. This number is not even`;
// }

// multiplyAndCheck(check, 7, 8);

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(duble);
// numbers.forEach(cube);

// numbers.forEach(display);

// function duble(element, index, array) {
//   array[index] = element * 2;
// }

// function triple(element, index, array) {
//   array[index] = element * 3;
// }

// function square(element, index, array) {
//   array[index] = Math.pow(element, 2);
// }

// function cube(element, index, array) {
//   array[index] = Math.pow(element, 3);
// }

// function display(element) {
//   console.log(element);
// }

// let fruits = ["apple", "orange", "banana", "coconut"];

// fruits.forEach(capitalize);
// fruits.forEach(display);

// function upper(element, index, array) {
//   array[index] = element.toUpperCase();
// }

// function lower(element, index, array) {
//   array[index] = element.toLowerCase();
// }

// function capitalize(element, index, array) {
//   array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }

// function display(element) {
//   console.log(element);
// }

// const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
// console.log(`Unformated date: ${dates}`);
// const formated = dates.map(format);
// console.log(`Formated date: ${formated}`);

// function format(element) {
//   const parts = element.split("-");
//   return `${parts[2]}/${parts[1]}/${parts[0]}`;
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7];

// let even = numbers.filter(isEven);
// let odd = numbers.filter(isOdd);

// console.log(odd);

// function isEven(element) {
//   return element % 2 === 0;
// }

// function isOdd(element) {
//   return element % 2 !== 0;
// }

// let numberss = [1, 2, 3, 4, 5, 6, 7];

// let n = numberss.filter((value) => value % 2 === 0);
// console.log(n);

// const ages = [12, 19, 25, 39, 46, 69, 99];

// let legalAge = ages.filter((value) => value > 25);
// console.log(legalAge);

// let myfruits = ["apple", "orange", "banana", "coconut", "pear"];

// let fav = myfruits.filter((fruit) => fruit.length < 5);
// console.log(fav);

// const coins = [12, 19, 25, 39, 46, 69, 99];

// let sum = coins.reduce((sum, current) => Math.max(sum + current));

// ccoins.reduce(max);

// function max(sum, current) {
//   return Math.max(sum, current);
// }

// console.log(sum);

// setTimeout(function name(param) {
//   console.log("hello");
// }, 3000);

// const num = [12, 19, 25, 39, 46, 69, 99];

// const filter = num.reduce(function (sum, current) {
//   return sum + current;
// });
// console.log(filter);

// setTimeout(() => console.log("hi"), 3000);

// let num = [12, 19, 25, 39, 46, 69, 99];

// const values = num.map((x) => Math.pow(x, 2));
// console.log(values);

// setTimeout(() => {
//   let delayed = num.map((x) => Math.pow(x, 2));
//   console.log(delayed);
// }, 3000);

// const qube = num.map((values) => Math.pow(values, 3));
// console.log(qube);

// const filter = num.filter((values) => values % 2 === 0);
// console.log(filter);

// const total = num.reduce((sum, current) => sum + current);
// console.log(total);

// const strings = ["apple", "banana", "cherry"];

// const upperCased = strings.map((x) => x.toUpperCase());
// console.log(upperCased);

// const bLetter = strings.filter((word) => word.startsWith("b"));
// console.log(bLetter);

// const one = strings.reduce((sum, current) => sum + " " + current);
// console.log(one);

// const numbers = [4, 9, 16, 25];
// const squareRoot = numbers.map((values) => Math.pow(values, 2));
// console.log(squareRoot);

// const odd = numbers.filter((values) => values % 2 === 0);
// console.log(odd);

// const t = numbers.reduce((x, y) => x * y);
// console.log(t);

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
// ];

// const ages = people.map((people) => people.age);
// console.log(ages);

// const older = people.filter((people) => people.age >= 30);
// console.log(older);

// const total = people.reduce((sum, current) => sum + current.age, 0);
// console.log(total);

// const questions = [
//   {
//     question:
//       "What is the difference between an adjustment code and a remark code?",
//     answer:
//       "Adjustment codes explain claim modifications, while remark codes provide clarifications.",
//   },
//   {
//     question: "What is the difference between HL7 and EDI?",
//     answer:
//       "HL7 is for clinical data exchange, EDI is for administrative transactions.",
//   },
// ];

// // const q = questions.map((sentences) => console.log(sentences.question));
// questions.map(q);

// function q(params) {
//   console.log(params.question);
// }

// const person = {
//   name: "ttt",
//   food: "hhh",
//   hello: function () {
//     console.log(`hi ${this.name}`);
//   },
// };
// person.hello();

// function Cars(model, make, year, color, speed) {
//   (this.model = model),
//     (this.make = make),
//     (this.year = year),
//     (this.color = color),
//     (this.speed = speed),
//     (this.drive = function () {
//       console.log(`you drive ${this.model} ${this.make}`);
//     });
// }

// const myCar = new Cars("dodge", "journey", 2017, "black", 220);

// myCar.drive();

// function Bicycle(brand, type, year, gearCount) {
//   this.type = type;
//   this.brand = brand;
//   this.year = year;
//   this.gearCount = gearCount;
//   this.ride = function () {
//     console.log(`You are riding a ${this.brand} ${this.type}`);
//   };
// }
// const myBike = new Bicycle("Giant", "mountain bike", 2020, 21);
// myBike.ride();

// function Book(title, author, yearPublished, genre) {
//   (this.title = title),
//     (this.author = author),
//     (this.yearPublished = yearPublished),
//     (this.genre = genre),
//     (this.getSummary = function () {
//       console.log(
//         `Title: ${title}, Author: ${author}, Genre: ${genre}, Published: ${yearPublished}`
//       );
//     }),
//     (this.age = function () {
//       console.log(`The book ${title} is ${2024 - yearPublished} years old.`);
//     });
// }

// const myBook = new Book(
//   "The Great Gatsby",
//   "F. Scott Fitzgerald",
//   1925,
//   "Fiction"
// );

// myBook.getSummary();
// myBook.age();

// function Movie(title, director, releaseYear, genre) {
//   (this.title = title),
//     (this.director = director),
//     (this.releaseYear = releaseYear),
//     (this.genre = genre),
//     (this.getDetails = function () {
//       console.log(
//         `Title: ${title}, Directed by: ${director}, Genre: ${releaseYear}, Released: ${genre}`
//       );
//     }),
//     (this.isClassic = function () {
//       const old = 2024 - releaseYear;
//       old > 20
//         ? console.log(`The movie ${title} is a classic!`)
//         : console.log(`The movie ${title} is not a classic yet.`);
//     });
// }

// const movie = new Movie("The Matrix", "Wachowski Brothers", 1999, "Sci-Fi");

// movie.isClassic();

// class Product {
//   constructor(price, name) {
//     this.price = price;
//     this.name = name;
//   }
//   display() {
//     console.log(`the price of ${this.name} is ${this.price}`);
//   }
//   calculateTax(tax) {
//     return this.price + this.price * tax;
//   }
// }
// const tax = 0.05;
// const productX = new Product(10, "shorts");

// productX.display();
// const total = productX.calculateTax(tax);
// console.log(total);

// class Reactangle {
//   constructor(width, height) {
//     this.height = height;
//     this.width = width;
//   }
//   getArea() {
//     return this.width * this.height;
//   }
//   getPerimeter() {
//     return 2 * (this.width + this.height);
//   }
//   isSquare() {
//     this.width === this.height
//       ? console.log("square")
//       : console.log("not square");
//   }
// }

// const calculateArea = new Reactangle(5, 10);
// console.log(calculateArea.getArea());
// console.log(calculateArea.getPerimeter());
// calculateArea.isSquare();

// class name {
//   constructor(parameters) {

//   }
// }

// class Products {
//   static v = 55;

//   static diameter(radius) {
//     return radius * this.v;
//   }
// }

// console.log(Products.v);
// console.log(Products.diameter(10));

// class User {
//   static count = 0;

//   constructor(username) {
//     this.username = username;
//     User.count++;
//   }
//   hello() {
//     console.log(`Hello my username is ${this.username}`);
//   }
//   static userCount() {
//     console.log(`There are ${User.count} users`);
//   }
// }

// const user1 = new User("Yuri");
// const user2 = new User("Yuri2");

// console.log(user1.username);
// user1.hello();
// user2.hello();
// User.userCount();

// class Car {
//   static count = 0;

//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//     Car.count++;
//   }

//   getCarInfo() {
//     console.log(`Car’s make and model is ${this.make} ${this.model}`);
//   }
//   static carCount() {
//     console.log(`${Car.count} car instances have been created`);
//   }
// }

// const car = new Car("Toyota", "Corolla");
// const car2 = new Car("Honda", "Civic");

// car.getCarInfo();
// car2.getCarInfo();

// Car.carCount();

// class Animal {
//   alive = true;

//   eat() {
//     console.log(`this ${this.name} is eating`);
//   }
//   sleep() {
//     console.log(`this ${this.name} is sleeping`);
//   }
// }

// class Rabbit extends Animal {
//   name = "rabbit";
//   run() {
//     console.log(`${this.name} can run fast`);
//   }
// }
// class Fish extends Animal {
//   name = "fish";
// }

// const rabbit = new Rabbit();
// const fish = new Fish();

// rabbit.alive = false;
// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep();

// console.log(fish.alive);
// console.log(fish.name);
// fish.sleep();
// rabbit.run();

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   move(speed) {
//     console.log(`The ${this.name} moves at a speed of ${speed} kmh`);
//   }
// }
// class Rabbit extends Animal {
//   constructor(name, age, runspeed) {
//     super(name, age);
//     this.runspeed = runspeed;
//   }
//   run() {
//     console.log(`This ${this.name} can run`);
//     super.move(this.runspeed);
//   }
// }
// class Fish extends Animal {
//   constructor(name, age, swimspeed) {
//     super(name, age);
//     this.swimspeed = swimspeed;
//   }
//   swim() {
//     console.log(`This ${this.name} can swim`);
//     super.move(this.swimspeed);
//   }
// }

// const fish = new Fish("fish", 2, 3);
// const rabbit = new Rabbit("rabbit", 12, 13);

// rabbit.run();
// fish.swim();

// class Vehicle {
//   static totalVehicles = 0;

//   constructor(name, speed) {
//     this.name = name;
//     this.speed = speed;
//     Vehicle.totalVehicles++;
//   }
//   static vehicleCount() {
//     console.log(`Total number of vehicles created: ${Vehicle.totalVehicles}`);
//   }
//   move(distance) {
//     console.log(
//       `The vehicle ${this.name} moves ${distance} km at a speed of ${this.speed} km/h.`
//     );
//   }
// }

// class Car extends Vehicle {
//   constructor(name, speed, fuelType) {
//     super(name, speed);
//     this.fuelType = fuelType;
//   }
//   drive() {
//     console.log(`This ${this.name} runs on ${this.fuelType}`);
//     super.move(this.speed);
//   }
// }
// class Bicycle extends Vehicle {
//   constructor(name, speed, gearCount) {
//     super(name, speed);
//     this.gearCount = gearCount;
//   }
//   pedal() {
//     console.log(`This ${this.name} has ${this.gearCount} gears`);
//     super.move(this.speed);
//   }
// }

// const car = new Car("Car", 120, "Petrol");
// const bicycle = new Bicycle("Bicycle", 30, 21);

// bicycle.pedal();
// car.drive();
// Vehicle.vehicleCount();

// class Employee {
//   static totalEmployees = 0;

//   constructor(name, salary) {
//     this.name = name;
//     this.salary = salary;
//     Employee.totalEmployees++;
//   }
//   static employeeCount() {
//     console.log(
//       `Total number of employees created: ${Employee.totalEmployees}`
//     );
//   }
//   getDetails() {
//     console.log(
//       `The employee’s name is ${this.name} and salary ${this.salary} USD`
//     );
//   }
// }
// class Manager extends Employee {
//   constructor(name, salary, teamSize) {
//     super(name, salary);
//     this.teamSize = teamSize;
//   }
//   manage() {
//     console.log(
//       `Manager ${this.name} manages a team of ${this.teamSize} people.`
//     );
//   }
// }

// class Developer extends Employee {
//   constructor(name, salary, programmingLanguage) {
//     super(name, salary);
//     this.programmingLanguage = programmingLanguage;
//   }
//   code() {
//     console.log(`Developer ${this.name} codes in ${this.programmingLanguage}.`);
//   }
// }

// const employee = new Employee("Yuri", 2800);
// const developer = new Developer("Bob", 60000, "JavaScript");
// const manager = new Manager("Alice", 10, 100);

// manager.getDetails(); // Output: "Employee name is Alice and salary is 80000."
// manager.manage(); // Output: "Manager Alice manages a team of 10 people."
// developer.getDetails(); // Output: "Employee name is Bob and salary is 60000."
// developer.code(); // Output: "Developer Bob codes in JavaScript."
// Employee.employeeCount();

// class Reactangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   set width(newWidth) {
//     if (newWidth > 0) {
//       this._width = newWidth;
//     } else {
//       console.log("Width must be positive number");
//     }
//   }

//   set height(newHeight) {
//     if (newHeight > 0) {
//       this._height = newHeight;
//     } else {
//       console.log("height must be positive number");
//     }
//   }

//   get width() {
//     return this._width;
//   }

//   get height() {
//     return this._height;
//   }
//   get area() {
//     return this._width * this._height;
//   }
// }

// const rectangle = new Reactangle(1, 2);

// rectangle.width = 5;
// rectangle.height = 10;

// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);

// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   set firstName(newfirstName) {
//     if (typeof newfirstName === "string" && newfirstName.length > 0) {
//       this._firstName = newfirstName;
//     } else {
//       console.log("newfirstName error");
//     }
//   }

//   set lastName(newlastName) {
//     if (typeof newlastName === "string" && newlastName.length > 0) {
//       this._lastName = newlastName;
//     } else {
//       console.log("newlastName error");
//     }
//   }

//   set age(newage) {
//     if (typeof newage === "number" && newage.length >= 0) {
//       this._age = newage;
//     } else {
//       console.log("newage error");
//     }
//   }

//   get firstName() {
//     return this._firstName;
//   }
//   get lastName() {
//     return this._lastName;
//   }
//   get age() {
//     return this._age;
//   }
// }
// const person = new Person("yuri", "mark", 44);
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);

// class Car {
//   constructor(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }
//   set brand(newBrand) {
//     if (typeof newBrand === "string" && newBrand.length > 0) {
//       this._brand = newBrand;
//     } else {
//       console.log("brand and model must be non-empty strings");
//     }
//   }

//   set model(newmodel) {
//     if (typeof newmodel === "string" && newmodel.length > 0) {
//       this._model = newmodel;
//     } else {
//       console.log("model and model must be non-empty strings");
//     }
//   }

//   set year(newyear) {
//     if (typeof newyear === "number" && newyear >= 1886) {
//       this._year = newyear;
//     } else {
//       console.log("must be a number greater than or equal to 1886");
//     }
//   }

//   get brand() {
//     return this._brand;
//   }
//   get model() {
//     return this._model;
//   }
//   get year() {
//     return this._year;
//   }
// }

// const car = new Car("toyota", "corola", 1900);
// const car2 = new Car("Tesla", "Model S", 2021);

// console.log(car2.brand);
// console.log(car2.model);
// console.log(car2.year);

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// const colors = ["red", "green", "blue"];

// const [one, ...rest] = colors;

// console.log(one, rest);

// function display({ fisrt, second, ages, job = "it" }) {
//   console.log(fisrt, second, ages, job);
// }

// const person = {
//   name: "Yuri",
//   last: "Mark",
//   age: 55,
// };

// const person2 = {
//   name: "Yuri2",
//   last: "Mark2",
//   age: 552,
// };

// const { name, last, age, job = "IT" } = person;
// console.log(name, job);

// display(person);

// const person = {
//   fullname: "yuri mark",
//   age: 66,
//   isStudent: true,
//   hobbies: ["karate", "fishing", "cooking"],
//   address: {
//     street: "123 street",
//     city: "Kyiv",
//     country: "Ukraine",
//   },
// };

// for (const property in person.address) {
//   console.log(person.address[property]);
// }

// class Person {
//   constructor(name, age, ...address) {
//     this.name = name;
//     this.age = age;
//     this.address = new Address(...address);
//   }
// }

// class Address {
//   constructor(street, city, country) {
//     this.street = street;
//     this.city = city;
//     this.country = country;
//   }
// }
// const person1 = new Person("yuri", 30, "123 street", "Kyiv", "Ukraine");

// const person2 = new Person("yuri2", 302, "1232 street", "Kyiv2", "Ukraine2");

// const person3 = new Person("yuri3", 303, "1233 street", "Kyiv3", "Ukraine3");

// console.log(person3.address.city);

// class Company {
//   constructor(name, foundedYear, ...office) {
//     this.name = name;
//     this.foundedYear = foundedYear;
//     this.office = new Office(...office);
//   }
// }

// class Office {
//   constructor(street, city, country) {
//     this.street = street;
//     this.city = city;
//     this.country = country;
//   }
// }
// console.log(constructor);
// console.log(
//   new Company("Adimen", 1998, "123 street", "Kyiv", "Ukraine").office.city
// );

// const fruits = [
//   {
//     name: "Apple",
//     color: "Red",
//     sweetness: 8,
//     isTropical: false,
//   },
//   {
//     name: "Banana",
//     color: "Yellow",
//     sweetness: 7,
//     isTropical: true,
//   },
//   {
//     name: "Mango",
//     color: "Orange",
//     sweetness: 9,
//     isTropical: true,
//   },
//   {
//     name: "Grapes",
//     color: "Purple",
//     sweetness: 6,
//     isTropical: false,
//   },
// ];

// fruits.forEach((fruit) => console.log(fruit.color));

// const fruitcolor = fruits.map((fruit) => fruit.color);
// console.log(fruitcolor);

// const yellow = fruits.filter((fruit) => fruit.color === "Yellow");
// console.log(yellow);

// const max = fruits.reduce((max, fruit) =>
//   fruit.sweetness > max.sweetness ? fruit : max
// );
// console.log(max);

// const min = fruits.reduce((min, current) =>
//   current.sweetness < min.sweetness ? current : min
// );
// console.log(min);

// const total = fruits.reduce((sum, current) => sum + current.sweetness, 0);
// console.log(total);

// const products = [
//   {
//     name: "Laptop",
//     price: 1000,
//     quantity: 2,
//   },
//   {
//     name: "Phone",
//     price: 600,
//     quantity: 5,
//   },
//   {
//     name: "Tablet",
//     price: 400,
//     quantity: 3,
//   },
//   {
//     name: "Monitor",
//     price: 300,
//     quantity: 7,
//   },
// ];

// const totalValue = products.reduce(
//   (sum, current) => sum + current.price * current.quantity,
//   0
// );

// const expensive = products.reduce(
//   (max, current) => (current.price > max.price ? current : max),
//   products[0] // Start with the first product as the initial value
// );

// const totalAmount = products.reduce(
//   (max, current) => max + current.quantity,
//   0
// );

// console.log("Total value of all products: " + totalValue);
// console.log("Most expensive product: " + expensive);
// console.log(totalAmount);

// const students = [
//   {
//     name: "Alice",
//     score: 85,
//     age: 20,
//   },
//   {
//     name: "Bob",
//     score: 92,
//     age: 17,
//   },
//   {
//     name: "Charlie",
//     score: 88,
//     age: 19,
//   },
//   {
//     name: "Dave",
//     score: 76,
//     age: 22,
//   },
//   {
//     name: "Eve",
//     score: 95,
//     age: 18,
//   },
// ];

// // 1. Calculate the average score
// const totalScore = students.reduce((sum, current) => sum + current.score, 0);
// const average = totalScore / students.length;

// // 2. Find the student with the highest score
// const highest = students.reduce((highest, current) =>
//   current.score > highest.score ? current : highest
// );

// // 3. Count students aged 18 or older
// const ageCount = students.reduce(
//   (count, current) => (current.age >= 18 ? count + 1 : count),
//   0
// );

// console.log("Average score:", average);
// console.log("Student with the highest score:", highest.name);
// console.log("Number of students 18 or older:", ageCount);

// const students = [
//   {
//     name: "Alice",
//     grade: 85,
//     age: 20,
//   },
//   {
//     name: "Bob",
//     grade: 92,
//     age: 17,
//   },
//   {
//     name: "Charlie",
//     grade: 88,
//     age: 19,
//   },
//   {
//     name: "Dave",
//     grade: 76,
//     age: 22,
//   },
//   {
//     name: "Eve",
//     grade: 95,
//     age: 18,
//   },
// ];

// // Task 1: Calculate the average grade of all students.
// // Task 2: Find the student with the highest grade.
// // Task 3: Count the total number of students older than 18 years.

// const avarage = students.reduce((total, current) => total + current.grade, 0);
// console.log(avarage / students.length);

// const highestGrade = students.reduce((highest, current) =>
//   current.grade > highest.grade ? current : highest
// );
// console.log(highestGrade.name);

// let myfruits = ["apple", "orange", "banana", "coconut", "pear"];

// let num = [3, 7, 4, 10];

// myfruits.sort();
// num.sort((a, b) => a - b);

// console.log(myfruits);
// console.log(num);

// const students = [
//   {
//     name: "Alice",
//     grade: 85,
//     age: 20,
//   },
//   {
//     name: "Eve",
//     grade: 95,
//     age: 18,
//   },
//   {
//     name: "Bob",
//     grade: 92,
//     age: 17,
//   },
//   {
//     name: "Dave",
//     grade: 76,
//     age: 22,
//   },
//   {
//     name: "Charlie",
//     grade: 88,
//     age: 19,
//   },
// ];

// students.sort((a, b) => a.age - b.age);
// console.log(students);

// students.sort((a, b) => a.name.localeCompare(b.name));
// console.log(students);

// const books = [
//   { title: "The Catcher in the Rye", year: 1951, author: "J.D. Salinger" },
//   { title: "To Kill a Mockingbird", year: 1960, author: "Harper Lee" },
//   { title: "1984", year: 1949, author: "George Orwell" },
//   { title: "Pride and Prejudice", year: 1813, author: "Jane Austen" },
//   { title: "The Great Gatsby", year: 1925, author: "F. Scott Fitzgerald" },
// ];

// // Task 1: Sort the books by the publication year in ascending order.
// // Task 2: Sort the books by the title in alphabetical order.
// // Task 3: Sort the books by the author's name in alphabetical order.
// books.sort((a, b) => a.year - b.year);
// console.log(books);

// books.sort((a, b) => a.title.localeCompare(b.title));
// console.log(books);

// books.sort((a, b) => a.author.localeCompare(b.author));
// console.log(books);

// const cards = [3, 6, 5, 4, 7, 8, 9, 4, 2, 3, 4, 6, 8];

// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const random = Math.floor(Math.random() * (i + 1));
//     console.log("I is " + i);
//     console.log("random is " + random);
//     [array[i], array[random]] = [array[random], array[i]];
//   }
// }

// shuffle(cards);
// console.log(cards);

// const fruits = [
//   "Apple",
//   "Banana",
//   "Mango",
//   "Grapes",
//   "Orange",
//   "Peach",
//   "Pineapple",
//   "Pear",
// ];

// function shuffleFruits(array) {
//   for (let index = 0; index < array.length; index++) {
//     const random = Math.floor(Math.random() * array.length);

//     // array[index], (array[random] = array[random]), array[index];
//     [array[index], array[random]] = [array[random], array[index]];
//   }
// }

// shuffleFruits(fruits);
// console.log(fruits);

// fruits.sort((a, b) => a.localeCompare(b));
// console.log("sorted:" + fruits);

//#region date object

// let now = new Date();
// console.log(now);

//#endregion

//#region closure

// function outer() {
//   let mesage = "hello";
//   function inner() {
//     console.log(mesage);
//   }
//   inner();
// }
// outer();

// function createcounter() {
//   let count = 0;

//   function inrement() {
//     count++;
//     console.log(count);
//   }

//   function getcount() {
//     return count;
//   }

//   return { inrement, getcount };
// }

// const counter = createcounter();
// counter.inrement();
// counter.inrement();
// counter.inrement();

// console.log(counter.getcount());

// function createGame() {
//   let score = 0;

//   function increase(points) {
//     score = score + points;
//     console.log(points);
//   }

//   function decrease(points) {
//     score = score - points;
//     console.log(points);
//   }

//   function show() {
//     return score;
//   }

//   return { increase, decrease, show };
// }

// const game = createGame();
// game.increase(1);
// game.increase(2);
// game.decrease(3);

// console.log(game.show());
//#endregion

//#region settimeout
// let timeoutid;

// function starttimer() {
//   document.getElementById("myh1").textContent = "wait...";
//   const three = "three seconds passed";
//   timeoutid = setTimeout(function () {
//     document.getElementById("myh1").textContent = three;
//   }, 3000);
// }

// function cleartime() {
//   clearTimeout(timeoutid);
//   document.getElementById("myh1").textContent = "you canceled timer";

//   console.log("cleared");
// }

//#endregion

// function timeNow() {
//   const dt = new Date();

//   const hours = dt.getHours().toString().padStart(2, 0);
//   const minutes = dt.getMinutes().toString().padStart(2, 0);
//   const seconds = dt.getSeconds().toString().padStart(2, 0);
//   timestring = `${hours}:${minutes}:${seconds}`;
//   document.getElementById("clock").textContent = timestring;
// }
// timeNow();
// setInterval(timeNow, 1000);

//#region stopwatch

// const display = document.getElementById("display");
// let timer = null;
// let startTime = 0;
// let elapsedTime = 0;
// let isRunning = false;

// function start() {
//   if (!isRunning) {
//     startTime = Date.now() - elapsedTime;
//     timer = setInterval(update, 10);
//     isRunning = true;
//   }
// }
// function stop() {
//   if (isRunning) {
//     clearInterval(timer);
//     elapsedTime = Date.now() - startTime;
//     console.log(elapsedTime);
//     isRunning = false;
//   }
// }

// function reset() {
//   timer = null;
//   startTime = 0;
//   elapsedTime = 0;
//   isRunning = false;
//   display.textContent = "00:00:00:00";
// }

// function update() {
//   const currentTime = Date.now();
//   elapsedTime = currentTime - startTime;

//   let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
//   let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
//   let seconds = Math.floor((elapsedTime / 1000) % 60);
//   let milliseconds = Math.floor((elapsedTime % 1000) / 10);

//   hours = String(hours).padStart(2, "0");
//   minutes = String(minutes).padStart(2, "0");
//   seconds = String(seconds).padStart(2, "0");
//   milliseconds = String(milliseconds).padStart(2, "0");

//   display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
// }
//#endregion
//#region module export
// import { PI, getCircum, getArea, getVolume } from "./math.js";

// console.log(PI);

// const circum = getCircum(10);
// const area = getArea(10);
// const volume = getVolume(10);

// console.log(circum.toFixed(2));
// console.log(area.toFixed(2));
// console.log(volume.toFixed(2));
//#endregion

//#region asynchronous code

// func1(rest);

// function func1(callback) {
//   setTimeout(function () {
//     console.log("1");
//     callback();
//   }, 3000);
// }

// function rest() {
//   console.log("2");
//   console.log("3");
//   console.log("4");
// }

// function fetchUserData(callback) {
//   console.log("Fetching user data...");

//   setTimeout(() => {
//     const user = {
//       name: "John Doe",
//       age: 28,
//       email: "john@example.com"
//     };

//     callback(user);
//   }, 3000);
// }

// function processUserData(user) {
//   console.log("User Details:");
//   console.log(`Name: ${user.name}`);
//   console.log(`Age: ${user.age}`);
//   console.log(`Email: ${user.email}`);
// }

// fetchUserData(processUserData);

// function fetchMovieData(callback, name) {
//   console.log(`Fetching data for ${name}...`);

//   setTimeout(() => {
//     const movie = {
//       title: "Aliens",
//       director: "Scott",
//       year: 1979,
//     };
//     callback(movie);
//   }, 2000);
// }

// function show(movie) {
//   console.log(movie.title);
//   console.log(movie.director);
//   console.log(movie.year);
// }

// fetchMovieData(show, "Yuri");
//#endregion

//#region try catch

// try {
//   console.log("start");
// } catch (error) {
//   console.log(error);
// }
// console.log("end");
// endregion

// region Calculator

const input = document.getElementById("display");

function appendtodisplay(input) {
  display.value = display.value + input;
}

function cleardisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "error";
  }
}

// endregion
