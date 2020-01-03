<script>

$(function(){

/**Responsive Navigation**/
$('.custom-menu-primary').addClass('js-enabled');
$('.custom-menu-primary .hs-menu-wrapper').before('<div class="mobile-trigger cta_border_button"><span></span><span></span><span></span></div>');
$('.custom-menu-primary .flyouts .hs-item-has-children > a').after(' <div class="child-trigger"><i></i></div>');
$('.mobile-trigger').click(function() {
$(this).next('.custom-menu-primary .hs-menu-wrapper').slideToggle(250);
$('body').toggleClass('mobile-open');
$('.child-trigger').removeClass('child-open');
$('.hs-menu-children-wrapper').slideUp(250);
return false;
});
$('.child-trigger').click(function() {
$(this).parent().siblings('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
$(this).parent().siblings('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
$(this).next('.hs-menu-children-wrapper').slideToggle(250);
$(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
$(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
$(this).toggleClass('child-open');
return false;
});


/***Accordion***/
var $accordion = $('.accordion');
$accordion.find('.accordion_content').hide();
$accordion.find('.accordion_group.expanded .accordion_content').show();
$accordion.find('.accordion_header').click(function(){
$accordion.find(".accordion_header").not(this).parent(".accordion_group.expanded").removeClass('expanded').children('.accordion_content').stop(true,true).slideUp();
if(!$(this).parent('.accordion_group').hasClass('expanded'))
{
$(this).parent(".accordion_group").addClass('expanded').children('.accordion_content').stop(true,true).slideDown();
}
else
{
$(this).parent(".accordion_group").removeClass('expanded').children('.accordion_content').stop(true,true).slideUp();
}
});


/**Banner Image**/
var bannerSRC = $(".background-image").find("img").attr("src");
$("#banner-background-image").css('background-image', 'url(' + bannerSRC + ')');


/**Back To Top**/
var $backToTop = $(".back-to-top");
$backToTop.hide();
$(window).scroll(function() {
if ($(this).scrollTop()>50) 
{
$backToTop.fadeIn();
} 
else 
{
$backToTop.fadeOut();
}
});
$backToTop.find("a").click(function(e) {
e.preventDefault();
$("html, body").animate({scrollTop: 0}, 500);
});


/**Small Header On Page Scroll**/
$(window).scroll(function(){
var $body = $("body");
var windowScrollTop = $(window).scrollTop();
var secondRowOffset = $(".body-container .row-fluid-wrapper:nth-child(1)").offset();
if(secondRowOffset && windowScrollTop > secondRowOffset.top){
$body.addClass("small-header");
}
else {
$body.removeClass("small-header");
}
});


/**Tabber**/
$(".tab-pane").not(".active").hide();
$('.tabber-content .tab-pane').each(function(i, el){
$(el).attr("id", "tab-" + i);
});
$(".tabber-tabs a").each(function(i, el){
$(el).attr("href", "#tab-" + i);
var ID = $(el).attr("href");
$(this).click(function(e){
e.preventDefault();
if(!$(this).parent().hasClass("active")){
$(this).parent().addClass("active").siblings().removeClass("active");
$(ID).fadeIn().siblings().hide();
}
});
});


/**Close Sidebar on mobile Trigger**/
const $menu = $('.mobile-trigger');
$(document).on("click", function(e){
if( 
$(e.target).closest("div.hs-menu-wrapper").length == 0 &&$("div.hs-menu-wrapper").hasClass("is-active") &&$(e.target).closest(".mobile-trigger").length == 0)
{
$('div.hs-menu-wrapper').toggleClass('is-active');
}
});
$('.mobile-trigger').on('click', () => {
$menu.next().toggleClass('is-active');
});


/**Popup**/
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

});

</script>
