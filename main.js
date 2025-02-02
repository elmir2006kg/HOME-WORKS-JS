// // Home Work

const user = {
  id: 1,
  first_name: "Garrott",
  last_name: "Eberdt",
  email: "geberdt0@wp.com",
  gender: "Male",
  ip_address: "49.230.15.110",
  isAdmin: true,
};

const { id, first_name, last_name, email, gender, ip_address, isAdmin } = user;
console.log(first_name);

const animals = ["apple", "banana", "lemon", "kiwi", true];

const [apple, banana, lemon, kiwi, True] = animals;

const workers = [
  {
    id: 1,
    name: "Emile",
    lastname: "Van Weedenburg",
    email: "evanweedenburg0@technorati.com",
  },
  {
    id: 2,
    name: "Orv",
    lastname: "Gretton",
    email: "ogretton1@about.me",
  },
];
workers.forEach(({ id, name, lastname, email }) => {
  console.log([id, name, lastname, email]);
});

const product = {
  id: 1,
  details: {
    title: "Phone",
    price: 300,
  },
};

const { title, price } = product.details;
console.log(title, price);

const posts = {
  name: "post",
  isLaoding: true,

  byId: {
    post1: {
      id: "post1",
      author: "user1",
      body: "......",
      comments: ["comment1", "comment2"],
    },
    posts2: {
      id: "post2",
      author: "user2",
      body: "......",
      comments: ["comment3", "comment4", "comment5"],
    },
  },
  allIds: ["post1", "post2"],
};
// task1

const copyOfPosts2 = Object.assign({}, { ...posts });
console.log(copyOfPosts2);

// task2

const copyOfPosts = JSON.parse(JSON.stringify({ ...posts }));

console.log(copyOfPosts);

//////////////
// task3

const post = {
  name: "posts",
  isLaoding: true,
  id: "post1",
  author: "user1",
  body: "......",
  comments: ["comment1", "comment2"],
};

const { comments: color, hello, ...rest } = post;
console.log(rest);

// color равен  ['comment1', 'comment2']

// hello равен undefined потомучто нет такого ключа в post  .

// rest  равен {name: 'posts', isLaoding: true, id: 'post1', author: 'user1', body: '......'}

// task-4

const comments = ["comment3", "comment4", "comment5", "comment1"];

const [Undefined, comment1, ...rest2] = comments;
console.log(comment1);

// undefined  Uncaught SyntaxError: Identifier 'undefined' has already been declared (at main2.js:1:1) ке барабар
// undefined тти перменный катары берсе болбойт спец типтерди  переменный катары берсе болбойт

//comment1 "comment4" ко барабар болуш керек эле

// rest   "comment5", "comment1" ге барабар болот эле
