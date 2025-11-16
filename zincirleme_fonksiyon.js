// 1. FONKSİYON 1: Temizleme
const trimle = (metin) => { return metin.trim(); };

// 2. FONKSİYON 2: Büyük Harf Çevirme
const buyukHarfYap = (metin) => { return metin.toUpperCase(); };

// 3. FONKSİYON 3: Çıktı Formatlama
const formatla = (metin) => { return `İşlenmiş Veri: ${metin}`;};

// Kullanıcıdan boşluklu girdi al
let kullaniciGirdisi = prompt("Lütfen başında ve sonunda boşluk olan bir metin giriniz.");

  // ZİNCİRLEME ÇAĞRI: En içteki fonksiyonun sonucu dışarıdaki fonksiyona parametre olur.
  // 1. Önce trimle(kullaniciGirdisi) çalışır.
  // 2. Sonra buyukHarfYap(temizlenmiş_metin) çalışır.
  // 3. Son olarak formatla(büyük_metin) çalışır ve nihai sonucu verir.
  
  const nihaiSonuc = formatla(buyukHarfYap(trimle(kullaniciGirdisi)));
  document.writeln(nihaiSonuc);
