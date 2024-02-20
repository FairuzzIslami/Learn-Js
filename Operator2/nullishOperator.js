// adaalah mirip seperti tenary tetapi dia cuma mengecek nilaidi variebl null dan undefined gak
// nullish operator berfungsi untuk mengecek sebuah variabel itua valuenya terdapat nilai null atau undefined


let nilai;

if(nilai == null || nilai == undefined){
    console.log("nilai nya kosong")
}else{
    console.log("nilai ada")
}

let nilai2;
let ceknilai2 =  nilai2 ?? "Nilai gak ada"  // tanda ?? ada 2 karena dia hanya ingin mengecek nilai nya
//                                            undefined / null jika nilai nya itu maka hasil nya   "Nilai gak ada" 

console.log(ceknilai2)