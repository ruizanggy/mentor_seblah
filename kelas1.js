//prgramming adalah memberikan instruksi kepada komputer untuk mnejalankan tugasnya

//programmingg leangue itu sarana untuk berkomunikasi dengan komputer

//alghoritma itu step by step untuk menyelesaikan 

//flowchart untuk menggambarkan alghoritma

//v8 engine untuk menjalankan javascript ke web kaya node js
//---------------------------------------------------------------
// console.log("hello world");

/**
 * ini untuk multiple comment
 * cukup dengan slash dan bintang dua kali dan enter2 aja
 */


/**
 * ada 3
 * var bisa bisa semuanya
 * let cuma bisa ubah nilainya dan ga bisa dideklarasi
 * const ga bisa diubah nilainya dan ga bisa juga dideklarasi ulang
 */

//kita ga bisa buat variabel built in yang ada di javascript
//kaya buat variabel yang namanya function
//akan ada pemberitahuan deprecated

//aturan pembuatan variabel ada di materi slide, kaya gaboleh diawalin angka dan gaboleh ada tanda baca dan ga bole ada spasi

//gaya penulisan ada dua yaitu camel dan snake case

//tipe data: string, number, bolean, objek, aray

//warna kuning itu number sedangkan putih itu string

//methode ada banyak bisa liat di internet

//kalo split pake kutip ga spasi itu hasilnya dipisah perhuruf kalo ada perkalimat
//kalo mau pake methode masukin ke variabel baru dulu
// let cuiz = "aku cinta kamu"

// console.log(cuiz.split("a"));

//-------------------------------------------------------

//untuk mendapatkan format date
//pake new date
//kalo mau ubah tanggal string pake new date

//kalo mau cari taun pake get full year

//dapetin jam pake get hours

//mereka menyimpan waktu dalam milisecond

// cara pbuat waktu tertentu
//const jan1_1970 = new date(0)
//maka outputnya membentuk tanggal yang ada di varibale berserta milimeter secondnya

//kalo mau liat milisecond pake date.parse()

//ada postfix dan prefix itu cuma masalah penempatan biasaynay yang digunakan postfic

//MATERI COMPARISON
//bisa buat bikin log in 
//untuk pengecekan


//tamplate literal itu penggunaan back thick
//--------------------------------------------------------------------
//exercise slide 1

//Write a code to find area of rectangle
// let panjang = 8
// let lebar = 5
// let luas_PersegiPanjang = panjang * lebar
// console.log(luas_PersegiPanjang);

//Write a code to find perimeter of rectangle
// let panjang = 9
// let lebar = 7
// let kelilingPersegiPanjang = 2 * (panjang + lebar)
// console.log(kelilingPersegiPanjang);

//Write a code to find diameter, circumference and area of a circle
//Diameter
// let jari_jari = 7
// let diameter = 2 * jari_jari
// console.log(diameter);

//circumference
// let pi = 3.14
// let c = 2 * pi * jari_jari
// console.log(c);

//area of cirlce
// let a = pi * (jari_jari ** 2)
// console.log(a);

// Write a code to find angles of triangle if two angles are given
// let sudut1 = 60
// let sudut2 = 90
// let sudutSegitiga = 180 - sudut1 - sudut2
// console.log(sudutSegitiga);

// let str = "17"
// let num = 5
// console.log(str + num);
//kalo str ditambah number maka hasilnya string dan outputnya dari atas "175"
//khusus untuk tambah aja

// Write a code to get difference between dates in days
//mau mencari perbedaan hari
let date1 = new Date('07/30/2022')
let date2 = new Date('08/6/2022')
//ini harus pake kutip tanggal, dia akan disimpan dalam bentuk millisecond

let diffdays = date2 - date1
// console.log(diffdays);=> ini dala bentuk milisecond
let newDate = diffdays / 1000 / 3600 / 24
//=>1000 itu 1 detik dalam milisecond, 3600 itu 1 menit ada 60 dtk dikali 1 jam 60 mnt, 24 itu dalam satu hari ada 24 jam
console.log(newDate);
//kalo mau cari beda berapa bulan dibagi lagi sama 1 bulan ada 30 hari 

// Write a code to convert days to years, months and days
// let days = 400

// let getyear = Math.floor(days / 360)
// let getmoth = Math.floor(days % 360 / 30)
// let getDay = days % 360 % 30

// console.log(`${getyear} Tahun, ${getmoth} Bulan, ${getDay} Hari`);




