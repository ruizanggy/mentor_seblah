//belajar liat browser dan setiap hal di console log untuk mengecek

//conditional statement
//conditional statement ada 2 yaitu if, else, else if statement dan switchcase statement

//truth and false value 
//ada di materi slide ada apa aja

//ini biasanya buka conditional statement 
//contoh
// var umur = 17

// if(umur - 17){
//     console.log(`cukup`);
// }else{
//     console.log(`gacukup`);
// }
//maka dia akan jalanin elsenya karena umur - 17 itu 0. nilai 0 ini false makannya dia jalanin si else
//if hanya jalanin yang true

//ternary statement
//versi singkat dari if statement dan dia ada banyak jenisnya
// let str = "purwadhika"
// console.log(str.includes('purwa') ? 'ada si purwa' : 'ga ada si purwa');

//untuk front end pake react.js dan ngasi kondisi

//----------------------------------------------------------------------------------------------------------
// Loop Statement
//loop adalah pengulangan yang berarti kita ingin mengulang seluruh data yang ada pada variabel atau yang kita tentukan

//ada 3 loop yaitu for, while , do while(bedanya ini dia eksekusi dulu baru cek)
//ngulangnya itu dimulai dari kondisi yang dikasi setelah kata loop// dibaca dari kondisi lagi kalo loopnya
//jangan sampe ada infinite loop, ini terjadi karena ga dikasi tasknya

//kalo mau mindahni pake option terus pake panah atas atas bawah

//----------------------------------------------------------------------------------
//exercise slide 2
//Write a code to convert celsius to fahrenheit
// let celsius = 5
// let celToFar= (celsius * 9 / 5) + 32
// console.log(`${celsius} celcius ke fahrenheit adalah ${celToFar}`);

// Write a code to check whether the number is odd or even
// let number = 12

// if(number % 2 == 0){
//     console.log(`${number} adalah bilangan genap`);
// }

// else {
//     console.log(`${number} adalah bilanga ganjil`);
// }


// Write a code to check whether the number is prime number or not
// Bilangan prima adalah bilangan yang hanya bisa dibagi 1 dan bilangannya sendir
// let number = 67
// let isprime = true

// if(number === 1){
//     console.log(`1 bukanlah bilangan prima`);
// }

// if(number > 1){
//     for(let i = 2 ; i<number; i++){
//         // console.log(i);
//         if(number % i == 0){
//         //jika number bisa dibagi sama loopingannya maka dia bukan bilangan prima karena bakalan menjadi 3 faktor sedangkan prima cuma terdapat 2 faktor yaitu 1 dan bilangannya sendiri
//             isprime = false
//         }
//     }
// }

// if(isprime){
//     console.log(`${number} adalah bilangan prima`);
// }
// else{
//     console.log(`${number} bukan bilangan prima`);
// }

// Write a code to find the sum of the numbers 1 to N.
// let sum = 0
// let number = 7

// for(let i = 1 ; i <= number ; i++ ){
//     sum += i
// }

// console.log(sum);

// Write a code to find factorial of a number.
// let answer = 1
// let num = 5
// if(num > 1){
// for(let i = num; i >= 1 ; i--){
//     answer = answer * i
//     //loop 1 = 1 * 4 = 4 => print answer = 4
//     //loop 2 = 4 * 3 = 12 => print answer = 12
//     //loop 3 = 12 * 2 = 24 => print answer = 24
//     //loop 4 = 24 * 1 = 24 => print answer =24
// }
// console.log(answer);
// }
// else{
//     return "number harus bilangan positif"
// }


// Write a code to print the first N fibonacci 
//inget yang diajarin kak danang untuk menukar nilai a dan b gabisa lansung dia butuh variabel tambahan untuk mengantongi

// let a = 0
// let b = 1

// for(let i = 1 ; i <= 10; i++){
//     console.log(a);
//     var fibselanjutnya = a + b
//     a = b
//     b = fibselanjutnya
//     //sampe sini print abis tu balik lagi ke fib selanjutnya dengan meningggalkan nilai sebelumnya
// }
//penjelasan => di print dulu a nya karena fibonanci dimulai dari 0
//i = 1 karena kita mau mulai mencari nilai ke satu

