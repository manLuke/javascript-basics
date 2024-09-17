// variables, data types, operators

function greetUser() {
  const name = prompt("Zadejte své jméno:");
  alert(`Ahoj, ${name}!`);
}

function sumTwoNumbers() {
  const num1 = parseFloat(prompt("Zadejte první číslo:"));
  const num2 = parseFloat(prompt("Zadejte druhé číslo:"));
  const sum = num1 + num2;
  alert("Součet je: " + sum);
}

function compareTwoNumbers() {
  const num1 = parseFloat(prompt("Zadejte první číslo:"));
  const num2 = parseFloat(prompt("Zadejte druhé číslo:"));
  if (num1 > num2) {
    alert(num1 + " je větší než " + num2);
  } else if (num1 < num2) {
    alert(num2 + " je větší než " + num1);
  } else {
    alert("Čísla jsou stejná.");
  }
}

// conditional expressions

function checkEvenOrOdd() {
  const num = parseInt(prompt("Zadejte číslo:"));
  if (num % 2 === 0) {
    alert("Číslo je sudé.");
  } else {
    alert("Číslo je liché.");
  }
}

function checkAge() {
  const age = parseInt(prompt("Zadejte svůj věk:"));
  if (age >= 18) {
    alert("Uživatel je plnoletý.");
  } else if (age >= 15 && age < 18) {
    const yearsToAdult = 18 - age;
    alert(`Uživatel bude plnoletý za ${yearsToAdult} roků.`);
  } else {
    alert("Uživatel je mladší 15 let.");
  }
}

// loops

function printNumbers() {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}

// arrays

const names = ["Adam", "David", "Honza", "Tomáš", "Jana", "Verča", "Alena", "Anna"];

function printNames(arr) {
  arr.forEach((name) => console.log(name));
}

function sortNames(arr) {
  return arr.sort();
}

function calculateAvarageOfArrayOfRandomNumbers() {
  const numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const average = sum / numbers.length;
  console.log(`Average: ${average}`);
}

// functions

function greet(name) {
  return `Ahoj, ${name}!`;
}

function sortNumbers(arr) {
  return arr.sort((a, b) => a - b);
}

// objects

const person = {
  name: "Adam",
  age: 25,
  introduce() {
    console.log(`Ahoj, jsem ${this.name} a je mi ${this.age} let.`);
  },
};

const car = {
  brand: "Škoda",
  model: "Octavia",
  year: 2020,
  getDescription() {
    return `Auto: ${this.brand} ${this.model}, rok výroby ${this.year}.`;
  },
};

const books = [
  {
    title: "Nesnesitelná lehkost bytí",
    author: "Milan Kundera",
    year: 1984,
  },
  {
    title: "Válka s mloky",
    author: "Karel Čapek",
    year: 1935,
  },
];

function printBookNames(arr) {
  arr.forEach((book) => console.log(book.title));
}

// DOM manipulation
let count = 0;
function enableCounter() {
  const countBtn = document.getElementById("counterBtn");
  const counter = document.getElementById("counter");

  countBtn.addEventListener("click", () => {
    count++;
    counter.textContent = count;
  });
}

function handleFormSubmit(event) {
  event.preventDefault(); // Prevent default form submission
  const username = document.getElementById("username").value;
  const usernameOutput = document.getElementById("usernameOutput");
  usernameOutput.textContent = `Vaše jméno: ${username}!`;
}

function enableFormSubmit() {
  const form = document.getElementById("nameForm");
  form.addEventListener("submit", handleFormSubmit);
}

function calculate(operation) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const resultElement = document.getElementById("result");
  let result;

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num1 / num2;
      break;
  }

  resultElement.textContent = `Výsledek: ${result}`;
}

// Add event listeners to calculator buttons
function enableCalculator() {
  document.getElementById("addBtn").addEventListener("click", () => calculate("add"));
  document.getElementById("subtractBtn").addEventListener("click", () => calculate("subtract"));
  document.getElementById("multiplyBtn").addEventListener("click", () => calculate("multiply"));
  document.getElementById("divideBtn").addEventListener("click", () => calculate("divide"));
}

// greetUser();
// sumTwoNumbers();
// compareTwoNumbers();
// checkEvenOrOdd();
// checkAge();
// printNumbers();
// printNames(names);
// console.log(sortNames(names));
// calculateAvarageOfArrayOfRandomNumbers();
// console.log(greet("Adam"));
// console.log(sortNumbers([5, 2, 8, 1, 4]));

enableCounter();
enableFormSubmit();
enableCalculator();
