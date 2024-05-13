// array splice dia berguna untuk menambahkan data yang ada di array 
// sesuai index yang kita mau,berbeda dgn push,unshitf
// sementara unshift dan push menambahkan array di akhir saja
// dan splice itu bisa menambahkan array dimana saja 
// tergantung index yang kita inginkan untuk nambahin item di array



//RUMUS:
// slice(index awalnya,berapa yang mau di hapus index nya,nambah item baru,nambah item baru2)

// push
let array = [1,2,3,4,4,5,7,53,2]
array.push('ashel') // nambah di akhir
console.log(array)


//splice
let array2 = ['fairuz','aqila','islami']
// let cetak = array2.splice(1,2,'damar','zahra') //jika menggunakan exprexion, akan menampilkan item yang di hapus
// console.log(cetak)


// NB : KETIKA ADA ITEM YANG DI APUS
array2.splice(0,1,'damar',) // ketika tidak memakai expresion/variabel array splice akan memperlihatkan yang kita ganti itemnya
console.log(array2) // damar,fairuz,islami


// KETIKA ADA ITEM YANG TIDAK DI HAPUS
let array3 = ['damar','artha','asep','yunus']
array3.splice(3,0,'katak')
console.log(array3)






//NB : - dia akan menghapus sesuai index awal yang kita ketik
//     - jika nambahkan item baru dia akan menyusuaikan index awalnya dan akan berada di index yg di tujui