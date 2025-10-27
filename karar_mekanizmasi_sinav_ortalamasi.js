//Bir öğrenci, üç sınav notunu girerek ders ortalamasını hesaplayan bir sistem kullanıyor. 
// Sistem, birinci sınavın %20'sini, ikinci sınavın %30'unu ve üçüncü sınavın %50'sini alarak ağırlıklı 
// ortalamayı hesaplıyor. Eğer ortalama 60'ın üzerindeyse öğrenciyi dersten geçtiği konusunda tebrik ediyor, 
// 60'ın altındaysa dersten kaldığını bildiren kod bloğunu yazınız?


let sinav1=Number(prompt("1.sınav notunu giriniz"));
let sinav2=Number(prompt("2.sınav notunu giriniz"));
let sinav3=Number(prompt("3.sınav notunu giriniz"));
let ortalama=(((sinav1*20)/100)+((sinav2*30)/100)+((sinav3*50)/100));
alert("Ortalamanız: "+ortalama);
if(ortalama>60)
{
    alert("Dersten geçtiniz");
}
else
{
    alert("Dersten kaldınız");
    
}
