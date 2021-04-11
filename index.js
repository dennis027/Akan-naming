function naming(){

  var CC=parseInt(document.getElementById("main").value);
  var YY=parseInt(document.getElementById("name").value);
  var MM=parseInt(document.getElementById("Form").value);
  var DD=parseInt(document.getElementById("akan").value);

  var day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Sartuday"];
  var femaleNames=["Akosua", "Adwoa","Abenaa","Akua","Yaa"," Afua","Ama"];
  var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
 
  if(CC.value =="" || YY.value =="" || MM.value =="" || DD.value ==""){
      alert("No blank values allowed");
  }

  var gender = document.querySelector('input[name="gender"]:checked').value;
  var  dayOfTheWeek = parseInt( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;
 
}