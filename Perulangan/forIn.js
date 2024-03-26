// For in digunakan untuk mengiterasi / mengecek seluruh data property yang ada di 
// array dan object

const player = {
    name: "Fairuz",
    age: 20,
    goal : 300
}

//cekData itu memperlihatkan propertynya
// jika ingin menampilkan value yang ada di property gunakan player[cekData]
for(const cekData in player){
    console.log(`${cekData}} ${player[cekData]}`)
}


// In array
// angka dulu baru key
let angka = [1,2,3,4,5,5,6]
for(let key in angka){
    console.log(`angka ini adala ${angka[key]}`)
}