//latihan #1
let namaDepan, namaBelakang, namaLengkap;

document.getElementById("button-merge").onclick = function (){
    namaDepan = document.getElementById("nama_depan").value;
    namaBelakang = document.getElementById("nama_belakang").value;
    namaLengkap = (namaDepan) + (namaBelakang);
    console.log(total);

    document.getElementById("nama_lengkap").textContent = namaLengkap;
}
    
