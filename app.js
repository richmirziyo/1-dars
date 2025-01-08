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


