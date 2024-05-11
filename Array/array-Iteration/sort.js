// array sort berfungsi untuk mengurutkan nilai elemen yang ada di array
// let angka = [3,2,1]
// angka.sort()
// angka = [1,2,3]


let angka = [4,5,60,70,7,8,90,1,4,5,6,4]
//before
console.log(angka)


// after
let cetak = angka.sort() // metode ini hanya mengurutkan 1 kararter/bilangan angka saja
console.log(cetak)


//jika ada angka yg lebih dari 1 karkater/bilangan gunakan:
let karakter2 = angka.sort(function(a,b){
    //return b-a // dari terbanyak ke kecil
    return a-b  // dari terkecil ke terbesar
})
console.log(karakter2)
