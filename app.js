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
