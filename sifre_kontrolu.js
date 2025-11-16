// FONKSİYON TANIMLAMA
function sifreKontrolEt(hamSifre) {
  
  if (hamSifre === null || hamSifre.trim() === "") {
    alert("Girdi alınmadı veya boş bırakıldı.");
    return false;
  }
  
  // GİRDİ VE TEMİZLEME
  let temizSifre = hamSifre.trim();
  document.writeln(`Kontrol Edilen Şifre: "${temizSifre}"`+"<br>");

  if (temizSifre.length < 8) {
    document.writeln("Başarısız: Şifreniz en az 8 karakter olmalıdır."+"<br>");
    return false; 
  }

  else if(!temizSifre.includes("!")) {
    document.writeln("Başarısız: Şifreniz '!' özel karakterini içermelidir."+"<br>");
    return false; 
  }

  document.writeln("Başarılı: Şifreniz kurallara uygundur."+"<br>");
  return true;
}

let kullaniciGirdisi = prompt("Lütfen şifre adayınızı giriniz:");

let sonuc = sifreKontrolEt(kullaniciGirdisi);

document.writeln(`İşlem Sonucu (true/false): ${sonuc}`);
