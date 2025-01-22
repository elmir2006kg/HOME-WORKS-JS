const createStudent = (firstName, lastName, age, university, faculty, gpa) => {
  return {
    firstName: firstName,
    lastName: lastName,
    age: age,
    education: {
      university: university,
      faculty: faculty,
      gpa: gpa,
    },
    sayHello: () => {
      console.log("Kubat Beishenov ");
    },
  };
};

const student = createStudent("Kubat", "Beishenov", 24, "ALATOO", "CS", 87);

console.log(student);

2;

let deleteKey = (object, key) => {
  let obiekt = {
    object: object,
  };
  if ("key" in obiekt) {
    delete obiekt.key;
    console.log(obiekt);
  } else {
    console.log(`ключ ${key} отсуствует`);
  }
};

console.log(deleteKey("object", "key"));

3; //
const enter = prompt("введите  имейл");
let sum = 5;
const uchenik = {
  name: "elmirbek",
  age: 18,
  email: "elmir2006@gmail.com",
  password: "12345",
};

if (uchenik.email !== enter) {
  alert("Извините, такого email не существует");
} else if (uchenik.email === enter) {
  let enter2 = prompt("Введите пароль");
  if (enter2 === uchenik.password) {
    let enter3 = +prompt("2+3=?");
    if (sum === enter3) {
      uchenik.sum = sum;
      alert(`Верно ваша премия ${sum}`);
    } else if (sum !== enter3) {
      alert("Неправильный ответ");
    }
  } else if (enter2 !== uchenik.password) {
    alert("Неверный пароль");
  }
}

console.log(uchenik);
