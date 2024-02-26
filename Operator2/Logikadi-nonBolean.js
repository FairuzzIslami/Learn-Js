
// Operator OR  ngambil bagian kiri
// operator or mengambil truty dari kiri
// dan jika falsy semua maka dia ngmbil di bagian kiri
console.log(0 || '')
console.log(2 || 'noll') // nol 
console.log('' || []) // [] truty
console.log( 'nol' || 'satu') // nol semua true jadi paling depan
console.log(0 || 'nol') //nol karena dia truty
console.log(null || 'NULLZ') //NULLZ 
console.log(undefined || 'UNDE')//unde

//kegunaan
const nama = {
    nama : 'anjing',
    umur: '23'
}

const data = nama.nama || nama.umur
console.log(data)

//Operator AND  ngambil bagian kanan
// operator and mengambil nilai yang falsy terlebih dahulu
// jika semua kondisi nya falsy maka akan di ambil paling kanan
console.log('null' && 'satu')
console.log(0 && 'noll')
console.log(null && 'null')
console.log('undd' && undefined)
console.log("" && [])