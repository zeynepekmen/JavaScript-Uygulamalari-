
// ADIM 1: document.getElementById() ile yakalama
// Yalnızca ID ile çalışır, ID'si 'ana-baslik' olan <h1>'i yakalar.
let baslik = document.getElementById('ana-baslik');
console.log('1. ID ile yakalanan element:', baslik+"<br>"); 
baslik.style.color = 'red';

// ADIM 2: document.querySelector() ile yakalama
// CSS seçicisi olarak sınıf (.bilgi-metni) kullanıyoruz.
// Birden fazla eşleşme olsa bile, SADECE İLKİNİ döndürür.
let ilkParagraf = document.querySelector('.bilgi-metni');
console.log('2. querySelector ile yakalanan element:', ilkParagraf+"<br>");
ilkParagraf.style.backgroundColor = 'yellow';

// ADIM 3: Etiket (Tag) Adı ile Yakalama (Alternatif olarak kullanılabilir)
// document.querySelector() ile de etiket yakalanabilir, ancak 
// bu örnekte document.getElementsByTagName('a') veya 
// document.querySelector('a') kullanılabilir. querySelector'ı tercih edelim.
let link = document.querySelector('a');
console.log('3. Etiket adı ile yakalanan element (<a>):', link+"<br>");
link.style.paddingLeft = '60px';

// ADIM 4: document.querySelectorAll() ile Toplu Yakalama
// Sınıfı 'liste-maddesi' olan TÜM <li> elementlerini liste olarak yakalar.
let listeMaddeleri = document.querySelectorAll('.liste-maddesi');
console.log('4. querySelectorAll ile yakalanan liste (NodeList):', listeMaddeleri+"<br>");

// Kontrol: Liste olarak yakaladığımız elementin İKİNCİSİNİ değiştirelim
listeMaddeleri[1].textContent = "Madde 2 (Yakaladım ve Değiştirdim!)";

console.log("UYGULAMA BAŞARILI: Ekrana bakarak doğru elementleri yakaladığınızı teyit edebilirsiniz.");
