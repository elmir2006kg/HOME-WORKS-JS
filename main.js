firstUserName = "Alisher";
secondUserName = "Nooruz";
thirdUserName = "Jakshylyk";
fourthUserName = "Aziret";
firstUserPoint = 97;
secondUserPoint = 89;
thirdUserPoint = 75;
fourthUserPoint = 90;

console.log(`1.${firstUserName} - ${firstUserPoint} баллов из 100   `);
console.log(`2.${secondUserName} - ${secondUserPoint} баллов из 100   `);
console.log(`3.${thirdUserName} - ${thirdUserPoint} баллов из 100   `);
console.log(`4. ${fourthUserName} - ${fourthUserPoint} баллов из 100 `);
console.log(
  "Экзамендин орточо баллы: " +
    (firstUserPoint + secondUserPoint + thirdUserPoint + fourthUserPoint) / 4 +
    " балл"
);

let a = 4;

for (i = 1; i < 11; i++) {
  b = a * i;
  console.log(`${a} * ${i} = ${b}`);
}

console.log("");

let num = 4;
let num1 = 1 * num;
let num2 = 2 * num;
let num3 = 3 * num;
let num4 = 4 * num;
let num5 = 5 * num;
let num6 = 6 * num;
let num7 = 7 * num;
let num8 = 8 * num;
let num9 = 9 * num;
let num10 = 10 * num;

console.log(`${num} * 1 = ${num1}`);
console.log(`${num} * 2 = ${num2}`);
console.log(`${num} * 3 = ${num3}`);
console.log(`${num} * 4=  ${num4}`);
console.log(`${num} * 5 = ${num5}`);
console.log(`${num} * 6 = ${num6} `);
console.log(`${num} * 7 = ${num7}`);
console.log(`${num} * 8 = ${num8}`);
console.log(`${num} * 9 = ${num9}`);
console.log(`${num} * 10 = ${num10}`);

let zapros = prompt("Введите ваше имя");
let alert1 = alert("Вы успешно зарегистрировались");
let accept = confirm(
  "При перезагрузке сайта, введённые данные на форме будут очищены, Вы уверены что хотите перезагрузить?"
);

console.log(zapros);
console.log(accept);
