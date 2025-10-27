// Gülçin, ehliyet almak isteyen kullanıcılar için bir kontrol sistemi tasarlıyor. 
// Sistem, kullanıcının 18 yaşından büyük olması ve 2000 TL'den fazla bütçesi olması durumunda 
// ehliyet sınavına girebileceğini, aksi takdirde giremeyeceğini belirten bir karar mekanizması kuruyor. 
// Kullanıcılar yaşını ve bütçesini kendisinin girebileceği bir alan ve karar mekanizmasını oluşturan 
// kod bloğunu yazınız?

let yas=Number(prompt("Yaşınız: "));
let butce=Number(prompt("Bütçe: "));
if(yas>18 && butce>2000)
{
    alert("Ehliyet sınavına girebilirsiniz.");
}
else
{
    alert("Ehliyet sınavına GİREMEZSİNİZ");
}
