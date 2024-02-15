// in operator adalah operator untuk menampilkan/ mengetahui property yang ada si dalam
// array dan method
// jika si array dan method tsb ada propertynya maka hasilnya true 
// jika tidak ada maka akan menghasilkan false
// jadi dia hanya mengecek ada atau tidak property dan index di dalam variabelnya
// walaupun valuenya undefined dan null ,akan tetap true

let array = [1,2,3,4,5,6,7,8,9,10]
const dataArray = 99 in array; // code untuk mengecek index yang ada si array
console.log(dataArray)         // massukan index kemudian in dan nama property nya


let sapi = {
    nama : "sepi",
    'umur sapi' : 12,
    bb : 80,
    'warna_sapi': "pink",
    'kelamin':undefined // walaupun undefined tetap true
}
// jika ingin memanggil property yang ada di method
// gunakan string baru tulis property nya 'nama'
const datasapi = 'nama' in sapi
const datasapi2 = 'umur sapi' in sapi
const datasapi3 = 'kelamin' in sapi

console.log(datasapi2)
console.log(datasapi)
console.log(datasapi3)


console.log(sapi.nama)
console.log(sapi['warna_sapi']) // nampilkan property yang memamkai string