const Body = document.querySelector("body");
Body.style.backgroundColor = "skyblue";
Body.style.display = "flex";
Body.style.justifyContent = "center";
Body.style.alignItems = "center";
Body.style.width = "1040px";
Body.style.height = "740px";

const Maintag = document.createElement("main");
Maintag.style.backgroundColor = "white";
Maintag.style.width = "940px";
Maintag.style.height = "580px";
Maintag.style.borderRadius = "30px";
Maintag.style.display = "flex";
Maintag.style.flexDirection = "column";
Maintag.style.alignItems = "center";

const h1tag = document.createElement("h1");
h1tag.style.color = "darkblue";
h1tag.innerText = "TODO-LIST";

Maintag.appendChild(h1tag);

document.body.appendChild(Maintag);
const div1 = document.createElement("div");
div1.style.marginBottom = "30px";
Maintag.append(div1);

const inputtag = document.createElement("input");
inputtag.value = "Enter new todo...";
inputtag.addEventListener("click", () => {
  inputtag.value = "";
});

inputtag.style.color = "gray";
inputtag.style.width = "440px";
inputtag.style.height = "45px";
inputtag.style.border = "2px solid darkblue";
div1.append(inputtag);

const button1 = document.createElement("button");
button1.textContent = "ADD";
button1.style.width = "110px";
button1.style.height = "45px";
button1.style.borderRadius = "30px";
button1.style.marginLeft = "10px";
button1.style.backgroundColor = "DeepPink";
button1.style.color = "white";
button1.style.fontSize = "20px";
div1.append(button1);

button1.addEventListener("click", () => {
  const List = document.createElement("div");
  const innerPtag = document.createElement("p");
  const buttonin = document.createElement("button");

  List.style.width = "600px";
  List.style.height = "25px";
  List.style.margin = "10px";

  List.style.backgroundColor = "DodgerBlue";
  List.style.display = "flex";
  List.style.justifyContent = "space-between";
  List.style.padding = "27px";

  innerPtag.innerText = inputtag.value;
  innerPtag.style.color = "white";
  innerPtag.style.marginTop = "1px";
  innerPtag.style.fontSize = "20px";

  buttonin.textContent = "DELETE";
  buttonin.style.width = "90px";
  buttonin.style.height = "40px";
  buttonin.style.borderRadius = "40px";
  buttonin.style.marginTop = "-10px";
  buttonin.style.backgroundColor = "Tomato";
  buttonin.style.color = "white";
  buttonin.style.fontSize = "20px";

  Maintag.appendChild(List);
  List.append(innerPtag, buttonin);
  inputtag.value = "";

  buttonin.addEventListener("click", () => {
    List.remove();
  });
});

////
