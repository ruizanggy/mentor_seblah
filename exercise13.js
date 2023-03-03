// Write a code to check whether the date is a weekend.
// function weekend(date1){
//   //step 1, ubah parameter data string ke milisecond
//   var dt = new Date(date1)
  
//   //step 2, bikin conditional statement
//   if(dt.getDay() == 0 || dt.getDay() == 6){
//     //get.Day itu untuk mendapatkan hari
//     //isi get day itu syntaxnya dalam bentuk angka/ 0 itu minggu dan  6 itu sabtu/ sisa harinya dimulai dari 1
//     return 'weekend'

//   }else 
//   {
//     return 'no weekend'
//   }
// }
// console.log(weekend("11/27/2002"))


// Write a code to find GCD of two numbers → use while.
//mencari fpb dari dua angka// mencari angka terbesar yang bisa membagi keduanya
// function fpb(a, b){
//   while(a != b){
//     if(a > b){
//       a -= b
//     }else{
//       b -= a
//     }
//   }
//   return a
// }
//loop 1 = 60 - 36 = 24 -> nilai b = 24
//loop 2 = 36 - 24 = 12 -> nilai a = 12
//loop 3 = 24 - 12 = 12 -> nilai b = 12

//kondisi di whilenya udah ga false maka return nilai a atau b nya
//nilai FPB dr output diatas 12

// console.log(fpb(36, 60))

//Write a code to find LCM of two numbers → use do ... while.
// function findLcm(a, b){
//   //step 1, mencari 
//   let min = Math.min(a, b)
//   let max = Math.max(a, b)
//   let result = max

//   do{
//   //do ini di execute dulu b, lalu di cek
//     result += max
//   }while(result % min != 0)
  
  
//   return result
// }
// //loop 1 -> result tidak bisa mod nilai min(8 % 5), maka result ditambah max
// //loop 2 -> resultnya 16. 16 % 5 
// //loop 3 -> 24 % 5
// //loop 4 -> 32 % 5
// //loop 3 -> 40 % 5
// console.log(findLcm(24, 35 ))


//cara kedua, while 
//cari kpk// nilai result itu nilai terbesar yang bisa nge mod dua2nya yaitu bisa nge mod nilai max dan min
// function findLcm(a, b){
//   //step 1, mencari 
//   let min = Math.min(a, b)
//   let max = Math.max(a, b)
//   let result = max


//   while(result % min != 0){
//     result += max
//   }
//   return result
// }
// //loop 1 -> result tidak bisa mod nilai min(8 % 5), maka result ditambah max
// //loop 2 -> resultnya 16. 16 % 5 
// //loop 3 -> 24 % 5
// //loop 4 -> 32 % 5
// //loop 3 -> 40 % 5
// console.log(findLcm(5, 8 ))


//initial condition, cek condition, baca kurawal/code block, increment or decrement => inii urutan for loop
//selama code block bisa mngeubah nilai expression kedua maka tidak perlu expression 3
//control c/a/q/s/ kalo klik keyboard esc untuk menangani eror
//initial condotion kalo didalem for bisa juga diluar 
//kalo mau ilangin expression 3 masukin ke code block

// Write a code to find most common character from a string
// function cariHuruf(str){
//   let obj = {}
//   let counter = 0
//   let result = ''

//     //loop dulu string dan masukin ke objek jadikan propertie
//   for(let c of str){
//     if(!obj[c]){
//       obj[c] = 1
    
//     }else{
//       obj[c]++
//     };
//   }
// // loop nilainya dari propertie yang ada di objek setelah itu bandingkan dengan
//   for(let c in obj){
//     if(obj[c] > counter){
//       counter = obj[c]
//       result = c
//     }
//   }
//   return result
// }
// console.log(cariHuruf("hello world"))
//pokonya outputnya harus l

//for of itu untuk ngelooping karakter string


// Write a code to sort a string alphabetically (with sort function)
// function sortstringwithsort(str){
//   return str.split('').sort().join("")
// }

// console.log(sortstringwithsort("capbd retus"))
//untuk kasus ini methode gausa dimasukin ke variabel lansung return
//untuk menggunakan sort hanya bisa data array oleh karena itu di split dulu
//abis tu baru digabungin arraynya ke string pake join 



// Write a code to sort a string alphabetically (without sort function)
// function without(str){
//   let result = ""
//   let arr = str.split('')

//   for(let i = 0 ; i < arr.length; i++){
//     let minchar = arr[i]
//     let minin = i

//     for(let j = i + i ; j < arr.length; j++){
//       //jangan lupa conditional untuk mengecek apakah nilai di index 1 dengan index selajutnya lebih kecil 
//       if(arr[j] < minchar){
//       minchar = arr[j]
//       minin = j
//       }
//     }

//     arr[minin] = arr[i]
//     arr[i] = minchar
//     result += minchar
//   }
//   return result
// }

// console.log(without("ajibkicmld"));

// Write a code to get minimum date from array of dates.
// function getMinDate(arr) {
//   //step 1, ini data array index ke 0
//     let minDate = arr[0];

//     for (let i=1; i<arr.length; i++) {
//       //dimulai dari 1 karena kita ingin membandingan nilai index 0 dengan nilai index setelahnya. dimulai dari 1
//         if (arr[i] < minDate) {
//           //jika arr index ke loopingan kurang dari mindate yaitu index ke 0
//             minDate = arr[i];
//             //maka mindate berubah jadi nilai yang lebih kecilnya lagi dari sebelumnya
//         }
//     }

//     return minDate;
// }

// console.log(getMinDate(['2023-02-20', '2022-09-25', '2024-10-10']));



// Write a code that calculates the sum of all elements of a two-dimensional array
// function sumTwoDimensionalArray(arr) {
//     let result = 0;

//     for (let i=0; i<arr.length; i++) {
//         for (let j=0; j<arr[i].length; j++) {
//           //ini karena array didalam array maka untuk mendapatkan nilai yang paling dalam maka di looping dua kali
//           //dan disini konteksnya disini looping untuk menghilangkan per kurung siku
//             result += arr[i][j];
//         }
//     }

//     return result;
// }

// console.log(sumTwoDimensionalArray([[1, 2], [3, 4], [5, 6]]));
//kerjain sendiri kata ka danang


// Write a code to find the longest common prefix string amongst an array of strings.
//mencari pola yang sama dan terpanjang
// function findLongestCommonPrefix(arr) {
//   //jika jumlah datanya sama dengan 0 maka dia string kosong yaitu gaada datanya
//     if (arr.length === 0) {
//       return "";
//     }

//     let result = arr[0];
//     console.log(arr.indexOf(result));

//     for (let i=1; i<arr.length; i++) {
//         while (arr[i].indexOf(result) !== 0) {
//           //apakah result ada di index i dan kalo ada di index berapa. kalo ga ada dia munculnya -1
//           //untuk compare 
//           // kalo ketemu dia 0
//             result = result.slice(0, result.length - 1);
//             //task nya jika ga ada maka akan dipotong dari ujung kata
//             //lalu balik lgi keatas looping

//             if (result.length === 0) return "";
//             //kalo dia bener2 pas dipotong ga ada yang sama maka dia akan ngebalikin string kosong
//         }
//     }

//     return result;
// }

// findLongestCommonPrefix(["flower", "flight", "flexing"]);
//flower ini jdi patokan



// Write a code that copies the first half of an array. With an odd number of array elements, the
// middle element should belong to the first half
// function copyFirstHalfOfArray(arr) {
//   //untuk mencari nilai tengahnya
//     let midIndex = Math.floor(arr.length / 2);
//     //jika arr length tidak abis dibaki 2 maka dia masuknya yang plus 1 karena yang kanan itu buat false kiri itu true
//     let endIndex = arr.length % 2 === 0 ? midIndex : midIndex + 1;

//     return arr.slice(0, endIndex);
//     //maka dipotong di copy dari index 0 sampe index yang ada di endindex(ini tergantung yaa)
// }

// console.log(copyFirstHalfOfArray([1, 2, 3, 4, 5, 6, 7]));



// Write a code to get the number of days in a month
// Example : month = 1, year = 2022 → 31
// function getDaysInMonth(year, month) {
//     return new Date(year, month, 0).getDate();
//     //0 disini maka dia dapetin tanggal sebelum bulannya
//     //karena ini february maka outputnya 31
// }

// console.log(getDaysInMonth(2022, 1));
//kalo udah di new date maka month nya diitung dari 0 januarinya 



// Write a code to count the number of days passed since beginning of the year
// function countDaysPassedSinceBeginningOfYear(date) {
//     date = new Date(date);
//     let year = date.getFullYear();
//     let beginningOfYear = new Date(year, 0, 1);
//     let oneDay = 1000 * 60 * 60 * 24;
//     let daysPassed = Math.floor((date - beginningOfYear) / oneDay) + 1;
//     //1 januari dianggap hari ke satu maka ditambah 1// jadi udah berlalu
//     return daysPassed;
//   }
//   console.log(countDaysPassedSinceBeginningOfYear("2023-02-20"));
    


// Write a code to calculate age
// function calculateAge(dateOfBirth) {
//     let now = new Date();
//     let currentYear = now.getFullYear();
//     let currentMonth = now.getMonth() + 1;
    //ditambah satu karena di new date bulan itu dimulai dari 0 
    //jadi biar perbandingannya sama dengan bulan biasa tanpa new date. maka tambahin satu 
    // let currentDate = now.getDate();
    // let yearGap = currentYear - dateOfBirth.split('-')[0];

    // let birthMonth = parseInt(dateOfBirth.split('-')[1]);
    // let birthDate = parseInt(dateOfBirth.split('-')[2]);

    // if (currentMonth < birthMonth) yearGap --;
    //jika bulan kurang dari bulan lahirnya maka tahun kurang satu
    // else if (currentMonth == birthMonth) {
      //jika sama 
        // if (currentDate < birthDate) yearGap --;
        //dicek tanggalnya. apakah tanggal sekarang sama dengan tanggal lahir 
        //jika sama tahunnya dikurang 1
    // }
    //jika ga sama maka tahun nya di tampilin

//     return yearGap;
// }

// console.log(calculateAge("2000-02-20"));

//cara kak danang
// getAge(date) {
//     date = new Date(date);
//     recentDate = new Date();
//     const age = recentDate.getYear() - date.getYear();
//     if (recentDate.getMonth() <  date.getMonth()) return age - 1;
//     //jika waktu bulannya sekarang belom dicapai maka umurnya dikurang 1 atau bulannya masi kurang dari bulan lahirnya maka dikurang satu
//     else if (recentDate.getMonth() >  date.getMonth()) return age;
//     else {
//       if (recentDate.getDate() < date.getDate()) return age - 1;
//       //ini juga sama jika tanggalnya belom mencapai maka umur kurang satu
//       else return age;
//     }
//   }
  
//   console.log(getAge("21 February 1996"));

//LATIHAN NULIS BIASAIN dari web yang dikasi kak danang
//besok materi dikejar yang fundamental dr kelas mentor sebelah