const BaseUrl = "https://rickandmortyapi.com/api/character";
const ul = document.querySelector("ul");
const button = document.querySelector("button");

function bodycolor() {
  return Math.round(Math.random() * 12765);
}

button.addEventListener("click", () => {
  const body = document.querySelector("body");
  const t = bodycolor();
  body.style.backgroundColor = `#${t}`;
});

async function getdata() {
  try {
    const response = await fetch(BaseUrl);
    const data = await response.json();

    render(data.results);
    console.log(data.results);
  } catch (error) {
    console.log(error);
  }
}

getdata();

async function render(data) {
  ul.innerHTML = "";

  return data.map((items) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const div = document.createElement("div");
    const ptg = document.createElement("p");
    ptg.textContent = items.name;
    img.src = items.image;
    const alive = items.status;
    console.log(alive);

    if (alive === "Alive") {
      div.style.border = "5px solid green";
    } else if (alive == "unknown") {
      div.style.border = "5px solid red";
    } else if (alive == "Dead") {
      div.style.border = "5px solid black";
    }

    div.append(img, ptg);
    li.appendChild(div);

    ul.appendChild(li);
  });
}
