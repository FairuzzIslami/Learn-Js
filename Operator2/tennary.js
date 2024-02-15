//tenarry operator adalah operator sedrhana dari if statement
// sama sperti if tapi dia lebih menyingkat nya

// tanpa tennary operator
let Nilai = 80
let hasil;

if(Number(Nilai) >=90){
    hasil = "buset pinter juga lo"
}else if(Number(Nilai) <= 80){
    hasil = "note bad lah"
}else{
    hasil = "apa coba"
}
console.log(hasil)




//menggunakan tennary operator
let nilai2 = 70
let hasil2 = nilai2 >= 80 ? "kelass pinter dekk" :"kuarang pinter kau"
                        //         if                else
console.log(hasil2)