/**Method: 1**/
$(document).on('click', 'a[href^="#"]', function(e) {
var id = $(this).attr('href');
var $id = $(id);
if ($id.length === 0) {
return;
}
e.preventDefault();
var pos = $id.offset().top-85;
$('body, html').animate({scrollTop: pos});
});

/**Method: 2**/
$('a[href^="#"]').click(function(e) {
   $('html,body').animate({ scrollTop: $(this.hash).offset().top}, 1000);
    return false;
    e.preventDefault();
    });
