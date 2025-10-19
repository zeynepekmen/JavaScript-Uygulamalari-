  // sayi1 15 değerinde sayi2 17 değerinde manuel olarak toplama, çıkarma, çarpma, bölme, mod alma, üs alma, 
    // aşağıya yuvarlama, yukarı yuvarlama ve yakına yuvarlama  işlemlerini uygulayınız.

    let sayi1=17;
    let sayi2=15;
    let toplam= sayi1+sayi2;
    let cikar=sayi1-sayi2;
    let carpma=sayi1*sayi2;
    let bol=sayi1/sayi2;
    let mod=sayi1%sayi2;
    let usAlma=sayi1**sayi2;
    document.writeln(
      "<h3> BASİT HESAP MAKİNESİ</h3><br>",
      "<b>Birinci Sayı: 17<br> İkinci Sayı: 15<br></b>",
        "Toplama işlemi sonucu: ", toplam, "<br>",
        "Çıkarma işlemi sonucu: ",cikar, "<br>",
        "Çarpma İşlemi Sonucu: ",carpma, "<br>",
        "Bölme işlemi sonucu: ",bol, "<br>",
        "Mod alma işlemi sonucu: ",mod, "<br>",
    "Üs alma işlemi sonucu: ",usAlma, "<br>",
    "Aşağıya yuvarlama işlemi sonucu: ", Math.floor(sayi1), "<br>",
    "Yukarı yuvarlama işlemi sonucu: ", Math.ceil(sayi1), "<br>",
    "Yakına yuvarlama işlemi sonucu: ", Math.round(sayi1), "<br>",

);
