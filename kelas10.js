//Advanced topic

/**
 * callback ditaro di parameter lalu kita panggil lagi didalemnya
 * call back bisa bikin synchronus
 * tujuannya untuk manggil function
 * 
 * recursive manggil function sendiri
 * 
 * 
 * 
 * 
 * 
 * synchronus(harus nunggu task sebelumnya)
 * 
 * asynchronus(ga nunggu task lain kelar)
 * 
 * 
 * cara bikin synchronus pake asyncawait
 * 
 * settimeout untuk bikin delay, dia pake arrow function
 */

//contoh call back yang bikin synchronus
// const callFirstname = (callback) => {
//     setTimeout(() => {
//         callback("anicha")
//     }, 3000)
//     //3000 milisecond itu 3 detik
// }

// const login = () =>{
//     callFirstname((result)=>{
//         const firstname = result
//         const lastname = "ruizanggy"
//         const fullname = firstname + lastname
//         console.log(fullname);
//     })
// }

// login()

//intinya callback taro di parameter dan dipanggil lagi callbacknya di tasknya
//set timeout untuk melihat


//callback hell jarang makanya di counter pake promise
//------------------------------------------------------------


/**
 * PROMISE, janji, bisa menunggu juga jaya callback
 * 
 * then pasangannya resolve/fulfilled
 * catch pasangannnya reject
 * then dan catch untuk melakukan tugasnya
 * finally dia auto dijalanin ga nunggu keduanya
 */

// const callFirstname = () => {
//     return new Promise((resolve, rejected) =>{
//         //buat promisenya dam harus kaya gini
//     })
// }



// //PROMISE ALL, ketika punya banyak promise
//contoh
// Promise.all([callfirstname(), calllastname()])
// .then(([resultfirst, resultlast]) => {
//     console.log(resultfirst + resultlast);
// })

//jika salah satu ada yang gagal maka dia akan ke catch

//----------------------------------
//Paling efektif dan digunakan sangat banyak
//async await untuk ngebuat task nya di tunggu dan alghoritmenya di synchronus
//tetep harus ada promise
//dua kata async dan await harus ada dalam satu script

/**
  * JSON, bahasa global yang mengubah objek ke strinng semua
  * 
  * export filenya untuk kirim global
  * 
  * impor untuk ambil datanya 
  * 
  * 
  * 
  * 
  * 
  * 
  * 
  * 
  * */ 