$(function(){
  /* slick slider */
  $('.slideshow').slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  /* scroll header change */
  $(window).scroll(function(){
    if($(window).scrollTop() > 200) {
      // 조건이 참 일때 실행구문
      $('header').addClass('active')
    }
    else {
      // 조건이 거짓일때 실행구문
      $('header').removeClass('active')
    }
  })

  /* header toggle nav */
  $('.toggle').click(function(){
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
  })
  $('.gnb a').click(function(){
    $('.gnb').removeClass('active')
    $('.toggle').toggleClass('active')
  })


  /* footer : sitemap */
  $('.fnb-title').click(function(){
    $(this).addClass('active')
    $(this).parent().siblings().children('.fnb-title').removeClass('active')

    $(this).next().slideDown()
    $(this).parent().siblings().children('.fnb-content').slideUp()

  })
})