//kegunaan konversi string di number aalah , jika ada user yang memasukan angka menggunakan string maka 
// di sarankan menggunakan konversi tipe string ini 



//yang awalnya string jika dikasih parsenfloat()akan berubah menjadi number tipe (pecahan)
let nilai1 = parseFloat("2.3") //2.3 
let nilai2 = 3
console.log(nilai1 + nilai2)


 // parseint() tidak menaplikan nilai koma karena dia hanya khusus bilangan (bulat)
console.log(parseInt("1.2")) //1
console.log(parseFloat("9.8")) //9.8

// sama seperti int dan float dia bisa meng inputt tipe (pecahan dan bulat) 
console.log(Number("20.2"))//20.2
console.log(Number("1"))//1

//numbertostring() berfungsi untuk mangubah yang awalnya bertipe number jadi string
let tinggi = 4.8 
let berat = 3.2
hasil = berat.toString() + tinggi.toString()
console.log (hasil) // hasil nya alah komen string


console.log(parseInt("12 halo"))

//nan adalah ketika sebuah string yang ada di konversi itu ada tulisan huruf
// sebelum atau sesudah angka dia akan bertipe NAN tapi float dan int masih bisa meng input pyang awalnnya
//angka dan di akhir tulisan jika kebalik malah nan
console.log(parseFloat("hello ashel 12")) //nan
console.log(parseFloat("1 hello ashel 12")) //1


// tipe number tidak bisa di kasih huruf karena number saja ynag bis
console.log(Number("hallo ashel 12")) // nan
console.log(Number(" 12 hallo ashel")) // nan