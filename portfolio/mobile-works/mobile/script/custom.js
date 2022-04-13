$(function(){
  $('.mypage-include-header').load('../include/mypage-header.html');
  $('.include-header').load('../include/header.html');
  $('.include-footer').load('../include/footer.html', function(){
    /* -- footer trigger -- */
    $('.trigger, .close, .overlay, .trigger-content a').click(function(){
      $('.trigger-inner, .overlay').toggleClass('active')
    })
    /* -- footer trigger acodian -- */
    $('.trigger-title').click(function(){
      $(this).addClass('active')
      $(this).parent().siblings().children('.trigger-title').removeClass('active')

      $(this).next().slideDown()
      $(this).parent().siblings().children('.trigger-content').slideUp()
    })
  });
  

  /* -- index.html : welcome slickslide -- */
  $('.welcome-photo').slick({
    dots: true,
    infinite: true,
    speed: 600,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false
  });

  /* -- index.html : capsule slickslide -- */
  $('.capsule-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });

  /* -- index.html event slickslide -- */
  $('.event-item').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1
  });
  
    /* -- index.html : best slickslide -- */
  $('.contents').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth : true
  });

   /* -- products.html products-photo slickslide -- */
   $('.products-photo').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  /* -- products.html products-buy -- */
  $('.buy button').click(function(){
    $('.order, .order-overlay').toggleClass('active')
  })
  $('.buy .like').click(function(){
    $('i').toggleClass('active')
  })
  
});
