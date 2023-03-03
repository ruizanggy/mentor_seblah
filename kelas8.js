/**
 * DATA STRUCTURE,teknik menyimpan data
 * ada primitive dan non primive
 * 
 * -STACK, last in first out
 * undo mechanism
 * back/forward stacks on browsers/ contohnya nge back di browser
 * reverse string
 * recursive f
 * 
 * pengimplementasiin bisa dalam class untuk menyimpan propertie dan methode
 * contoh
 * [1,2,3]
 * [1,2]
 * 
 * 
 * 
 * QUEUE,   first in first out (analogi antrian)
 * contoh printer dan cpu task schezhuling
 * ngirim pesan whatsapp
 * email, dan contoh lainnya
 * contoh
 * [1,2,3]
 * [2,3]
 * 
 * 
 * 
 * 
 *  MATERI GOOD TO KNOW
 * SET(unordered(tidak ada indexnya dan harus nembak sendiri), no duplicate(ga ada data yang sama)) DAN MAP (ordered(ada urutan indexnya)mereturn hasilnya, allow duplicate)
 * MIRIP DENGAN OBJECT DAN ARRAY
 * khusus untuk menyimpan data
 * pengunannya pake variabel = new map/set()
 * 
 * dua obj jika di compare obj maka dia ga dinilai sama
 * 
 * 
 * 
 * BAHASA G
 * G+(A,I,U,E,O)
 * setiap bertemu huruf vokal maka tambahkan G dan huruf vokalnya
 * 
 * 
 */


//for each buat loopping si array


//soal 1, Bahasa G
// function bahasaG(text){
//     let vokal = ["a", "i", "u", "e", "o"]
//     let splittxt = text.split("")

//     let answer = []
//     splittxt.forEach((character) => {
//         //karakter disini loopingannya dari text
//         if(vokal.includes(character)){
//             answer.push(`${character}g${character}`)
        
//         }else{
//             answer.push(`${character}`)
//         }
//     });

//     console.log(answer.join(''));
// }

// bahasaG("aku dan dia")
//ngecek bisa pake include dan juga index of tergantung case
//kalo huruf vokalnya diganti i pake methode replace


//soal 2
// function kata(text){
// let strsplit = text.split(" ")
// let obj = {}
// let counter = 0
// let result = ""
// strsplit.forEach((element) => {
//     if(!obj[element]) obj[element] = 1
//     else obj[element]++

//     for(let c in obj){
//         if(obj[c] > counter){
//             counter = obj[c]
//             result = c
//         }
//     }
// });
// return result
// }
//input, split, looping, jadikan objek, counter, result,

//nanti nonton dulu baru buat ulang sendiri tanpa sendiri

// console.log(kata("aku kamu kamu cinta cinta cinta "))
//output yang keluar harus kata yang paling banyak


console.log(nyari(8))

function nyari(num){
    num *= 5
}
//sudo kalo bermasalah















































//fokus javascript
//belajar dr yutup dan bikin folder baru
//harus rapi dan belajar terus
//belajar dr yutup yang ka nadhif kasi
//the coding train, WPU, deved(buat belajar react),programming zaman now, pedro tech, freecodecamp, cs50 web programming itu course dr harvard 
//kalo belajar front end harus belajar framework
//belajar bahasa inggris harus bisa baca dulu bar nulis

//selalu belajar terus kalo udah selesai harus kuasai semua mengenai programming
//haru belajar banyak bahasa itu metaltih logic 