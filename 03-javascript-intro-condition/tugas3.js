// soal 1 ( Latihan Membuat variable dan valuenya )
let namaLengkap = 'Bobi Agus Saputro';
console.log(namaLengkap);

// soal 2 ( Latihan Penggabungan variable )
let word = 'JavaScript'; 
let second = 'is'; 
let third = 'awesome'; 

let outputGabunganVariable = word +' '+ second +' '+ third;
console.log(outputGabunganVariable)

// soal 3 ( Latihan penggabungan variable Menggunakan Template Literals)
let hello = 'Hello '; 
let world = 'World!!'; 

let output = `${hello} ${world}`;
console.log(output);

// soal 4 ( Latihan Mengubah tipe data )
let panjangPersegiPanjang = parseInt("8");
let lebarPersegiPanjang = parseInt("5");
let kelilingPersegiPanjang = 2 * ( panjangPersegiPanjang + lebarPersegiPanjang );

console.log(kelilingPersegiPanjang)

// soal 5 ( Latihan Mengurai Kalimat )
let sentences= 'wah javascript itu keren sekali'; 

let firstWords= sentences.substring(0, 3); 
let secondWords = sentences.substring(4, 14);
let thirdWords = sentences.substring(15, 18);
let fourthWords = sentences.substring(19, 24);
let fifthWords = sentences.substring(25);

console.log('Kata Pertama: ' + firstWords); 
console.log('Kata Kedua: ' + secondWords); 
console.log('Kata Ketiga: ' + thirdWords); 
console.log('Kata Keempat: ' + fourthWords); 
console.log('Kata Kelima: ' + fifthWords);

// soal 6 (Akses karakter dalam string),
var sentence = "I am going to be React JS Developer"; 

var exampleFirstWord = sentence[0];
var exampleSecondWord = sentence[2] + sentence[3];
var thirdWord = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9];
var fourthWord = sentence[11] + sentence[12];
var fifthWord = sentence[14] + sentence[15]
var sixthWord = sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21]
var seventhWord = sentence[23] + sentence[24]
var eighthWord = sentence[26] + sentence[27] + sentence[28] + sentence[29] + sentence[30] + sentence[31] + sentence[32] + sentence[33] + sentence[34];

console.log('First Word: ' + exampleFirstWord); 
console.log('Second Word: ' + exampleSecondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord);

// soal 7 ( Latihan Mengambil sebuah Kalimat )
let txt = "I can eat bananas all day";
let hasil = txt.slice(10, 17);

console.log(hasil);

// soal 8 ( membuat kondisi sederhana )
var nilaiDoe = 50;
var grade;

if (nilaiDoe >= 80) {
	grade = 'A';
} else if (nilaiDoe >= 70 && nilaiDoe < 80) {
	grade = 'B';
} else if (nilaiDoe >= 60 && nilaiDoe < 70) {
	grade = 'C';
} else if (nilaiDoe >= 50 && nilaiDoe < 60) {
	grade = 'D';
} else {
	grade = 'E';
}

console.log(grade)

// soal 9 ( conditional tipe tenary operator )
let angka = 2

angka === 2 ? console.log("angka nya 2") : console.log("bukan angka 2")

// soal 10 ( conditional tipe Switch Case )
var traffic_lights = "red";
var result;

switch (traffic_lights) {
	case "red":
		result = "berhenti";
		break;
	case "yellow":
		result = "hati-hati";
		break;
	case "green":
		result = "berjalan";
		break;
	default:
		result = '[red, yellow, green]';
		break;
}

console.log(result);