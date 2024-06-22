$(document).ready(function () {
    $("#btn").click(function (e) {
      e.preventDefault();
      var nilai = $("#diskon").val();
      var persentase = $("#kami").val();
      var pot_diskon = nilai * persentase;
      var hasil = nilai - pot_diskon;
  
      alert(hasil);
    });
  });
  
 