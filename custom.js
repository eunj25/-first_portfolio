$(function(){

  $(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('header, nav, .gototop').addClass('active')
    }
    else {
      $('header, nav, .gototop').removeClass('active')
    }
  })

  $('.trigger').click(function(){
    $('.trigger, .gnb ,body').toggleClass('active')
  })
  $('.gnb ul li a').click(function(){
    $('.trigger, .gnb ,body').removeClass('active')
  })

   /* -- section : website slickslider -- */ 
  $('.web-content').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  /* -- section : practical slickslider -- */ 
  $('.website-btns label').click(function() {
    $('.tab-items').resize(); // 팝업 열때 슬라이드 깨짐 방지
    $('.tab-items').slick('refresh'); // 팝업 열때 슬라이드 깨짐 방지
  })
  /* Slick Slider */
  $('.tab-items').slick({
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    setPosition: 0,
    variableWidth : true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  /* -- section : graphic slickslider -- */ 
  $('.graphic-slide').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  

});