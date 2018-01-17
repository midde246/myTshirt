// JavaScript Document
$(document).ready(function(){

//alert($(window).height());
//alert($(document).height());
//alert($(window).width());
//alert($(document).width());
/*****************************************************************************
			For Product Popup
*****************************************************************************/
$('.product-container').css('display','none');
$('#product-pop').click(function(){
	$('.product-container').fadeIn(300).css('display','block');
});
$('.product-close-buton').click(function(){
	$('.product-container').css('display','none');
});
/*****************************************************************************
			For Product Popup Sub
*****************************************************************************/
$('.product-sub-container').css('display','none');
$('.product-button-container').click(function(){
	$('.product-container').css('display','none');
	$('.product-sub-container').fadeIn(0).css('display','block');
});
$('.product-close-buton').click(function(){
	$('.product-sub-container').css('display','none');
});
/*****************************************************************************
			For Product Popup Sub Back
*****************************************************************************/
$('.product-sub-container').css('display','none');
$('.product-back-buton').click(function(){
	$('.product-sub-container').css('display','none');
	$('.product-container').fadeIn(0).css('display','block');
});
/*****************************************************************************
			For Image Popup Back
*****************************************************************************/
$('.image-sub-container').css('display','none');
$('#image-pop').click(function(){
	$('.image-sub-container').fadeIn(300).css('display','block');
});
$('.product-close-buton').click(function(){
	$('.image-sub-container').css('display','none');
});
/*****************************************************************************
			For Toggle Back
*****************************************************************************/
$('#product-pop').click(function(){
	$('.product-container').fadeIn(300).css('display','block');
	$('.image-sub-container').fadeOut(900);
});
$('#image-pop').click(function(){
	$('.image-sub-container').fadeIn(300).css('display','block');
	$('.product-container').fadeOut(900);
});
/*****************************************************************************
			For Image Upload
*****************************************************************************/
$('#img-up').click(function(){
	$('#img-but').click();
});
/*****************************************************************************
			For Product Popup Sub Menu
*****************************************************************************/
$('.men-list').slideUp(0);
$('.men').click(function(){
	$('.men-list').slideToggle();
});
$('.women-list').slideUp(0);
$('.women').click(function(){
	$('.women-list').slideToggle();
});
/*****************************************************************************
			For Text Filter Tab Top
*****************************************************************************/
$('.help-details .help-list-tab-mater:not(:eq(0))').hide();
$('.tools-body-left-slider-right-tabhead ul li').click(function(e) {
	$('.tools-body-left-slider-right-tabhead ul li a').removeClass('active');
	$(this).children('a').addClass('active');
   	$('.help-details .help-list-tab-mater').hide();
	$('.help-details .help-list-tab-mater:eq('+$(this).index()+')').show();
});
/*****************************************************************************
			For Text Filter Tab Bot
*****************************************************************************/
$('.drop-down .help-list-tab-mater:not(:eq(0))').hide();
$('.tools-body-left-slider-right-tabhead-B ul li').click(function(e) {
	$('.tools-body-left-slider-right-tabhead-B ul li a').removeClass('active');
	$(this).children('a').addClass('active');
   	$('.drop-down .help-list-tab-mater').hide();
	$('.drop-down .help-list-tab-mater:eq('+$(this).index()+')').show();
});
/*****************************************************************************
			New 05-09-2013
*****************************************************************************/
/*****************************************************************************
			For Slider Arow
*****************************************************************************/
$('.tools-body-left-slider-right').click(function() {
	$('.slider-open-close').toggleClass('slider-open-arow');
});
/*****************************************************************************
			For Language
*****************************************************************************/
$('#LanguageSwitcher').polyglotLanguageSwitcher({
	effect: 'slide',
	testMode: true,
});
/*****************************************************************************

*****************************************************************************/
});