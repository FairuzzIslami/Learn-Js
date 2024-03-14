//Dalam fungsi Player yang diperbaiki ini, return digunakan untuk mengembalikan objek pemain yang baru dibuat dengan properti name, age, dan club 
//sesuai dengan argumen yang diberikan saat memanggil fungsi Player

function Player(name,age,club){
    return {
        name : "fairuzz",
        age : 12,
        club : "Barcelona"    // input ke atas (mengembalikan nilai ke atas)
    },
    {
        name : "Havertz",
        age : 24,
        club : "Arsenal"
    },
    {
        name : "Salah",
        age : 30,
        club : "pool"
    }
}

let fairuz = Player("fairuz",12,"Barcelona")
let Havertz = Player("Havertz",24,"Arsenal")
let Salah = Player("Salah",30,"pool")

console.log(fairuz.age)
console.log(fairuz.club)
console.log(Havertz.club)