let angka1, operatorAritmatika, angka2, hasil;

document.getElementById("button-merge").onclick = function (){
    angka1 = document.getElementById("angka1").value;
    operatorAritmatika = document.getElementById("operatorAritmatika").value;
    angka2 = document.getElementById("angka2").value;
    
   hasil = (angka1 + operatorAritmatika + angka2);
   console.log(eval(hasil));
   document.getElementById("hasil").textContent = eval(hasil);

}