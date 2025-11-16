// Bir online sepet indirimi programın başında, kullanıcıdan bir girdi alma aracı ile 
// işleme tabi tutulacak fiyat değeri alınır. İndirim mekanizması, fonksiyon ifadesi 
// yöntemiyle isimsiz bir fonksiyon olarak tanımlanır ve bir sabit değere atanır. 
// Bu fonksiyon, aldığı orijinal değer ve indirim yüzdesi üzerinden hesaplama yaparak 
// nihai sonuç değerini return eder. Ardından, tanımlanan bu fonksiyon, alınan kullanıcı 
// fiyatı ve sabit bir indirim oranı (%25) ile çağrılır. Fonksiyonun döndürdüğü sonucu, 
// bir çıktı değişkenine atanır 
// ve son olarak, hesaplanan indirimli tutarı kullanıcıya gösteren kod bloğunu yazınız?

let urunFiyati=Number(prompt("Ürün Fiyatı Giriniz"));
const indirimliFiyatiHesapla = function(orijinalFiyat, indirimYuzdesi) 
{
  // Yüzdeyi ondalık sayıya çeviriyoruz (Örn: 10 -> 0.10)
  const indirimMiktari = orijinalFiyat * (indirimYuzdesi / 100);
  const nihaiFiyat = orijinalFiyat - indirimMiktari;
  
  // Hesaplanan nihai fiyatı döndür
  return nihaiFiyat;
};

// Fonksiyonu tanımladıktan sonra kullanıyoruz
let kazancim = indirimliFiyatiHesapla(urunFiyati, 25);

document.writeln(`Ürünün %25 indirimle: ${kazancim} TL`);
