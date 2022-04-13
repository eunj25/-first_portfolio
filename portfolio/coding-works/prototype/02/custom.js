$(function(){
  /* 방식1 */
  /* $('.program-item').mouseenter(function(){
    $(this).children('.item-desc').show()
  })
  $('.program-item').mouseleave(function(){
    $(this).children('.item-desc').hide()
  }) */
  /* 방식2 */
  /* $('.program-item').mouseenter(function(){
    $(this).children('.item-desc').fadeIn()
  })
  $('.program-item').mouseleave(function(){
    $(this).children('.item-desc').fadeOut()
  }) */
  /* 방식3 */
  $('.program-item').mouseenter(function(){
    $(this).children('.item-desc').stop().slideDown()
  })
  $('.program-item').mouseleave(function(){
    $(this).children('.item-desc').stop().slideUp()
  })
})
