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
