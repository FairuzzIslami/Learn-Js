//string tamplate di tuliskan dgn tanda (``)

//before
// kegunaannya saat ingin menampilkan sesuatu bisasanya:
// console.log("hallo nama saya" + nama + "dan umur saya" + umur)

// after
//jika menggunakan string tamplete kit absia mempersingkat pemanggilanya:
// console.log(`hallo nama saya ${nama} dan umur saya ${umur}`)
// pemanggilan memasukkan variabel di string tamplate menggunakan
// ${...}

let nama = "fairuz aqila" 
let name = `fairuz aqila ${nama}` // penulisan string tamplate 




// let pekerjaan2 = "saya kerja di pt
//  komatsu"                            // jika menggunakan "" ingin memberi spasi di line kedua
                                        // untuk string biasa dia akan maka akan terjadi eror



let pekerjaan = `    pekerjaan
                    saya sekarang 
                    adalah web dev` // menggunakan string tamplate bisa bebas memberi spasi di line ke bawah
console.log(name)
console.log(pekerjaan)




let anak = "fairuz"
let anak2 = "salsa"
let hasil = `saya memiliki 2 anak yang 
            bernama ${anak} dan ${anak2}`
console.log(hasil)