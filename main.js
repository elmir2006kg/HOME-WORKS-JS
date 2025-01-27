const numbers = [1, 2, 3, 4, 5];

const newnumber = numbers.map((sum) => {
  return sum * sum;
});
console.log(newnumber);

// 2//////
const users = [
  { firstName: "John ", lasNmae: "Obaam", age: 34, gender: "male" },
  { firstName: "John ", lasNmae: "Obaam", age: 34, gender: "male" },
  { firstName: "John ", lasNmae: "Obaam", age: 34, gender: "male" },
  { firstName: "John ", lasNmae: "Obaam", age: 34, gender: "male" },
];

const newsUs = users.map((a) => {
  return {
    fullName: a.firstName + a.lasNmae,
    age: a.age,
    gender: a.gender,
  };
});

console.log(newsUs);

const num = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];
let r = [];

const n = num.filter((f) => f % 2 === 0);
console.log(n);

const use = [
  { firstName: "John ", lasNmae: "Obaam", age: 34, gender: "male" },
  { firstName: "Johnita ", lasNmae: "Obaam", age: 34, gender: "female" },
  { firstName: "John ", lasNmae: "Obaam", age: 34, gender: "male" },
  { firstName: "Johnita ", lasNmae: "Obaam", age: 34, gender: "female" },
];

const userNew = use.filter((g) => {
  return g.gender === "female";
});
console.log(userNew);

const nu = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];

let h = 0;
nu.forEach((g) => {
  if (g % 2 !== 0) {
    h = h + g;
  }
});
console.log(h);

const user = [
  { firstName: "John ", lasNmae: "Obaam", age: 34, gender: "male" },
  { firstName: "Johnita ", lasNmae: "Obaam", age: 34, gender: "female" },
  { firstName: "Naruto", lasNmae: "Obaam", age: 34, gender: "male" },
  { firstName: "Johnita ", lasNmae: "Obaam", age: 34, gender: "female" },
];

const u = user.find((j) => j.firstName === "Naruto");

console.log(u);

const nk = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];

const t = nk.findIndex((p) => {
  return p === 34;
});

console.log(t);

const result = [
  {
    id: "ny13b48",
    firstName: "John",
    lastName: "Obama",
    age: 32,
    gender: "Male",
  },
  {
    id: "ny13b42",
    firstName: "Jo",
    lastName: "Obama",
    age: 31,
    gender: "Male",
  },
  {
    id: "ny13b41",
    firstName: "Jon",
    lastName: "Obama",
    age: 34,
    gender: "Male",
  },
  {
    id: "ny13b42",
    firstName: "Joh",
    lastName: "Obama",
    age: 30,
    gender: "Male",
  },
];

const newResult = result.reduce((acc, value) => {
  acc[value.id] = value;
  delete value.id;
  return acc;
}, {});

console.log(newResult);
