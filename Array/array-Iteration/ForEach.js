//array for each dan map di gunakan pada saat loping di array
// mirip seperti pemamnggilan array looping tetapi for each
// menggunakan function untuk index nya

let arrayForEach = ['fairuz','aqila','islami']

//before
for(let i = 0; i < arrayForEach.length; i++){  
    console.log(`aku index ke ${i} bernama ${arrayForEach[i]}`)
}

// sama seperti array di before cuma beda di parameter penyebutannya

// after
console.log(arrayForEach.forEach(function(e,i){ 
    // parameter 1 menyebutkan isi index nya  = 'fairuz'
    //parameter 2 menyembutkan no index nya = 0
    console.log(`nama saya adalah ${e} dan saya index ke ${i}`)
    return e
}))


