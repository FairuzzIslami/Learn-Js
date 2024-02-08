// di js memiliki berapa fitur ynag bernama alert,prompt,confirm
// alert adalah  menampilkan popup bertipe text
// prompt adalah inputan yang dapat memasukan value bertipe string
// confirm adalah dia meminta inpu bolean saja true or false aja


let nama = prompt("massukan nama mu") // inputan 
alert(`hello ${nama}`) // menampilkan popup bertipe text


let pertanyaan = confirm("yakin kamu mau lanjut gak?:") // dia meminta inpu bolean saja true or false
if(pertanyaan){ //kenapa kondisinya hanya variabel karena element if itu berati kondisinya benar
    let umur = prompt("berapa umur mu mas bro :")
    alert(`waduh kamu ${nama}  agak laen ${umur} th`)

}else{
    console.log("Y")
}