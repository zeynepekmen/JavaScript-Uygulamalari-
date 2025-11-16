//Günlük Kitap Okuma Takip Uygulaması
let gunlukSayfa = 25;
let toplamSayfa = 0;
let kitapSayfasi = 300;

document.writeln("<u>Kitap Okuma İlerlemesi:</u><br>");
for (let i = 1; toplamSayfa < kitapSayfasi; i++) 
{
    toplamSayfa += gunlukSayfa;
    if (toplamSayfa > kitapSayfasi) 
    { 
        toplamSayfa = kitapSayfasi;
    }
    document.writeln(i + ". gün: " + toplamSayfa + ". sayfa<br>");
}
