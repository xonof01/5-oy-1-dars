// const massiv = ["olma", "anor", "shaftoli", "uzum", "banan", "qovun"];

// const yangilash = massiv
//   .filter(soz => soz.length >= 5)
//   .map(soz => soz.charAt(0).toUpperCase() + soz.slice(1));

// console.log(yangilash);

// const talabalar = [
//     { ism: "Ali", yosh: 22 },
//     { ism: "Vali", yosh: 18 },
//     { ism: "Asal", yosh: 25 },
//     { ism: "Diyor", yosh: 21 }
//   ];

//   function birinchiKattaTalaba(talabalar) {
//     const birinchiTalaba = talabalar.find(talaba => talaba.yosh > 20);
//     if (birinchiTalaba) {
//       return birinchiTalaba.ism.toUpperCase();
//     } else {
//       return "20 yoshdan katta talaba topilmadi";
//     }
//   }

//   console.log(birinchiKattaTalaba(talabalar));

// const mahsulotlar = [
//   { nom: "telefon", narx: 1200 },
//   { nom: "planshet", narx: 800 },
//   { nom: "kompyuter", narx: 1500 },
//   { nom: "televizor", narx: 1100 },
// ];

// function umumiyNarx(mahsulotlar) {
//   const narxlar = mahsulotlar.filter((m) => m.narx > 100);
//   const umumiy = narxlar.reduce((total, mahsulot) => total + mahsulot.narx, 0);
//   return umumiy;
// }

// console.log(umumiyNarx(mahsulotlar));

// function tekshirish(massiv) {
//   const hammasiMusbat = massiv.every((x) => x > 0);
//   const kattaSonBor = massiv.some((x) => x > 100);

//   if (hammasiMusbat) {
//     if (kattaSonBor) {
//       return "Barcha sonlar musbat, katta son bor";
//     } else {
//       return "Barcha sonlar musbat";
//     }
//   } else {
//     return "Musbat bo'lmagan sonlar bor";
//   }
// }

// // Test uchun massiv
// const sonlar1 = [25, 70, 120, 85];
// const sonlar2 = [35, -40, 20, 90];
// const sonlar3 = [-15, -60, -120];

// console.log(tekshirish(sonlar1)); // Barcha sonlar musbat, katta son bor
// console.log(tekshirish(sonlar2)); // Musbat bo'lmagan sonlar bor
// console.log(tekshirish(sonlar3)); // Musbat bo'lmagan sonlar bor

// function kvadratHisoblaVaChiqar(massiv) {
//     const yangiMassiv = [];

//     massiv.forEach(element => {
//       yangiMassiv.push(element * element);
//     });

//     return yangiMassiv;
//   }

//   function massivniChiqar(massiv) {
//     massiv.forEach(element => {
//       console.log(element);
//     });
//   }

//   // Test uchun massiv
//   const eskiMassiv = [1, 2, 3, 4, 5];

//   const yangiMassiv = kvadratHisoblaVaChiqar(eskiMassiv);
//   massivniChiqar(yangiMassiv);

// function yangiUmumiyMaosh(xodimlar) {
//     const pastMaoshlar = xodimlar.filter(xodim => xodim.maosh < 2000);
//     const oshirilganMaoshlar = pastMaoshlar.map(xodim => xodim.maosh * 1.1);
//     const umumiyMaosh = oshirilganMaoshlar.reduce((total, maosh) => total + maosh, 0);
//     return umumiyMaosh;
//   }

//   // Test uchun xodimlar ma'lumoti
//   const xodimlar = [
//     { ism: "Ali", maosh: 1800 },
//     { ism: "Vali", maosh: 2200 },
//     { ism: "Asal", maosh: 1900 },
//     { ism: "Diyor", maosh: 2100 }
//   ];

//   console.log(yangiUmumiyMaosh(xodimlar));

// const talabalar = [
//     { ism: "Ali", yosh: 20, baho: 85 },
//     { ism: "Vali", yosh: 21, baho: 78 },
//     { ism: "Asal", yosh: 19, baho: 90 },
//     { ism: "Diyor", yosh: 22, baho: 82 }
//   ];

//   function birinchiTalaba(talabalar) {
//     const birinchi = talabalar.find(talaba => talaba.baho >= 80);
//     if (birinchi) {
//       return { ism: birinchi.ism, yosh: birinchi.yosh };
//     } else {
//       return "80 ball dan yuqori baholangan talaba topilmadi";
//     }
//   }

//   function yuqoriBaholanganTalabalar(talabalar) {
//     const yuqoriBaholanganlar = talabalar.filter(talaba => talaba.baho >= 80);
//     const ismlar = yuqoriBaholanganlar.map(talaba => talaba.ism.toUpperCase());
//     return ismlar;
//   }

//   console.log(birinchiTalaba(talabalar));
//   console.log(yuqoriBaholanganTalabalar(talabalar));

// function kattaHarfgaOzgartir(string) {
//   return string.toUpperCase();
// }

// // Test uchun string
// var satr = "Bu bir test matni";

// // Natijani chiqarish
// console.log(kattaHarfgaOzgartir(satr));

// function substringTekshirish(asosiySatr, substring) {
//     return asosiySatr.includes(substring);
//   }

//   // Test uchun ma'lumotlar
//   var asosiySatr = "Bu bir matn";
//   var subSatr = "matn";

//   // Natijani chiqarish
//   console.log(substringTekshirish(asosiySatr, subSatr)); // true

// function almashtirish(asosiySatr) {
//   return asosiySatr.replace(/JavaScript/g, "JS");
// }

// // Test uchun ma'lumot
// var asosiySatr = "JavaScript bugun JavaScript funksiya yozishni o'rganish";
// // Natijani chiqarish
// console.log(almashtirish(asosiySatr));

// function teskariTartibda(string) {
//     // Satrni so'zlarga ajratib olamiz
//     var sozlar = string.split(" ");
//     // So'zlarni teskari tartibda qaytaramiz
//     var teskariSatr = sozlar.reverse().join(" ");
//     return teskariSatr;
//   }

//   // Test uchun ma'lumot
//   var asosiySatr = "Bu bir matn";

//   // Natijani chiqarish
//   console.log(teskariTartibda(asosiySatr)); // "matn bir Bu"

// function bosheOlibTashlash(string) {
//     return string.trim();
//   }

//   // Test uchun ma'lumot
//   var asosiySatr = "   Bu bir matn    ";

//   // Natijani chiqarish
//   console.log("'" + bosheOlibTashlash(asosiySatr) + "'"); // "'Bu bir matn'"
