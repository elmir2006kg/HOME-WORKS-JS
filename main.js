// 1 - task;

// const ptag = document.querySelector(".hello");

// setTimeout(() => {
//   ptag.textContent = "Ураа";
// }, 10000);

// task2;

// let y;
// const div = document.querySelector("div");

// function changercolor() {
//   y = Math.floor(Math.random() * 12852);
// }
// let r = setInterval(() => {
//   changercolor();
//   div.style.backgroundColor = "#" + y;
// }, 1000);

// setTimeout(() => {
//   clearTimeout(r);
// }, 60000);

// task - 3;

// const input = document.querySelector("input");
// const ptag2 = document.querySelector(".ptag2");
// const button = document.querySelector(".add");

// button.addEventListener("click", () => {
//   setInterval(() => {
//     if (inputvalue < 0) return;
//     ptag2.textContent = inputvalue--;
//   }, 1000);

//   let inputvalue = input.value;
//   input.value = "";
// });

// task - 4;

const input1 = document.querySelector(".input1");
let inputvalue1;
const span1 = document.querySelector(".span2");
const span2 = document.querySelector(".span1");
const twopoint = document.querySelector(".twopoint");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
let a;

input1.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    span2.style.display = "inline";
    twopoint.style.display = "inline";

    inputvalue1 = input1.value;
    span1.textContent = inputvalue1;
    let r = input3.value;

    if (inputvalue1 >= 9) {
      span2.style.display = "none";
    }
    start.addEventListener("click", () => {
      pause.style.display = "inline";
      start.style.display = "none";
      span3.textContent = inputvalue--;

      pause.addEventListener("click", () => {
        start.style.display = "inline";
        pause.style.display = "none";
        clearInterval(a);
        clearInterval(b);
      });

      a = setInterval(() => {
        if (inputvalue1 < 0) return;

        span1.textContent = inputvalue1--;
      }, 60000);
    });
  }
});

const input3 = document.querySelector(".input2");
const span3 = document.querySelector(".span3");
const restart = document.querySelector(".restart");
let inputvalue;
let b;
input3.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    inputvalue = input3.value;
    span3.textContent = inputvalue;

    start.addEventListener("click", () => {
      b = setInterval(() => {
        if (inputvalue < 1) {
          if (inputvalue1 < 0) return;
          span1.textContent = inputvalue1--;
          inputvalue = 59;
        }

        if (inputvalue < 0) return;

        span3.textContent = inputvalue--;
      }, 1300);
      restart.addEventListener("click", () => {
        span1.textContent = inputvalue1;
        let t = input3.value;
        inputvalue = t;
        span3.textContent = inputvalue--;
      });
    });
  }
});
