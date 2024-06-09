// membuat object dgn constructor
// sama seperti declaration tapi beda 
// dia menggunakan keyword this di dalam function nya

function siswa(nama,kelas,umur){
    this.nama = nama
    this.kelas = kelas 
    this.umur = umur
}
siswa1 = new siswa('fairuz',10,'mm')
console.log(siswa1)