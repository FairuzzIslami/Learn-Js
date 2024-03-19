// for adalah salah satu kode/sytax yang digunakan untuk perulangan
// kegunaanya adalah untuk mengulang suatu kondisi sampai kondisi terpenuhi

// sytax for
// for (init statement/buat variabel;kondisi; post statement ){
//      //perulagannya
// }

// init statement adalah membuat varibel yang ada di for loop nya, let = i; di awal
// kondisi memberi suatu kondisi yang ada di init, i < 10
// post statement akan di eksekusi setiap perulangannya sesuai dgn kondisi


// Note:
// kondisi dan post statement akan terus berulang ulang hingga kondisinya terpenuhi
// dan init statement hanya di awal saja


// jika tidak mengisinya tidak apa2 , tapi blok perulaganya akan berulang trs menerus
// for(;;){
//     console.log("hello world")
// }


// dari 0 ke 10
for(let i = 0 ; i < 10; i++ ){
    console.log(` hello aku angka ke ${[i]} `)
    // console.log(` aku ${[i]}`)
}

// dari 10 ke 0
for(let i = 10 ; i > 0; i--){
    console.log(`hello ${i}`)
}


for(let i = 1; i <= 10; i++ ){
    console.log(`counter ${i}`)
}

