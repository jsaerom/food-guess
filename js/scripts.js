$(function() {
  $(".clickable1").click(function(){
    $("#peru-food").toggle();
    $("#peru-guess").toggle();
  });

  $(".clickable2").click(function(){
    $("#peru-origin").toggle();
    $("#peru-flag").toggle();
  });

  $(".clickable3").click(function(){
    $("#korea-food").toggle();
    $("#korea-guess").toggle();
  });

  $(".clickable4").click(function(){
    $("#korea-origin").toggle();
    $("#korea-flag").toggle();
  });
  
});
