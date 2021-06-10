$ (function(){
  let pageTop = $('#page-top');
  pageTop.hide();
  $ (window).scroll(function () {
    if ($(this).scrollTop() > 80) {
      pageTop.fadeIn(300);
    } else {
      pageTop.fadeOut(300);
    }
  });
  pageTop.click(function () {
    $('body, html').animate({ scrollTop: 0}, 500);
    return false;
  });

  $('.menu-btn').on('click', function(){
    $('.menu').toggleClass('is-active');
  });


  $(".menu_item a").on("click", function() {
    $(".menu").removeClass("is-active");
  });

  
  

})

