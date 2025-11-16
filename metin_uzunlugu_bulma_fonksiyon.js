// Fonksiyon Tanımlama (Ok Fonksiyonu - Implicit Return)
const metinUzunluguBul = metin => metin.length; 

// Kullanıcı Girdisi Alma
let cumle = prompt("Lütfen bir cümle giriniz:");

// Metin 'null' (Kullanıcı iptal ettiyse) veya boş dize ('') ise kontrol ediyoruz.
if (cumle === null || cumle.trim() === "") {
  document.writeln("Lütfen geçerli bir metin giriniz.");
  
} 
else {

  // trim() fonksiyonu ile metin başındaki ve sonundaki boşlukları temizledik.
  let uzunluk = metinUzunluguBul(cumle.trim());

  document.writeln(`Girdiğiniz metin ${uzunluk} karakterden oluşmaktadır.`);
}
