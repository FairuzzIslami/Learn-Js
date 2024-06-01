//Array filer dan find berguna untuk mencari index/nilai 
// tetapi find hanya bisa mengecek 1 nilai saja


let angka = [1,3,4,5,6,7,8,9,9,9,11,12]
let angkaBaru =angka.find(function(e){
    return e > 9
})
console.log(angkaBaru)

let nama = ['fairuz','ashel','aqila','afgan']
let cekNama = nama.find(function(e){
    return e == 'ashel' 
})
console.log(cekNama)

//NB: -find hanya memberi 1 nilai saja
//    -jika filter memberikan lebih dari 1 nilai