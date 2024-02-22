// adalah sebuah opartor yang mengamankan ketika ingin meng akses
// sebuah property yang ada di dalam object/method
// objec dalam object dan lain lain


// jika ingin mengecek method yang data nya kosong tidak menggunakan
// optional chancing maka akan eror !!



// cara baru
const sapi = {
    nama :{
        country :'fairuz'
    }
}

// cara baru
const dataSapi = sapi?.nama.country
console.log(dataSapi)



// cara lama 
// dataSapi = sapi.nama.country
// let say;
// if(sapi.nama !== undefined && sapi.nama !== null){
//     say = sapi.nama.country
// }
// console.log(say)
