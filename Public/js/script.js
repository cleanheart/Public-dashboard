$(function(){
  //wow js
  new WOW().init();
  
   //header sticky
   $(window).on("scroll", function () {
    var scrollBarPosition = $(this).scrollTop();

    if (scrollBarPosition > 150) {
      $(".header-top-wrapper").addClass("sticky");
    } else {
      $(".header-top-wrapper").removeClass("sticky");
    }
  });

 
});