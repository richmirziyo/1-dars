// amaliyot 2

// 1

const ism = prompt("Isminggizni krting");
const yosh = prompt("Yoshingizni krting");

let tuglganYil = 2025 - yosh;
let oy = yosh * 12;
let hafta = ((yosh * 365) / 7).toFixed(0);
let kun = yosh * 365;
let soat = kun * 24;
let daqiqa = soat * 60;
let soniya = daqiqa * 60;

const result = `Qadrli ${ism}. Siz ${tuglganYil} yilda tug'lgansiz va siz ${oy} oy, ${hafta} hafta, ${kun} kun, ${soat} soat, ${daqiqa} daqiqa, ${soniya} soniya yashagansiz.`;

alert(result);

// 2

const ims = prompt("Ismni krting");

const ismlar = ["Alisher", "Nurmuhammad", "Hayrulla"];
if (ismlar.includes(ism)) {
  alert(`Ha ${ism}mi bor.😊`);
} else {
  alert(`Afsuski ${ism}mi topilmadi.😔`);
}

// 3
const ismlar1 = ["Alisher", "Nurmuhammad", "Hayrulla"];
let i = 0;
while (i < ismlar1.length) {
  let result = ismlar1[i] + "bek";
  console.log(result);
  i++;
}

// 4

const viloyatNomi = prompt("Iltmos viloyat nomini yozing!");

switch (viloyatNomi) {
  case "Farg'ona":
    alert("Farg'ona viloyatida 2 mln aholi bor.");
    break;
  case "Andijon":
    alert("Anidijon viloyatida 2.5 mln aholi bor.");
    break;
  case "Namangan":
    alert("Namangan viloyatida 2.5 mln aholi bor.");
    break;
  default:
    alert(
      `Afsuski ${viloyatNomi} viloyati topilmadi. Keyinchalik qo'shlishi mumkin!`
    );
}

// 5

const belgilar = prompt(" Iltmos text yozing!");

let meyor = 20;

if (belgilar.length > meyor) {
  alert(
    `Siz eng ko'pi bilan ${meyor}ta belgi yozshinggiz mumkin, lekin siz ${
      belgilar.length
    } ta belgi yozgansiz. Bu meyotidan ${belgilar.length - meyor} ta ko'p.`
  );
} else {
  alert(
    `Siz eng ko'pi bilan ${meyor}ta belgi yozshinggiz mumkin edi lekin siz ${
      belgilar.length
    } ta belgi yozgansiz. Sizda yana  ${
      meyor - belgilar.length
    }ta yozish imkoni bor.`
  );
}

// Amalyot 3

// 1

const myArray = [[false, true], [1, 2], 99, "yaxshi"];

for (let i = 0; i < myArray.length; i++) {
  if (typeof myArray[i] == "string") {
    console.log("String index:", i);
  }
}

// 2

const data = [[1, 2, 3], "qizil", [4, 5, 6], true, false];

data.forEach((item) => {
  const res = Array.isArray(item);
  if (res) {
    item.forEach((num) => {
      newData.push(num);
    });
  }
});

// 3

const checkData = [null, "false", 0, 99, false, undefined, "", NaN, "0"];
const falsey = [];

checkData.forEach((item) => {
  if (!item) {
    falsey.push(item);
  }
});

// 4

const word = "fargona";
const splitWord = word.split("").reverse();
let newWord = "";

for (let i = 0; i < splitWord.length; i++) {
  newWord += splitWord[i];
}

// 5

const words = "AsSSalomu AlAYkum YaxSimisizlar";
const splitWords = words.split(" ");
let newWords = "";

splitWords.forEach((item) => {
  const boshi = item.charAt().toLocaleLowerCase();
  const davomi = item.slice(1).toUpperCase();

  newWords += " " + boshi + davomi;
});

// 6
const numbers = [-1, 87, 4, 3.1, -5.5, Infinity, 0, 1, 2, 0.9];
let naturalNumber = 0;
numbers.forEach((num) => {
  if (num >= 0.0 && Math.floor(num) === num && num !== Infinity && num !== 0) {
    naturalNumber += num;
  }
});

// 7

const words1 = "Qalesiz yaxshimisiz ? Yaxshimi ishlar ?";

let splitWords1 = words1.split("");

let counter = 0;
splitWords1.forEach((word) => {
  if (word == "a" || word == "A") {
    counter++;
  }
});

console.log(`So'raliyotgan harf: ${counter} marta ishtirok etgan.`);

// 8

const types = [21.1, "Roziya", "array", ["I am array"], null, true, 214];

const newTypes = [];

types.forEach((type) => {
  newTypes.push(typeof type);
});

// 9
const word1 = "Uzbekistan";
word.lastIndexOf(word1.slice(-1)) + 1;

// 10

const number = [1, 2, 3, 4, 5];

let result1 = [];

number.forEach((num, i) => {
  result1.push(num + i);
});

// 11

let counter1 = 0;
for (let i = 1; i <= 10; i++) {
  counter += i;
}

// 12

let number1 = 9;

for (let i = 1; i <= 10; i++) {
  let reusult = number1 * i + 1;
  console.log(reusult);
}

// 13

let numbers1 = [1, 2, 3, 4, 5];
let results = [];

const reverseFunc = (arr) => {
  arr.forEach((num) => {
    results.push(num * -1);
  });
};
reverseFunc(numbers1);
console.log(results);

// 14

const results1 = [];

const fizzBuzzFunc = function (number) {
  for (let i = 1; i <= number; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      results1.push("FizzBuzz");
    } else if (i % 5 == 0) {
      results1.push("Buzz");
    } else if (i % 3 == 0) {
      results1.push("Fizz");
    } else {
      results1.push(i);
    }
  }
};

// 15

const Obj = {
  name: "Mirziyobek",
  lastName: "Murodilov",
  age: 16,
  region: "Fergana",
  isMerried: false,
  job: "Programmer",
  haqida: function () {
    return `
      Assalomu Alaykum, Mening ismim ${this.name}, Familyam ${
      this.lastName
    }. Yoshim ${this.age}da. ${this.region}da yashayaman. ${
      this.job
    } bo'lib faoliyat olib boraman. ${
      this.isMerried ? "Uylanganman" : "Hali uylganmaganman"
    }
    `;
  },
};
