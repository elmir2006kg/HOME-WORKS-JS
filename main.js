// const h2tag = document.getElementById("main-heading");
// h2tag.textContent = "Popular products";
// h2tag.style.color = "green";
// h2tag.style.fontSize = "25px";

// const aside = document.querySelector("aside");
// aside.remove();
// const tagh3 = document.querySelector(".heading");
// tagh3.classList.remove("heading");

// --------------

const items = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/124/124021.png",
    title: "Twitter",
    description:
      "Тви́ттер» (англ. Twitter), в процессе ребрендинга в X, — американская социальная сеть. Это пятый по посещаемости сайт в мире и одна из крупнейших социальных сетей с 550 млн пользователей ежемесячно. В «Твиттере» пользователи публикуют",
    link: "https://x.com/?lang=ru",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpn0hzcLiN__4czT9GseRv0DIDVpIkbaE-w&s",
    title: "Instagram",
    description:
      "Instagram — это место назначения, ориентированное на мобильные устройства. Здесь люди публикуют фото и видео, общаются друг с другом и просматривают интересный контент. В ленте компании могут рассказать о своем бренде ",
    link: "https://ru.wikipedia.org/wiki/Instagram",
  },

  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8pNCroHSoglLJHYRzsxzk1fPkmDTJvE2ifA&s",
    title: "Telegram",
    description:
      "Telegram — самое популярное приложение для обмена мгновенными сообщениями в некоторых странах Европы, Азии и Африки. По словам Павла Дурова, на начало 2023 года Telegram стал вторым после WhatsApp мессенджером в мире по популярности.",
    link: "https://ru.wikipedia.org/wiki/Telegram",
  },
];
const Mainer = document.querySelector("main");
Mainer.style.display = "flex";
Mainer.style.width = "1000px";
Mainer.style.height = "800px";
Mainer.style.backgroundColor = "teal";
Mainer.style.justifyContent = "center";
Mainer.style.alignItems = "center";
Mainer.style.margin = "20px";

const div1 = document.createElement("div");
div1.style.width = "300px";
div1.style.height = "420px";
div1.style.backgroundColor = "skyblue";
div1.style.display = "flex";
div1.style.gap = "20px";
div1.style.flexDirection = "column";
div1.style.justifyContent = "center";
div1.style.alignItems = "center";
div1.style.margin = "20px";

const img1 = document.createElement("img");
img1.src = items[0].icon;
img1.style.width = "100px";
img1.style.height = "100px";

const description1 = document.createElement("p");
description1.textContent = items[0].description;
description1.style.marginLeft = "20px";

const link1 = document.createElement("a");
link1.textContent = items[0].link;
link1.href = items.link;

Mainer.append(div1);
div1.append(img1, description1, link1);

const buttonr = document.createElement("button");
Mainer.append(buttonr);
buttonr.style.width = "90px";
buttonr.style.height = "40px";
buttonr.style.borderRadius = "30px";
buttonr.textContent = "Get more";
buttonr.style.marginTop = "180px";
buttonr.style.backgroundColor = "brown";

buttonr.addEventListener("click", () => {
  const div2 = document.createElement("div");
  div2.style.width = "300px";
  div2.style.height = "420px";
  div2.style.display = "flex";
  div2.style.gap = "20px";
  div2.style.flexDirection = "column";
  div2.style.justifyContent = "center";
  div2.style.alignItems = "center";
  div2.style.backgroundColor = "pink";
  div2.style.margin = "20px";

  const img2 = document.createElement("img");
  img2.src = items[1].icon;
  img2.style.width = "100px";
  img2.style.height = "100px";

  const description2 = document.createElement("p");
  description2.textContent = items[1].description;
  description2.style.marginLeft = "20px";

  const link2 = document.createElement("a");
  link2.textContent = items[1].link;
  link2.href = items.link;

  Mainer.append(div2);
  div2.append(img2, description2, link2);

  buttonr.remove();
});

// //////

const div3 = document.createElement("div");
div3.style.display = "flex";
div3.style.flexDirection = "column";
div3.style.justifyContent = "center";
div3.style.alignItems = "center";
div3.style.gap = "20px";
div3.style.width = "300px";
div3.style.height = "420px";
div3.style.backgroundColor = "white";
div3.style.border = "4px solid black";
div3.style.margin = "20px";

const img3 = document.createElement("img");

img3.src = items[2].icon;
img3.style.width = "100px";
img3.style.height = "100px";

const description3 = document.createElement("p");
description3.textContent = items[2].description;
description3.style.marginLeft = "20px";

const link3 = document.createElement("a");
link3.textContent = items[2].link;
link3.href = items.link;

Mainer.append(div3);
div3.append(img3, description3, link3);
