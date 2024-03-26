// Soal 1 ( Membuat Function dengan return String )
console.log("***Soal 1***");
function cetakFunction() { return "Hallo Nama saya Bobi Agus Saputro" }
console.log(cetakFunction());

// Soal 2 ( Membuat Function dengan rumus penjumlahan didalamnya)
console.log("***Soal 2***");
function myFunction(angka1, angka2) {
    return angka1 + angka2
}

let angka1 = 20
let angka2 = 7
let output = myFunction(angka1, angka2)
console.log(output);

// Soal 3 ( Mengubah dalam bentuk arrow function )
console.log("***Soal 3***");
const Hello = () => {
    return "Hello"
}
console.log(Hello());

// soal 4 ( Memanggil key dalam sebuah object )
console.log("***Soal 4***");
let obj = {
    nama : "john",
    umur : 22,
    bahasa : "indonesia"
}
console.log(obj.bahasa);

// soal 5 ( mengubah array menjadi object )
console.log("***Soal 5***");
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
let objDaftarPeserta = {
    nama: arrayDaftarPeserta[0],
    "jenis kelamin": arrayDaftarPeserta[1],
    hobi: arrayDaftarPeserta[2],
    "tahun lahir": arrayDaftarPeserta[3]
}
console.log(objDaftarPeserta);

// soal 6( Membuat sebuah array of object dan melakukan filter )
console.log("***Soal 6***");
const fruits = [
    {
        nama: "Nanas",
        warna: "Kuning",
        adaBijinya: false,
        harga: 9000,
    },
    {
        nama: "Jeruk",
        warna: "Orange",
        adaBijinya: true,
        harga: 8000,
    },
    {
        nama: "Semangka",
        warna: "Hijau & Merah",
        adaBijinya: true,
        harga: 10000,
    },
    {
        nama: "Pisang",
        warna: "Kuning",
        adaBijinya: false,
        harga: 5000,
    },
]
const filterBuah = fruits.filter(item => {
    return !item.adaBijinya
})
console.log(filterBuah);

// Soal 7 ( Destructuring pada Object ) 
console.log("***Soal 7***");
let phone = {
    name: "Galaxy Fold 5",
    brand: "Samsung",
    year: 2023
}

const {name, brand, year} = phone

console.log(name, brand, year) 

// soal 8 ( Spred Operator pada Object )
console.log("***Soal 8***");

let dataBukuTambahan= {
    penulis: "john doe",
    tahunTerbit: 2020 
}

let buku = {
    nama: "pemograman dasar",
    jumlahHalaman: 172
}

let objOutput = {...dataBukuTambahan, ...buku}

console.log(objOutput) 

// soal 9 ( Penggunaan Function dan Object )
console.log("***Soal 9***");

let mobil = {
    merk : "bmw",
    color: "red",
    year : 2002
}

const functionObject = (param) => {
    return param
}

console.log(functionObject(mobil));
