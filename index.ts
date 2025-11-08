class Car {
  model: string;
  year: number;
  color: string;

  constructor(model: string, year: number, color: string) {
    this.model = model;
    this.year = year;
    this.color = color;
  }

  changeColor(newColor: string) {
    this.color = newColor;
  }

  displayInfo() {
    console.log(`Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`);
  }
}

const car1 = new Car("BMW", 2020, "Black");
car1.displayInfo();
car1.changeColor("Red");
car1.displayInfo();

class Student {
  firstName: string;
  lastName: string;
  grade: number;

  constructor(firstName: string, lastName: string, grade: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  changeGrade(newGrade: number) {
    this.grade = newGrade;
  }
}

const student1 = new Student("Ali", "Valiyev", 9);
console.log(student1.getFullName());
student1.changeGrade(10);
console.log(student1);


class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number) {
    this.balance += amount;
    console.log(`Hisobingizga ${amount} so‘m qo‘shildi.`);
  }

  withdraw(amount: number) {
    if (amount > this.balance) {
      console.log("Balansda yetarli mablag‘ yo‘q!");
    } else {
      this.balance -= amount;
      console.log(`${amount} so‘m yechildi.`);
    }
  }

  getBalance() {
    return this.balance;
  }
}

const acc = new BankAccount(500000);
acc.deposit(200000);
acc.withdraw(100000);
console.log(acc.getBalance());

class UserAccount {
  public username: string;
  private password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  changePassword(newPassword: string) {
    this.password = newPassword;
  }

  protected checkActive() {
    console.log(`${this.username} faolligi tekshirildi.`);
  }
}

const user1 = new UserAccount("bunyodbek", "12345");
user1.changePassword("abcde");


interface Animal {
  name: string;
  age: number;
  speak(): void;
}

class Dog implements Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`${this.name} says: Woof!`);
  }
}

class Cat implements Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`${this.name} says: Meow!`);
  }
}

const dog = new Dog("Rex", 3);
dog.speak();

const cat = new Cat("Murka", 2);
cat.speak();

interface RentalItem {
  id: number;
  name: string;
  pricePerDay: number;
  rentItem(): void;
  returnItem(): void;
}

class CarRental implements RentalItem {
  id: number;
  name: string;
  pricePerDay: number;

  constructor(id: number, name: string, pricePerDay: number) {
    this.id = id;
    this.name = name;
    this.pricePerDay = pricePerDay;
  }

  rentItem() {
    console.log(`${this.name} ijaraga olindi.`);
  }

  returnItem() {
    console.log(`${this.name} qaytarildi.`);
  }
}

class HouseRental implements RentalItem {
  id: number;
  name: string;
  pricePerDay: number;

  constructor(id: number, name: string, pricePerDay: number) {
    this.id = id;
    this.name = name;
    this.pricePerDay = pricePerDay;
  }

  rentItem() {
    console.log(`${this.name} uyi ijaraga olindi.`);
  }

  returnItem() {
    console.log(`${this.name} uyi qaytarildi.`);
  }
}


abstract class Calculator {
  abstract add(a: number, b: number): number;
  abstract subtract(a: number, b: number): number;
  abstract multiply(a: number, b: number): number;
}

class SimpleCalculator extends Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
  subtract(a: number, b: number): number {
    return a - b;
  }
  multiply(a: number, b: number): number {
    return a * b;
  }
}

const calc = new SimpleCalculator();
console.log(calc.add(2, 3));
console.log(calc.multiply(4, 5));

abstract class Shape {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract getArea(): number;
  abstract getPerimeter(): number;
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super("Aylana");
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super("To‘rtburchak");
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const rect = new Rectangle(5, 10);
console.log(rect.getArea());
console.log(rect.getPerimeter());


class Counter {
  static count = 0;

  constructor() {
    Counter.count++;
  }

  static getCount() {
    return Counter.count;
  }
}

const c1 = new Counter();
const c2 = new Counter();
console.log(Counter.getCount());

class Logger {
  private static instance: Logger;
  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string) {
    console.log("Log:", message);
  }
}

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();
console.log(logger1 === logger2); // true


class Account {
  accountNumber: number;
  holderName: string;
  balance: number;

  constructor(accountNumber: number, holderName: string, balance: number) {
    this.accountNumber = accountNumber;
    this.holderName = holderName;
    this.balance = balance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  withdraw(amount: number) {
    if (amount > this.balance) console.log("Yetarli mablag‘ yo‘q!");
    else this.balance -= amount;
  }

  checkBalance() {
    console.log(`${this.holderName} balansi: ${this.balance}`);
  }
}

class AdminAccount extends Account {
  closeAccount() {
    console.log(`${this.holderName} hisob yopildi.`);
  }
}

class CustomerAccount extends Account {
  viewBalance() {
    console.log(`${this.holderName} balansi: ${this.balance}`);
  }
}

class Product {
  name: string;
  price: number;
  category: string;

  constructor(name: string, price: number, category: string) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
}

class DiscountedProduct extends Product {
  discount: number;

  constructor(name: string, price: number, category: string, discount: number) {
    super(name, price, category);
    this.discount = discount;
  }

  getDiscountedPrice() {
    return this.price - (this.price * this.discount) / 100;
  }
}

abstract class Character {
  abstract attack(): void;
  abstract defend(): void;
}

class Warrior extends Character {
  attack() {
    console.log("Warrior qilich bilan hujum qildi!");
  }
  defend() {
    console.log("Warrior qalqon bilan himoyalandi!");
  }
}

class Mage extends Character {
  attack() {
    console.log("Mage sehrli hujum qildi!");
  }
  defend() {
    console.log("Mage himoya sehrini ishlatdi!");
  }
}