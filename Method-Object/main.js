const inputan = prompt("masukkan nama dan umur dengan format (name,age): ")

let penampung_pemain_baru = inputan.split(",")

const pemain_tambahan = {
    name: penampung_pemain_baru[0],
    age: Number(penampung_pemain_baru[1])
}

const kumpulan_nama = [
    {
        name: "salah",
        age: 27
    },
    {
        name: "de bruyne",
        age: 25
    },
    {
        name: "mane",
        age: 23
    },
    {
        name: "kane",
        age: 28
    },
    {
        name: "drogba",
        age: 45
    }
]

kumpulan_nama.push(pemain_tambahan)


console.log('hasil', kumpulan_nama) // harusnya tambah 1 pemain









// let tertua = kumpulan_nama[0] // object
// for(let i = 0; i < kumpulan_nama.length; i++){
//     if(tertua.age < kumpulan_nama[i].age){
//         tertua = kumpulan_nama[i]
//     }
// }