$(function(){
  $('.btn-gnavi').on('click',function(){
    var rightVal = 0;
    if($(this).hasClass('hb-open')){
      rightVal = -300;
      $(this).removeClass('hb-open');
    }else{
      $(this).addClass('hb-open');
    }
				
  $('#global-nav a[href]').on('click', function(event) {
        $('.btn-gnavi').trigger('click');
    });
				
    $('#global-nav').stop().animate({
      right: rightVal
    }, 500);
  });
});