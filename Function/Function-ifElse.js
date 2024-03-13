function temukanPw(Pw){
    if( Pw == "fairuz"){
        //console.log("maasuk") ada inputan di bawahnya undefined kareana nampilinnya console.log()
        return "massuk"
    }else{
        return "blm massuk cik"
    }
}
let pw1 = temukanPw("salsa")
console.log(pw1)



function tebakUmur(umur){
    if(umur >= 20 && umur <= 25){
        return ` anda sudah hampir tua`
    }else if(umur >= 30 && umur <= 40){
        return ` bapak bapak cik`
    }else if (umur >= 40 && umur <= 60){
        return ` njir kakek kakek`
    }
}
let umur = tebakUmur(40)
console.log(umur)


function Nanya(bubur){
    if(bubur == "diaduk"){
        return " agak laen"
    }else if(bubur == " gak di aduk"){
        return " okehh"
    }else{
        return "isi sat"
    }
}
let bubur = Nanya("diaduk")
console.log(bubur)