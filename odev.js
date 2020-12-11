/*
  Odev 1:
  Asagidaki fonksiyonu "Hello, John ciktisi verecek sekilde duzenleyiniz."
 */

var person = {
    name: "John",
    message: function () {    
      console.log("Hello, " + this.name)
    }
  }
  
  var messageFunc = person.message
  messageFunc.call(person);

/*  
  Odev 2:
  Asagidaki fonksiyonu sirasiyla 
  20
  40
  60
  sonuclarini yazdiracak sekilde duzenleyiniz.
*/
var numbers = {
    numbers: [[10,20,30], 2],
    multiply: function(){
      this.numbers[0].map(function(number, numberIndex){
          const result = number * this.numbers[1];
          console.log(result)
      }.bind(this))
    }
  };
  
  numbers.multiply();

/* 
  Odev 3:
  Asagidaki isValidName fonksiyonunda bir isim validasyonu yaziniz.
  Ipucu: Verilen arguman gecerli bir isim ise true degilse false donmeli
  Ornek : isValidName("John") true donmeli
  Ornek : isValidName(" J ohn") false donmeli
*/
function isValidName(name) {
    
  if (typeof name!='string') { return false; }
      
  if (name.length <=1) { return false; }
      
  if (!isNaN(name)) { return false; }
      
  var validname = name.trim().split(' ');

  for (var i = 0 ; i < validname.length; i++) {
  if(validname[i].length === 1 ) 
  {return false;}}
  
  return true;
  
  }


/*
  Odev 4:
  Asagidaki katilimSaati fonksionu 2 arguman almaktadir.
  dersSayisi: ogrencinin katildigi ders sayisi
  dersSaati: her bir dersin dakika cinsinden suresi
  katilimSaati fonkisyonu kac derse gerilidigi ve her bir dersin kac dakika surdugu bilgisini alip sonuc olarak toplamda kac dakika derse girildigini donmelidir.
  - iki arguman de number veya string olarak verilebilir.
  - Sayi olmayan ya da sayiya cevrilemeyen argumanlar var ise hata donulmelidir.
  Ornek: katilimSaati(3, 30) 90 sonucunu vermelidir.
  Ornek: katilimSaati("3", 20) 60 sonucunu vermelidir.
  Ornek: katilimSaati("5", "30") 150 sonucunu vermelidir.
*/
function katilimSaati(dersSayisi, dersSuresi){
  
  if (typeof dersSayisi==='boolean' || typeof dersSuresi==='boolean' || dersSayisi===null || dersSuresi===null)
  {return false;}
  
  if (typeof dersSayisi==='undefined'|| typeof dersSuresi==='undefined'|| dersSayisi===('') || dersSuresi===('')) 
  {return false;}
  
  let convert1=Number(dersSayisi);
  let convert2=Number(dersSuresi);
  
  if (isNaN(convert1) || isNaN(convert2) || !isFinite(convert1) || !isFinite(convert2)) {return false;}

  return convert1 * convert2 ; 
}

