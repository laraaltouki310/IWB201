$(document).ready(function() {
  $(".toggle").click(function() {
    $(this).closest("tr").next(".details").toggle();
    $(this).text(function(i, text){
      return text === "اظهار" ? "اخفاء" : "اظهار";
    });
  });
});