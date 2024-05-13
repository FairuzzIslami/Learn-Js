//array adalah tipe data yang kumpulan data yang memiliki nilai lebih dari 1 atau lebih
// dan di js array itu dinamis yang artinya bisa bertambah sendirinya
// kita juga bisa menambahkan array di dalam array

let nama_siswa = ["fairuz","salsa","damar","zahra","alok",2,3,4,5,6,7]


// untukk menambahkan data di array
nama_siswa.push("andre","hanum")
console.table(nama_siswa)


// menapilkan data di index yang kita mau
console.log(nama_siswa[2])


//mengetahui panjang array
console.log(nama_siswa.length)// 7


// untuk mengubah data yang ada di index
console.log(nama_siswa[2] = "ashel") // index kedua di ganti ashel
console.log(nama_siswa[2]) 


// menghapus data yang ada di index
console.log(delete nama_siswa[1])  // index ke 1 jadi undifinde karena di hapus / delete
console.log(nama_siswa[1])

