// array map berbeda dgn foreach
// maap bisa memanipulasi dan mengembalikan nilai yang ada di array
// sementara foreach tidak bisa mengembalikan nilai, jadi menggunakan nilai murni

let angka = [1,2,3,4,5,56,67,4]
let cetak = angka.map(function(e){
    return e*2 // bisa memanipulasi nilainya
})
console.log(cetak.join('-'))