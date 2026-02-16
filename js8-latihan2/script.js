let angka1, angka2, hasil;

document.getElementById("button-merge").onclick= function (){
    angka1 = document.getElementById("angka1").value;
    angka2 = document.getElementById("angka2").value;
    hasil = parseFloat(angka1) * parseFloat(angka2);


    document.getElementById("nama_lengkap").textContent = hasil;
}
