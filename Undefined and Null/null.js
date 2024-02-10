// nul berbeda dgn undefined , null itu mempunyai value sedangkan undifined itu tidak memilikinya 
// dan fungsi dari null adalah untuk memberikan nilai yang sebenarnya / tidak bisa berubah
// jadi kita memberikan value null di variabel untuk mencari nilai yang sebenarnya  

let nama = null

if(nama === undefined){
    console.log("y")
}else if(nama === null){
    console.log("nulll")
}else{
    console.log("bukan dua duanya")
}
console.log(nama)