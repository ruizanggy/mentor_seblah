//Write a code to display the multiplication table of a given integer.
// let number = 9 

// for(let i = 1 ; i<= 10 ; i++){
    
//     let result = number * i
//     //untuk menyimpan hasil perkalian dari number sama loopingannya
//     console.log(`${number} * ${i} = ${result}`);
// }


//Write a code to check whether a string is a palindrome or not.

// let str = "rusak"

// let panjangString = str.length
// for(let i = 0 ; i < panjangString / 2 ; i++){
//     //panjang string bagi 2 karena kita tidak ingin mengecek huruf tengahnya. jadi cukup ngecek huruf sebelum huruf tengahnya
//     //semisal katak, kita mau ngecek k dan a aja tetapi t nya engga
//     if(str[i] != str[panjangString - 1 - i]){
//         //minus 1 karena length itu dimulai dari 1 bukan 0 kaya index
//         //dikurang i karena kita ingin mengecek huruf yang sejajar
//         //kalo ga ada i maka yang dibandingin di loop kedua =  index ke 1 dan index terakhirnya 
//         //makanya harus dikurang indexnya biar ngebandingin huruf yang sejajar
//         console.log(`${str} bukan palindrom`);
//     }
    
//         console.log(`${str} adalah palingdrome`);
//     }
// //kalo ga pake funtion dia akan looping terus 


// Write a code to convert centimeter to kilometer.
// let cm = 1000

// let kilometer = cm / 100000
// console.log(kilometer);

//Write a code to format number as currency (IDR)
//ini cara singkat 
// var  amount = 1000000;

// console.log("currency", amount.toLocaleString("id-ID", {
//     //diubah dulu ke string
//     style: "currency",
//     //mengatur gaya
//     currency: "IDR"
//     //mau outout currencynya dalam bentuk apa
// }));


//cara panjang pake loop
//output rp.1.000.000,00
// let nominal = 100000
// //ubah ke string lalu di split
// let splitString = nominal.toString().split("")
// //kita ingin sambungin array string 
// let result = ""
// let counter = 0
// //di looping dr belakang
// for(let i = splitString.length -1; i >= 0 ; i--){
    //     result += splitString[i]
    //     //ini untuk nyambungin string
    //     counter++
    
    //     if(counter == 3){
        //         //nilai counter diawal udah lansung ditambah dan jika sudah mencapai tiga maka string yang buat nyambungin tadi berbarengan dengan counternya maka resultnya dikasi titik
        //         //disini tu kunci membacanya itu keselarasannya / bacanya dari atas
        //         result += "."
        //         counter = 0
        //         //counter dibikin 0 lagi karena ingin diulang lagi dari 0 kalo engga dia ga bakal sama dengan 3
        //     }
        // }
        // result = result.split('')
        // //karena dibelakang angka pertama ada titik kaya 100 rb 
        // if(result[result.length - 1] == ".") result.pop()
        // result = result.reverse()
        // //yang bisa memakai reverse cuma array 
        // result = result.join('')
        // //untuk nyambungin array ke string 
        // console.log(result);
        // console.log(`Rp.${result},00`);
        
        //inget methode itu pake tanda kurung
        // pokonya krung biasa disini untuk pengecekan dan kurawal itu menjalankan tasknya
        //length itu mulai dari satu makannya banyak kasus diikurang 1 karena biar sesuai indexnya yang terakhir

// Write a code to remove the first occurrence of a given “search string” from a string
// let greet = "hello world"
// let replacestr = "ell"
// let result = greet.replace(replacestr, " ")
// //huruf yang ada di variabel greet di ganti yang ada nilainya replacestr, dengan string kosong
// console.log(result);
        
//Write a code to capitalize the first letter of each word in a string

// let selamat = "good morning"
// let pisah = selamat.split(" ")
//out put [good, morning]
// for(let i = 0; i < pisah.length; i++){
// pisah[i] = pisah[i][0].toUpperCase() +pisah[i].slice(1)
// untuk memanggil array yang dalemnya lagi bisa dua kali 
// maka maksudnya pisah[i] yang good lalu index ke 0 itu karakter pertama
// yang slice maksudnya pisah index ke i di slice atau di copy karakter setelahnya 
//maka akan terus menerus kaya gitu ngeloopingnya
// }
// selamat = pisah.join('')
// console.log(selamat);
            


// Write a code to reverse a string.

// let str = "icha"
// let splitstr = str.split("")
// let dibalik = splitstr.reverse()
// let digabung = dibalik.join("")

// console.log(digabung);
