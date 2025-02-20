const BaseUrl = "https://d47df39b75e74366.mokky.dev/items";

const input = document.querySelector("input");
const addbtn = document.querySelector("button");
const ul = document.querySelector("ul");

document.addEventListener("DOMContentLoaded", async () => {
  await getData();
});

addbtn.addEventListener("click", async (event) => {
  event.preventDefault();

  const inputValue = input.value.trim();
  if (inputValue !== "") {
    const newTodo = {
      id: Date.now().toString(),
      title: inputValue,
      bool: false,
    };
    await Post(newTodo);
    input.value = "";
  }
});

async function Post(object) {
  try {
    const response = await fetch(BaseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(object),
    });

    getData();
  } catch (error) {
    console.error("Ошибка:", error);
  }
}

async function getData() {
  try {
    const response = await fetch(BaseUrl);
    const data = await response.json();
    render(data);
  } catch (error) {
    console.error("Ошибка:", error);
  }
}

function render(tasks) {
  ul.innerHTML = "";

  tasks.forEach(({ title, id, bool }) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const div2 = document.createElement("div2");
    const ptag = document.createElement("span");
    const checkbox = document.createElement("input");
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "delet";
    ptag.textContent = title;

    li.className = "li";
    div.className = "divOfLi";
    deleteBtn.className = "deletebtn";
    ptag.classList.add("ptag");
    div2.className = "div2";

    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.checked = bool;
    if (bool) {
      ptag.className = "line";
    }

    checkbox.addEventListener("change", async () => {
      chekboxes(id, checkbox.checked);
    });

    deleteBtn.addEventListener("click", async () => {
      deleteItem(id);
    });
    div2.append(checkbox, deleteBtn);
    div.append(ptag, div2);
    li.appendChild(div);
    ul.appendChild(li);
  });
}

async function deleteItem(id) {
  try {
    const response = await fetch(`${BaseUrl}/${id}`, {
      method: "DELETE",
    });

    getData();
  } catch (error) {
    console.error(error);
  }
}

async function chekboxes(id, checked) {
  try {
    const response = await fetch(`${BaseUrl}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bool: checked }),
    });

    getData();
  } catch (error) {
    console.error(error);
  }
}
