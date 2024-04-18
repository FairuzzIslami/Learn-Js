let array = [2,3,4,5,6,6]


//Array method pop berfungsi untuk menghapus index dan item di array terkahirnya\
//bagian akhirnya dan length juga akan berkurang
array.pop()
console.log(array)
console.log(array.length)


// array to string dan join itu memanipulasi array menjadi string dan akan di keluarkan oleh array
// menjadi sebauh string
const arrayToString = ['banana','apple','manggo','jeruk']
let fruitToString = arrayToString.toString()
let fruitJoin = arrayToString.join('-')
console.log(fruitJoin)
console.log(fruitToString)


// array at berguna untuk mengetahui index yang kita tunjukan
// bisa juga nama[2] atau make at juga bisa
let nama = ['fairuz','ashel','irfan','damar']
console.log(nama.at(2))


// array splice berfungsi untuk bisa menambahkna nilai di index item nya sesuai index yang
// di inginkan
let arraySplice = ['kageyama','hinata','naruto','kakashi']
console.log(arraySplice.splice(2,0,'lemon','kiwi'))
