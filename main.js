let inputNumber = prompt("Введите число");

if (inputNumber === 10) {
  console.log("число 10");
} else {
  console.log("Незнаю какое число вы ввели но точно не 10");
}

console.log("");

let batir = prompt("введите квартиру");

if (batir <= 21) {
  console.log("подьезд-1");
} else if (batir <= 61) {
  console.log("подьезд-2");
} else if (batir <= 91) {
  console.log("подьезд-3");
} else {
  console.log("подьезды закончились");
}
let num0 = prompt("введите число");
if (num0 > 0 && num0 < 5) {
  console.log(true);
} else {
  console.log(false);
}

nameSamira = "Samira";
const hour1 = prompt("введите время");
if (hour1 == 6 || hour1 <= 12) {
  console.log("good morning " + nameSamira);
} else if (hour1 == 13 || hour1 <= 17) {
  console.log("good evening " + nameSamira);
}

let posetitel = prompt("Введите возраст");
if (posetitel < 6 || posetitel >= 65) {
  console.log("Арзандатуу");
} else {
  console.log("скидка жок");
}

let player1 = prompt("Выберите : камень , ножницы,бумага");

let player2 = prompt("Выберите : камень , ножницы,бумага ");

if (player1 === "ножницы" && player2 === "бумага") {
  console.log("player1 победил");
} else if (player1 === "бумага" && player2 === "камень") {
  console.log("player1 победил");
} else if (player1 === "камень" && player2 === "бумага") {
  console.log("player1 победил");
} else {
  console.log("player2 победил");
}

const number = 1;
a = number % 2;

if (number % 2 === 0) {
  console.log("Число чётное , остаток :" + a);
} else {
  console.log("Число нечётное, остаток " + a);
}

let num = 5;

num === 5 ? console.log("five") : console.log("not five");
