// < ==> hanya mengecek kurang dari angka sebelah kanan saja
// <= ==> dia mengecek kurang dari dan sama dgn angka di sebelah kanan
// dan juga kebalikan >= dan >

let angka1 = 5 <= 5 //true
angka1 = 12 < 12//false
console.log(angka1)

let nama = 10
if (nama <= 30){
    console.log("selamat anda cukup umur")
}else{
    console.log("maaaf anda belum cukup umur")
}
console.log(nama)

let umur = 12
if(umur <=12){
    console.log("maaf blm cukup umur")
}else{
    console.log("okeh cukup lah")
}
console.log(umur)
    // angka1 = 10 >= 12//false