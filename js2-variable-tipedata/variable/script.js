// variable
let nama = "inicontohlet";

//tampilkan data
console.log(nama);

// ubah nilai dari variable
nama = "inimengubahvariabellet";
console.log(nama);

//1. variabel dengan var
var namaDepan = "inicontohvar";
console.log(namaDepan);
namaDepan = "inimengubahvariabelvar";
console.log(namaDepan);

//2. variabel dengan let
let namaTengah = "inicontohlet";
namaTengah = "inimengubahvariabellet";
console.log(namaTengah);

//2.a.kelakuan let dan var
let namaBelakang = "inicontohkelakuanlet";
{
    let namaBelakang = "inikelakuanletdalamblock";
    console.log(namaBelakang);
}
console.log(namaBelakang);
// kesimpulan dari let adalah block scope, yang artinya let hanya berlaku di dalam block

//2.kelakuan dari var
var namaDepan = "inicontohkelakuanvar"; 
{
    var namaDepan = "inikelakuanvardalamblock";
    console.log(namaDepan);
}
console.log(namaDepan);

//khasus khusus tanpa keyword var / lwt variable di hitung sebgai var
//ini adalah khasus khusus
makanan = "combro";
{
    makanan = "soto";
}
console.log(makanan);
// kesimpulan dari var adalah function scope, yang artinya var hanya berlaku di dalam function

//3. variable dengan const
const TTL = "inicontohconst";
console.log(TTL);
TTL = "inimengubahvariabelconst";
console.log(TTL);
// kesimpulan dari const adalah block scope, yang artinya const hanya berlaku di dalam block dan tidak bisa diubah



