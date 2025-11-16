//şifre kontrol sistemi
let dogruSifre = "1234";
let girilenSifre = "";
let denemeSayisi = 0;

while (girilenSifre !== dogruSifre && denemeSayisi < 3) 
    {
    girilenSifre = prompt("Şifrenizi giriniz:");
    denemeSayisi++;
    if (girilenSifre !== dogruSifre) 
    {
        alert("Hatalı şifre! Kalan deneme hakkı: " + (3 - denemeSayisi));
    }
}
if (girilenSifre === dogruSifre) 
{
    alert("Giriş başarılı! Hoş geldiniz...");
} 
else 
{
    alert("Hesabınız bloke oldu!");
}
