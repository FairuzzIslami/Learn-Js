//Fungsi adalah sekumpulan kode-kode JavaScript yang jika dijalankan
//akan menghasilkan atau mengerjakan suatu tugas tertentu
function namafungsi(nama){
    return `hello ${nama}`
}
let manggil = namafungsi("damar")
console.log(manggil)


function angkaKali(a,b){
    console.log(a * b)
}
let kali = angkaKali(10,9)
console.log(kali) 


function hasilUlangan(nilai){
    if(nilai >= 75){
        return "selamat anda lulus"
    }else{
        return "maaf anda blm lulus"
    }
}
let nilaiKelulusan = hasilUlangan(80)
console.log(nilaiKelulusan)