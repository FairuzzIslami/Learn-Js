//slice
// berguna untuk mengiris sebuah array menjadi array yang baru


//RUMUS:
// slice(awal,akhir)

// NB: - BAGIAN AKHIR ITU TIDAK AKAN DI ANGGAP ARRAY YANG BARU
//       jika ingin index trakhir di bawa tinggal tambahkan inedx yang lebih dari index terkahir

let array = ['herman','dodit','anshor','basuki','cahyadi']
console.log(array.slice(1,4)) // index terakhir tidak di anggap
console.log(array.slice(1,5)) // index terakhir di anggap/ masuk ke array baru

