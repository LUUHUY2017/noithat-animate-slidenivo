$(document).ready(function(){
	$('.tdkhoi').click(function(){
		$(this).toggleClass('xanh');
	});

});
$(document).ready(function(){
	$('.noidungkhoi').slideUp();
    $('.tdkhoi').click(function(){
			$(this).next().slideToggle();
		});
		

























//code phong to anh

$(".fancybox").fancybox();

});

/*owl-carousel
//	<div id="vaicaianh" class="vaicaianh owl-carousel owl-theme ">
//next:<div class=" viewed_prev"><span class="glyphicon glyphicon-cog"></span></div>
//<div class=" viewed_next"><span class="glyphicon glyphicon-cog"></span></div>*/
$(document).ready(function(){
	var vaicaianh= $('#vaicaianh');
	vaicaianh.owlCarousel({
		items:4,
		loop:true,
		margin:10,
		autoplay:true,
		rows:2,
		autoplayTimeout:1500,
		autoplayHoverPause:true,
nav:false,//2 cai nay lma mat ddi dieu huong duoi
dots:false,//2 cai nay lma mat ddi dieu huong duoi
//phan duoibo dicung duoc
// responsive:
// {
// 	0:{items:1},
// 	575:{items:2},
// 	768:{items:3},
// 	991:{items:4},
// 	1199:{items:5}
// }
});

if($('.viewed_prev').length)  // kiem tra doi dai lon 0
{
	var prev = $('.viewed_prev');
	prev.on('click', function()
	{
		vaicaianh.trigger('prev.owl.carousel');
	});
}

if($('.viewed_next').length)
{
	var next = $('.viewed_next');
	next.on('click', function()
	{
		vaicaianh.trigger('next.owl.carousel');
	});
}
});

