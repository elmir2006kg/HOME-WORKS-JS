for (let i = 0; i < 100; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}

let a = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    a = a + i;
  }
}
console.log(a);

for (let i = 100; i > 0; --i) {
  console.log(i);
}

let input = +prompt("");
for (let i = input - 5; i >= 0; i--) {
  console.log(i);
}

for (let i = 10; i <= 50; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}

let userName = "Duolingo Green";
let searchChar = prompt("Enter ");
let counter = 0;
while (counter <= userName.length) {
  const curreenChar = userName.charAt(counter);
  if (curreenChar === searchChar) {
    console.log(`Оа ушундай char   ${counter} , бар `);
  }
  counter++;
}

let userNam = "Duolingo Green";
let searchigCh = "e";
let idName = userNam.length;
for (let count = 0; count <= idName; idName--) {
  const currentChar = userNam.charAt(idName);
  if (currentChar === searchigCh) {
    console.log("Оа ушундай char бар индескте");
  }
}

let keep = " ";
let i = 0;
let df = keep.length;
while (i <= 6) {
  i2 = 0;
  while (i2 < df) {
    keep = keep + " #";
    i2++;
  }
  i++;

  console.log(keep);
}

let xranit = " ";
let xranit2 = xranit.length;
for (let x = 0; x <= 6; x++) {
  for (let x2 = 0; x2 < xranit2; x2++) {
    xranit = xranit + "#";
  }
  console.log(xranit);
}

let n = "elmir";

function nam(myName) {
  let name = "hello " + myName;
  console.log(name);
}
nam(n);

j = 12;
function summa(v) {
  let summa = v + 10;
  console.log(summa);
}

summa(j);

let studentData = "Asyl Umarbek kyzy";
let studentData2 = studentData.length;
console.log(studentData2);

let guestAge = prompt("enter");

function callBack(accept) {
  if (accept === "18") {
    console.log("вход разрешен");
  } else {
    console.log("get out");
  }
}
