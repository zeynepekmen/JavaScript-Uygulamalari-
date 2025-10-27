//Bir güvenlik sistemi, kullanıcıdan kullanıcı adı ve şifre bilgilerini istiyor ve 
// girilen değerleri "admin" kullanıcı adı ile "1234" şifresiyle karşılaştırıyor. 
// Eğer her iki bilgi de doğruysa giriş başarılı mesajı vererek sisteme erişim sağlıyor, 
// aksi takdirde hatalı giriş bildirimi yaparak erişimi reddeden kod bloğunu yazınız?

let kullaniciAdi=prompt("Kullanıcı Adını Giriniz: ");
let sifre=prompt("Şfrenizi Giriniz: ");
if(kullaniciAdi=="admin" && sifre=="1234")
{
    alert("Giriş Başarılı");
}
else
{
    alert("Giriş Başarısız");
}
