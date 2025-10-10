//alert uyarı mesajı verir.
//alert("Merhaba Zeynep");

//prompt kullanıcıdan bilgi alıyor
/*let isim=prompt("İsminizi Giriniz");
console.log("isminiz: "+isim);
let soyisim=prompt("Soyisminizi Giriniz");
console.log("soyisminiz: "+soyisim);*/

//confirm kutucuğu 
//let sonuc=confirm("Silmek istediğinizden emin misiniz?");

Swal.fire({
  title: "Custom width, padding, color, background.",
  width: 600,
  padding: "3em",
  color: "#716add",
  background: "#fff url(/images/trees.png)",
  backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `
});
