$(document).ready(function(){
	function Tinhtoan(){
		ketqua.value = nhap1.value*nhap2.value ;
	}
	$('.tdkhoi').click(function(){
		$(this).toggleClass('xanh');
	});
});
$(document).ready(function(){
	$('.noidungkhoi').slideUp();
	$('.tdkhoi').click(function(){
		$(this).next().slideToggle();
	});
});