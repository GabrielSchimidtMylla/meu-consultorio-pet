//<!--INICIANDO ANIMAÇÕES-->
new WOW().init();

$(function() {
  $(window).on("scroll", function() {
    if($(window).scrollTop() > 100) {
      $(".nav-pet").addClass("menuScroll");
    } else {
      $(".nav-pet").removeClass("menuScroll");
    }
  });
});
$(".fa-bars").click(function(){
  if($(this).hasClass("fa-bars")){
    $(this).removeClass("fa-bars");
    $(this).addClass("fa-times");
  }else{
    $(this).addClass("fa-bars");
  }
})