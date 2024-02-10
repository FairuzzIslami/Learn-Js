// undefined adalah tipe data yang tidak memiliki value nya
// jadi ketika sebuah variabel tidak di beri value , jika variabelnya di tampilkan
//akan menghasilkan nilai undefined / blm ada nilai


let nama_siswa; // ini adalah undefined ,blm ada valuenya or nilai


if(nama_siswa === undefined){
    console.log("ini adalah tipe data uneifined")
}else{
    console.log("ini bukan undefined")
}
console.log(nama_siswa)

let angka = [1,2,3,4] // index nya hanya 3
console.log(angka[6]) // mau menampilkan index yang ke 6 , karena gak ada jadi dia menampilkan undifined

const game = {
    // gak ada objek nya
}
console.log(game.name)




let isi = null;
console.log(isi)
