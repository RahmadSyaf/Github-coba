// event pada saat link diklik
$('.page-scroll').on('click', function(e){
	// console.log('oke');
	// ambil is href
	var tujuan=$(this).attr('href');
	// console.log(href);
	// tangkap elemen ybs
	var elemenTujuan =  $(tujuan);
	// console.log(elemenTujuan.offset().top);

	// console.log($('body').scrollTop());

	// Pindahkan Scroll

	// $('html, body').scrollTop('700');

	// $('html, body').scrollTop(elemenTujuan.offset().top);

	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top -50
	}, 1000, 'easeInOutExpo');
	

	e.preventDefault();
}); 

// http://gsgd.co.uk/sandbox/jquery/easing/