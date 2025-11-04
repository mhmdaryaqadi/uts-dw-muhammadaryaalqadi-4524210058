console.log("Berhasil Connect ke file UTS");

const inputNamaProduk = document.querySelector("#product-name");
const judulPratinjau = document.querySelector("#preview-name");

console.log("Elemen input nama:", inputNamaProduk);
console.log("Elemen target judul:", judulPratinjau);

inputNamaProduk.addEventListener("input", function(){
    console.log("Pengguna mengetik nama produk");
});

inputNamaProduk.addEventListener("input", function(){
    const teksInputan = inputNamaProduk.value;
    if(teksInputan === ""){
        judulPratinjau.textContent = "-- Nama Produk --";
    } else {
        judulPratinjau.textContent = teksInputan;
    }
});

const inputHarga = document.querySelector("#product-price");
const hargaPratinjau = document.querySelector("#preview-price");

console.log("Elemen input harga:", inputHarga);
console.log("Elemen target harga:", hargaPratinjau);

inputHarga.addEventListener("input", function(){
    console.log("Pengguna mengetik harga");
});

inputHarga.addEventListener("input", function(){
    const teksInputan = inputHarga.value;
    if(teksInputan === ""){
        hargaPratinjau.textContent = "Rp 0";
    } else {
        const hargaJadiRupiah = Number(teksInputan).toLocaleString('id-ID');
        hargaPratinjau.textContent = `Rp ${hargaJadiRupiah}`;
    }
});

const inputRating = document.querySelector("#product-rating");
const ratingMeter = document.querySelector("#preview-rating");
const ratingText = document.querySelector("#preview-rating-text");

console.log("Elemen input rating:", inputRating);
console.log("Elemen target meter:", ratingMeter);
console.log("Elemen target teks rating:", ratingText);


inputRating.addEventListener('input', function() {
    const nilaiRating = inputRating.value;
    
    ratingMeter.setAttribute('value', nilaiRating);
    
    let teksRating = "";
    switch(nilaiRating) {
        case "1": teksRating = "(Bintang 1)"; break;
        case "2": teksRating = "(Bintang 2)"; break;
        case "3": teksRating = "(Bintang 3)"; break;
        case "4": teksRating = "(Bintang 4)"; break;
        case "5": teksRating = "(Bintang 5)"; break;
    }
    
    ratingText.textContent = teksRating;
});

const inputDeskripsi = document.querySelector("#product-desc");
const deskripsiPratinjau = document.querySelector("#preview-desc");

console.log("Elemen input deskripsi:", inputDeskripsi);
console.log("Elemen target deskripsi:", deskripsiPratinjau);

inputDeskripsi.addEventListener("input", function(){
    const teksInputan = inputDeskripsi.value;
    if(teksInputan === ""){
        deskripsiPratinjau.textContent = "Deskripsi produknya bakal muncul di sini.";
    } else {
        deskripsiPratinjau.textContent = teksInputan;
    }
});