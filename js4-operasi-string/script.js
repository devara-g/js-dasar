// operasi string
let datastr = "abcdefg";
let dataChar = datastr.charAt(0);
console.log( `ini adalah char dari index 0 dari ${datastr} adalah ${dataChar}`);
dataChar = datastr.charAt(1);
console.log( `ini adalah char dari index 0 dari ${datastr} adalah ${dataChar}`);
dataChar = datastr.charAt(2);
console.log( `ini adalah char dari index 0 dari ${datastr} adalah ${dataChar}`);
dataChar = datastr.charAt(3);
console.log( `ini adalah char dari index 0 dari ${datastr} adalah ${dataChar}`);
dataChar = datastr.charAt(4);
console.log( `ini adalah char dari index 0 dari ${datastr} adalah ${dataChar}`);
dataChar = datastr.charAt(5);
console.log( `ini adalah char dari index 0 dari ${datastr} adalah ${dataChar}`);
dataChar = datastr.charAt(6);
console.log( `ini adalah char dari index 0 dari ${datastr} adalah ${dataChar}`);
console.log(typeof dataChar);

//2. menyambung string
let namaDepan= "victoria";
let namaBelakang = "kimberly";

let namaLengkap = namaDepan.concat(" ", namaBelakang ," anjay");
console.log(namaLengkap);

//mengambil index
console.log(namaLengkap.indexOf('y'));
console.log(namaLengkap.lastIndexOf('y'));

// mengambil substring

console.log(namaLengkap.substring(0, 8));

//slice
console.log(namaLengkap.slice(0, 8));
console.log(namaLengkap.slice(0, 8));

//replace
 namaLengkap =namaLengkap.replace("victoria", "kimmy");
console.log(namaLengkap);

// ekstraksi data number
let dataString2 = "123456789";
let dataNumber = parseInt(dataString2);
console.log(dataNumber);
console.log(typeof dataNumber);

//ekstrak ke float
let dataString3 = "123456789.123";
let dataNumber2 = parseFloat(dataString3);
console.log(dataNumber2);
console.log(typeof dataNumber2);