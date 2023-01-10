

let og1ad = "ada"
let og1soyad = "bilge"

let og2ad = "yiğit"
let og2soyad = "bilgi"

let og1yas = 2012
let og2yas = 2010

let zaman = 2023
let dersortog1 = 0 
let dersortog2 = 0

let og1matnot1 = 70
let og1matnot2 = 70
let og1matnot3 = 80

let og2matnot1 = 40
let og2matnot2 = 40
let og2matnot3 = 50

console.log(og1yas = (zaman - og1yas));
console.log(og2yas = (zaman - og2yas));

console.log(dersortog1 = 
(og1matnot1 + og1matnot2 + og1matnot3) / 3);

console.log(dersortog2 = 
    (og2matnot1 + og2matnot2 + og2matnot3) / 3);


let basarilimi = (dersortog1 >= 50);
let basarilimi2 = (dersortog2 >= 50);

console.log(basarilimi2); console.log(basarilimi);

//sadeleştirmişi aşşağıda



/* 
    1- İki öğrencinin aşağıdaki bilgilerini değişkenler içerisinde saklayınız.

        öğrenci 1: 
            isim                : ada bilgi
            doğum tarihi        : 2012
            matematik notları   : 70, 70, 80

        öğrenci 2: 
            isim                : yiğit bilgi
            doğum tarihi        : 2010
            matematik notları   : 40, 40, 50

    2- Öğrencilerinin yaş bilgilerini değişkende tutunuz.
    3- Öğrencilerinin ders ortalama notunu değişkende saklayınız.
    4- Öğrencilerinin 50 geçme notuna göre başarı durumlarını değişkende saklayınız.
*/

let ogr1_ad = "Ada";
let ogr1_soyad = "Bilgi";
let ogr1_dogumTarihi = "2010";
let ogr1_matematik1 = 70;
let ogr1_matematik2 = 70;
let ogr1_matematik3 = 80;
let ogr1_ortalama = (ogr1_matematik1 + ogr1_matematik2 + ogr1_matematik3) / 3;
console.log(parseFloat(ogr1_ortalama));
console.log(ogr1_ortalama >= 50);

let ogr2_ad = "Yiğit";
let ogr3_soyad = "Bilgi";
let ogr2_dogumTarihi = "2012";
let ogr2_matematik1 = 40;
let ogr2_matematik2 = 40;
let ogr2_matematik3 = 50;
let ogr2_ortalama = (ogr2_matematik1 + ogr2_matematik2 + ogr2_matematik3) / 3;
console.log(parseFloat(ogr2_ortalama));
console.log(ogr2_ortalama >= 50);

let suankiYil = new Date().getFullYear();

let ogr1_yas = suankiYil - parseInt(ogr1_dogumTarihi);
let ogr2_yas = suankiYil - parseInt(ogr2_dogumTarihi);
console.log(ogr2_yas);


// parseInt sayıları tam sayı yapar
// parsefloat ondalık kısmınıda yazar
