//js adalah kumpulan nilai yang memiliki nama
// kegunaanya dapat meringkas data2 di key


// NB: -DI OBJECT TERDAPAT KEY / varibel yg ada  di object
//     - funtion yang ada di object di sebut method


//CONTOH: const siswa = {
//      nama:fairuz,
//      kelas:x-rpl   <== yang ada di dalam varieble itu namanya key
//  }

const siswa = {
    id:1,
    nama:'fairuz',
    umur:12,

    sapa: function(){  //function dalam object
        return `hiii nama saya ${nama} dan umur saya sekarang ${umur}
        dan saya jursan di ${kelas}`
    },

    ns: [80,70,30,50], //array dalam object

    alamat:{            // object dalam object
        jalan: 'jl perwira no 12 ladang sari',
        kota: 'lampung',
        provinsi: 'jawa tengah'
    }
}
console.log(siswa.nama) // cara memanggil varibel yang ada object nya
console.log(siswa.sapa)
console.log(siswa.ns[2])// cara memanggil array yang ada object nya
console.log(siswa.alamat.jalan)
