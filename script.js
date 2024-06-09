$(function(){
  $('.open_sp_nav').on('click', function(){
    $('.sp_nav_container').css("display", "block");
  })
  $('.close_sp_nav').on('click', function(){
    $('.sp_nav_container').css("display", "none");
  })
  $('.sp_nav_item > a').on('click', function(){
    $('.sp_nav_container').css("display", "none");
  })
});