//latihan #1
let angkaDepan, angkaBelakang, total;

document.getElementById("button-merge").onclick = function (){
    angkaDepan = document.getElementById("angka1").value;
    angkaBelakang = document.getElementById("angka2").value;
    total = parseInt(angkaDepan) + parseInt(angkaBelakang);
    console.log(total);

    document.getElementById("nama_lengkap").textContent = "hello world";
}
    
