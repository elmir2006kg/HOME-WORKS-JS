const button = document.querySelector("button");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

let Arra = [];

button.addEventListener("click", (event) => {
  event.preventDefault();
  const inputvalue = input.value;
  if (!inputvalue) {
    alert("input is empty");
  } else {
    const a = {
      id: Date.now().toString(),
      value: inputvalue,
    };
    Arra.push(a);
    render(Arra);
    input.value = "";
  }
  window.addEventListener("offline", () => {
    localStorage.setItem("array", JSON.stringify(Arra));
  });

  window.addEventListener("beforeupload", () => {
    window.addEventListener("online", () => {
      localStorage.getItem(JSON.parse(Arra));
      console.log(a);
    });
  });
});

function render(data) {
  ul.innerHTML = "";
  data.map((data) => {
    const delet = document.createElement("button");
    const li = document.createElement("li");
    const ptag = document.createElement("p");
    const divin = document.createElement("div");
    const divin2 = document.createElement("div");
    const inputin = document.createElement("input");
    const modalofcontainer = document.querySelector(".modalofcontainer");
    const button1 = document.querySelector(".button1");
    const button2 = document.querySelector(".button2");

    inputin.type = "checkbox";
    divin.className = "innerdiv";
    divin2.className = "innerdiv2";
    delet.className = "delete ";
    ptag.className = "ptag";

    ptag.textContent = data.value;
    delet.textContent = "delete";

    // ////
    inputin.addEventListener("change", () => {
      setTimeout(() => {
        modalofcontainer.style.display = "block";
      }, 500);
      if (inputin.checked) {
        ptag.style.textDecorationLine = "line-through";
        ptag.style.textDecorationColor = " black";

        button1.addEventListener("click", () => {
          doo(data.id);
          modalofcontainer.style.display = "none";
        });
        button2.addEventListener("click", () => {
          modalofcontainer.style.display = "none";
        });
      } else {
        ptag.style.textDecorationLine = "none";
        ptag.style.textDecorationColor = "none";
        modalofcontainer.style.display = "none";
      }
    });
    ////
    divin2.append(inputin, delet);
    divin.append(ptag, divin2);
    li.appendChild(divin);
    ul.appendChild(li);

    delet.addEventListener("click", () => {
      doo(data.id);
    });
  });
}

function doo(id) {
  Arra = Arra.filter((item) => {
    return item.id !== id;
  });
  render(Arra);
}
