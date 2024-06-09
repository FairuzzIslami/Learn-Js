// membuat object dgn function declaration

function objectSiswa(nama,kelas,umur){
    let siswa = {}
    siswa.nama = nama
    siswa.kelas = kelas // hasilnya nanti kelas
    siswa.umur = umur
    return siswa
}

function objectSiswa2(nama,kelas,umur){
    let siswa = {}
    siswa.nama = nama
    siswa.kelas = kelas // hasilnya nanti kelas
    siswa.umur = umur
    return siswa
}

let siswa1 = objectSiswa('fairuz',10,'rpl')
console.log(siswa1)

console.log(objectSiswa2('damar',12,'tkr'))


//NB:- CARA MEMBUAT FUNCTION DECLARATION DI OBJECT