window.writeValues = function(form) {
    var name = form.name.value;
    var position = form.position.value;
    var department = form.department.value;
    var adress = form.adress.value;
    var number = form.number.value;
    var email = form.email.value;
   
    document.getElementById('first').innerHTML =  "Dziękuję i pozdrawiam" + '<br><span style="color:#004e8f; font-weight:bold">' + name + "</span>" + '<br><span style="color:#808080">' + position + '</span><br><br><span style="color:#004e8f">' + number + '</span>';
    document.getElementById('email-txt').innerHTML = '<a href="mailto:' + email + '" style="color:#004e8f">' + email + "</a>"  + '<br><br>' + photo.value + "<br><br>" + '<span style="color:#004080; font-weight:bold">' + "Unum Życie TUiR S.A.</span><br>" + '<span style="color:#6e90a6">' + department + "<br>" + adress + '</span><br>';
    document.getElementById('page').innerHTML =  '<a href="https://www.unum.pl" style="color:#004e8f">www.unum.pl</a><br>';
    document.getElementById('company-data').innerHTML =  "Unum Życie TUiR S.A., al. Jana Pawła II 17, 00-854 Warszawa, Spółka wpisana do rejestru przedsiębiorców w Sądzie Rejonowym dla m.st. Warszawy, XIII Wydział Gospodarczy Krajowego Rejestru Sądowego, KRS 0000008906, NIP 526-22-62-838, REGON 013281575, kapitał zakładowy 60 000 000,00 zł w całości opłacony.<br>";
    document.getElementById('rodo-data').innerHTML =  "Niniejsza wiadomość elektroniczna przeznaczona jest wyłącznie dla osób lub podmiotów, do których jest zaadresowana. Wgląd w treść wiadomości otrzymanej omyłkowo, dalsze jej rozpowszechnianie, innego rodzaju wykorzystanie lub podjęcie jakichkolwiek działań w oparciu o zawarte w niej informacje przez osoby lub podmioty niebędące jej adresatem, jest niedozwolone.<br>";
    document.getElementById('eco').innerHTML =  "Chrońmy wspólnie środowisko i nie drukujmy tej wiadomości, jeśli nie jest to konieczne.";
  }

  if(photo.value = "online"){
    document.forms[0].elements[6].options[0].value='<a href="http://www.fundacjaunum.pl/">' + '<img src="https://www.unum.pl/wp-content/uploads/2022/03/online.jpg" style="width: 500px;">' + '</a>';
  } 

  if(photo.value = "fundacja"){
    document.forms[0].elements[6].options[1].value='<a href="http://www.fundacjaunum.pl/">' + '<img src="https://www.unum.pl/wp-content/uploads/2022/03/Fundacja_Unum_Banners_2500x600_s1.png" style="width: 500px;">' + '</a>';
  } 

  function CopyToClipboard(containerid) {
  var range = document.createRange();
  range.selectNode(containerid); //changed here
  window.getSelection().removeAllRanges(); 
  window.getSelection().addRange(range); 
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("Podpis został skopiowany");
}

var generateBtn = document.getElementById("generatebutton");
var copyBtn = document.getElementById("copyButton");

generateBtn.addEventListener("click", function(){
  generateBtn.classList.add("clicked");
  if (generateBtn.classList == "btn clicked"){
    copyBtn.classList.add("show")
  }
})
