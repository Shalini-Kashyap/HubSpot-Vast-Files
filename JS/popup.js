 $('.pop-button a').click(function(){
    $(this).parent().next().addClass('open-popup').show();
    $('body').addClass('show-popup');
  });
  $('.popup_box_outer_wrapper .close-btn a').click(function(){
    $(this).parent().parent().parent().removeClass('open-popup').hide();
    $('body').removeClass('show-popup');
  });
  
$(document).on('click touch', function(event) {
  if (!$(event.target).parents().addBack().is('.pop-button')) {
    $('.popup_box_outer_wrapper').hide();
  }
});
