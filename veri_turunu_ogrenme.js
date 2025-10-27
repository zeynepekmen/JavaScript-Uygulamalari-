//Veri Türünü Öğrenme
let adi="İrem";
let soyadi="Deneme";
let sifre=123456;
let durumu=true;
let email="iyasar@gelisim.edu.tr";
let ekbilgi=null;


document.writeln("<h3><u>Kayıt Bilgisi Öğrenme</u></h3>","<br>",
                "Adı:  ", `${adi}`," - ", typeof(adi),"<br>",
                "Soyadı: ", `${soyadi}`, " - ", typeof(soyadi),"<br>",
                "Şifre: ", `${sifre}`," - ", typeof(sifre),"<br>",
                "Kayıt Durumu: ",`${durumu}`," - ", typeof(durumu),"<br>",
                "E-mail Adresi: ",`${email}`, " - ", typeof(email),"<br>",
                "Ek Bilgi: ",`${ekbilgi}`," - ", typeof(ekbilgi));
