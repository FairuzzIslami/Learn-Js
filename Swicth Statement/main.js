 //switch sama seperti if/else 
//kondisi nya gak terlalu bnyka  di gunakan seperti pengecekan kelas atau tanggal lahir dll 
//dan kondisi switch di gunakan hanya untuk melalkukan per bandingan '==', yg simple2 aja
// case == if 
// deafult == else
// break == memberhentikan case nya yang telah terjadi
// jika tidak di break maka yang dia akan melanjutkanya di case bawahnya
let nama = "fairuz"
let kelamin = "cowok"
    switch (kelamin) {
        case "cewek":
            console.log(`hallo ${nama} pasti kamu cewek kan cihuy`);
        break
        case "cowok":
            console.log(`hallo ${nama} pasti kamu cowok kan yaelah`)
            break
        default: //  seperti elsenya di if
        console.log(`hallo ${nama} lo gak punya kelamin? `)
        }