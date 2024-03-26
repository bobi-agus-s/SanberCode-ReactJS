// soal 1 ( Membuat Looping sederhana )
console.log('***jawaban soal 1***');
for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('***jawaban soal 2***');
// soal 2 ( Membuat Looping dengan conditional angka ganjil )
for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log('***jawaban soal 3***');
// soal 3 ( Membuat Looping dengan conditional angka genap )
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log('***jawaban soal 4***');
// soal 4 ( Mengakses element array )
let array1 = [1,2,3,4,5,6];
console.log(array1[5]);

console.log('***jawaban soal 5***');
// soal 5 ( Mengurutkan element array )
let array2 = [5,2,4,1,3,5]
console.log(array2.sort());

console.log('***jawaban soal 6***');
// Soal 6 ( Mengeluarkan element array )
let array3 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"]
array3.forEach(item => {
    console.log(item);
});

console.log('***jawaban soal 7***');
// Soal 7 ( Mengeluarkan element array dan dengan kondisi )
let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array4.forEach(item => {
    if (item % 2 === 0) console.log(item);
});

console.log('***jawaban soal 8***');
// Soal 8 ( menggabungkan element menjadi string )
let kalimat= ["saya", "sangat", "senang", "belajar", "javascript"];
console.log(kalimat.join(" "));

console.log('***jawaban soal 9***');
// soal 9 ( Menambahkan element array )
var sayuran=[];
sayuran.push('Kangkung');
sayuran.push('Bayam');
sayuran.push('Buncis');
sayuran.push('Kubis');
sayuran.push('Timun');
sayuran.push('Seledri');
sayuran.push('Tauge');

console.log(sayuran);