// task number-1
function zadacha1(x, y) {
  return console.log(x, y);
}

const zadaCha1 = function (x, y) {
  return console.log(x, y);
};

zadaCha1(1, 2);

const zadacHa1 = (x, y) => {
  return console.log(x, y);
};

// task number-2
function zadacha2(x, y) {
  if (x % 2 === 0 && y % 2 === 0) {
    console.log(`${x} и ${y} четные`);
  } else {
    console.log("Один из операндов не четный или оба операнда нечетные ");
  }
}

const zadacHa2 = function (x, y) {
  if (x % 2 === 0 && y % 2 === 0) {
    console.log(`${x} и ${y} четные`);
  } else {
    console.log("Один из операндов не четный или оба операнда нечетные ");
  }
};
zadacha2(2, 3);

const zadaСha2 = (x, y) => {
  if (x % 2 === 0 && y % 2 === 0) {
    console.log(`${x} и ${y} четные`);
  } else {
    console.log("Один из операндов не четный или оба операнда нечетные ");
  }
};

// task-3

const loop1 = (count, count2) => {
  let keep = 0;
  for (count; count < count2; count++) {
    if (count % 2 === 0) {
      keep = keep + count;
    }
  }
  console.log(keep);
};
loop1(3, 200);

const loop2 = function (count, count2) {
  let keep = 0;
  for (count; count < count2; count++) {
    if (count % 2 === 0) {
      keep = keep + count;
    }
  }
  console.log(keep);
};
loop2(1, 100);
function loop3(count, count2) {
  let keep = 0;
  for (count; count < count2; count++) {
    if (count % 2 === 0) {
      keep = keep + count;
    }
  }
  console.log(keep);
}
loop3(10, 200);

// task-4

function findChar(word, char) {
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) === char) {
      console.log(`${true}, ${char}  находится под индексом ${i}`);
    } else {
      console.log(false);
    }
  }
}

findChar("Bill gates", "e");

const findchar = (word, char) => {
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) === char) {
      console.log(`${true}, ${char}  находится под индексом ${i}`);
    } else {
      console.log(false);
    }
  }
};
findchar("erer", "r");

const findcHar = function (word, char) {
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) === char) {
      console.log(`${true}, ${char}  находится под индексом ${i}`);
    } else {
      console.log(false);
    }
  }
};
findcHar("dev", "v");

// task-5

function stringReturn(returnWord) {
  let lengthOfReturnword = returnWord.length;
  let keep = " ";
  for (let i = 0; i <= lengthOfReturnword; lengthOfReturnword--) {
    keep = keep + returnWord.charAt(lengthOfReturnword);
  }
  console.log(keep);
}

stringReturn("hello");

const strinGreturn = function (returnWord) {
  let lengthOfReturnword = returnWord.length;
  let keep = " ";
  for (let i = 0; i <= lengthOfReturnword; lengthOfReturnword--) {
    keep = keep + returnWord.charAt(lengthOfReturnword);
  }
  console.log(keep);
};

const strinreturn = (returnWord) => {
  let lengthOfReturnword = returnWord.length;
  let keep = " ";
  for (let i = 0; i <= lengthOfReturnword; lengthOfReturnword--) {
    keep = keep + returnWord.charAt(lengthOfReturnword);
  }
  console.log(keep);
};
