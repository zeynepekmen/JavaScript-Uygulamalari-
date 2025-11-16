// Fonksiyon Bildirimi (Function Declaration)örneği
// function anahtar kelimesi ile fonksiyonu başlatıyoruz.
// Fonksiyona bir isim (selamVer) veriyoruz.
// Parantez içinde bir parametre (isim) beklediğini belirtiyoruz.
function selamVer(isim) {
  // Fonksiyon gövdesi: Yapılacak işlem buradadır.
  const mesaj = "Hoş geldiniz, " + isim + "!";
  
  // İşlem sonucunu çağırıldığı yere geri döndürüyoruz.
  return mesaj;
}

// Fonksiyonu çağırma ve sonucunu bir değişkene atama
let selamlama = selamVer("Çisem");

// Sonucu ekrana yazdırma
document.writeln("<u>Fonksiyon Bildirimi (Function Declaration) Örneği</u><br><br>");
document.writeln(selamlama+"<br><br>"); 


// Fonksiyon ifadesi (function expression) örneği
// Fonksiyonu bir değişkene (carpmaIslemi) değer olarak atıyoruz.
// Fonksiyonun bir adı yoktur, anonim (isimsiz) bir fonksiyondur.
// const anahtar kelimesi ile tanımlandığı için Hoisting özelliği yoktur.

const carpmaIslemi = function(sayi1, sayi2) {
  // Fonksiyon gövdesi
  const sonuc = sayi1 * sayi2;
  
  // İşlem sonucunu çağırıldığı yere geri döndürüyoruz.
  return sonuc;
};

// Fonksiyonu, değişken adını kullanarak çağırıyoruz.
let hesapSonucu = carpmaIslemi(7, 3);

// Sonucu ekrana yazdırma
document.writeln("<u>Fonksiyon İfadesi (Function Expression) Örneği</u><br><br>");
document.writeln("İşlem Sonucu: " + hesapSonucu+"<br><br>"); // Çıktı: 21



// Ok Fonksiyonları (Arrow Functions) Örneği
// Fonksiyonu bir değişkene (farkAl) atıyoruz.
// Parametreleri parantez içinde belirtiyoruz.
// Ok işareti (=>) kullanıyoruz.
// Tek bir ifade olduğu için süslü parantez ve 'return' kullanmıyoruz.

const farkAl = (sayi1, sayi2) => sayi1 - sayi2; 

// Fonksiyonu çağırma
let sonuc = farkAl(25, 10);

// Sonucu ekrana yazdırma
document.writeln("<u>Ok Fonksiyonları (Arrow Functions) Örneği</u><br><br>");
document.writeln("İşlem Sonucu:"+sonuc); // Çıktı: 15
