$(function(){
// $('.dangnhap').animate({opacity:0,marginLeft:-100});
// $('.dangky').animate({opacity:0,marginLeft:-100});
$('.nutso2').click(function(e){
	e.preventDefault();
	$('.dangnhap').animate({opacity:0,marginLeft:-100});
	$('.dangky').animate({opacity:1,marginLeft:0});
});
$('.nutso1').click(function(e){
	e.preventDefault();
	$('.dangky').animate({opacity:0,marginLeft:-100});
	$('.dangnhap').animate({opacity:1,marginLeft:0});
});


});
