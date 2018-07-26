$(function(){
// $(document).ready(function(){
	$(".menu ul li:nth-child(2) a").on('click',function( event ){
event.preventDefault();  //* ngăn cẳn khong cho chyaj dúng mặc định của nó*/
$('body,html').animate({ scrollTop: $('.chapter2').offset().top+ -55 +"px"}, 1000);  /* ofset() lấy gia tri cua class theo ctop left*/
});
	$(".menu ul li:nth-child(3) a").on('click',function( event ){
		event.preventDefault();  
		$('body,html').animate({ scrollTop: $('.chapter3').offset().top}, 1000);
	});
	$(".menu ul li:nth-child(4) a").on('click',function( event ){
		event.preventDefault(); 
		$('body,html').animate({ scrollTop: $('.chapter4').offset().top}, 1000);
	});
	$(".menu ul li:nth-child(1) a").on('click',function( event ){
		event.preventDefault(); 
		$('body,html').animate({ scrollTop: $('.home').offset().top}, 1000);
	});
	$(window).scroll(function()
	{
		if ( $(this).scrollTop() > 500)
			{ $('.backtop').fadeIn('1000');
			// $('.backtop').animate({opacity:'1',right:"15px"},);
			 }
		else 
			{ $('.backtop').fadeOut(); }
		// if ( $(this).scrollTop() > 390)
		// 	{ $('.backtop').addClass('backtophien') }
		// else 
		// 	{ $('.backtop').removeClass('backtophien');  }
	});
	$('.backtop').click(function(){
		$('body,html').animate({ scrollTop: 0}, 1000);
	});

  $('.menu ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
});
});
// function getPhoneFromAPI(id){
//     $.ajax({
//     method: "POST",
//             url: 'http://45.124.95.164:8022/api/contact/get_source_3g',
//             data: {'id' : id}
//     }).success(function (data){
//         if(data.length > 0){
//             $('#phone').val(data);
//             //$('#div_phone').addClass("hidden");
//         }
//     });
// }
$(function(){
	$('.btn').click(function(){
		$(this).css({'transform':'scale(1.3)','background':'green'});
	$('.cangiua').animate({opacity:1,marginLeft:-100});
	$('.cangiua').animate({opacity:1,marginLeft:0});
});
});