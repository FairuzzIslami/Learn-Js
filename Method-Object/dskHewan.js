const sapi = {
    nama : 'Sapingkk',
    umur : null,
    warna : "pink",
    'jenis kelamin':"lenang",
    suara: (nama) => {
        console.log("cihuyy" + nama)
    },
    popUp: (isi) =>{
        console.log(isi)
        console.log(`namaku ${sapi.nama} umurku seakrrang ${sapi.umur}`) // cara 1
    },
    popUp2: function(){
        console.log(`namaku ${this.nama} umurku seakrrang ${this.umur}`) // cara 1
    }


}
console.log(sapi["jenis kelamin"])//1
// console.log(sapi['nama']) // cara 1
console.log(sapi.nama)    //cara 2
// sapi.suara('ok ok')
// sapi.popUp('kkkk')
// sapi.popUp('yyyyy')
sapi.popUp()

