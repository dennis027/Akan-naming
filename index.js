
var akan = function(y, m, d, g) {
  var maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  
  var d = new Date(y, --m, d);
  if (g === "Male") {
      return d && maleNames[d.getDay()];
  } else {
      return d && femaleNames[d.getDay()];
  }
}


$(document).ready(function() {
  $("form#form").submit(function(event) {
      event.preventDefault();
      var y = parseInt($("#yy").val());
      var m = parseInt($("#mm").val());
      var d = parseInt($("#dd").val());
      var g = $("input:radio[name=gender]:checked").val();
      var result = akan(y, m, d, g);
      alert("Your akan name is: " + result);
      
      document.getElementById("form").reset();
  });
});