// string
let dataStr="ini data string";
console.log(dataStr);

//1. escaping string
let data1 = 'kimmy berkata "aku cinta kamu "';
console.log(data1);
//kasus ke2
let data2 = "kimmy berkata \"aku cinta kamu\"";
console.log(data2);
//kasus ke3
let data3 = "kimmy berkata \n\"aku cinta kamu\"";
console.log(data3);

//string dengan char khusus (t, r, n)
let data4 = "kimmy berkata \t\"aku cinta kamu\"";
console.log(data4);

//2. literal string
let namaDepan="kimmy";
let namaBelakang="victoria";
let umur = 7;
let namaLengkap = namaDepan + " " + namaBelakang + " " + umur;
console.log(namaLengkap);
console.log(typeof namaLengkap);
console.log("\n");
// kasus di atas adalah maslah, karna number di anggap string tanpa inisialisasi

//solusi
let biodata = `${namaDepan} ${namaBelakang} dengan umur ${umur}`;
console.log(biodata);
console.log(typeof biodata);


