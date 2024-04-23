// for of digunakan untuk mengcek interasi langsung dari value nya
//tanpa mengecek index nya, jadi langsung valuenya

let array = ["fairuz","ashel","damar","zahra"]
for(let cek of array){
    console.log({cek})
}

let nama = "fairuz aqila islami"
for(let name of nama){
    console.log({name})
}

let player = {
    umur : 20,
    warna:"hitam"
}
for(let person of player){
    console.log(`ini adalah ${person}`)
}
