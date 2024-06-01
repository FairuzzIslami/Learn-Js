//Array filer dan find berguna untuk mencari index/nilai 
// filter bisa mengembalikan banyak nilai


//1.filter
let angka = [1,2,,10,3,3,5,6,898,10]
let mengecek = angka.filter(function(e){
    return e > 2
})
console.log(mengecek.join('-'))

let nama = ['fairuz','damar','ashel','saka','odeegard']
let cekNama = nama.filter(function(x){
    return x == 'ashel'
})
console.log(cekNama)

let player = [
    {
        id:1,
        nama:'fairuz'
    },
    {
        id:2,
        nama:'damar'
    },
    {
        id:3,
        nama:'sukron'
    }
]
let cekPlayer = player.filter(function(e){
    return e.nama == 'fairuz' // nb: cari key dulu kemudian kita cari datanya
})
console.log(cekPlayer)
