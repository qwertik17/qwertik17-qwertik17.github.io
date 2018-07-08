jQuery(document).ready(function($) {
	$("input[type=tel]").mask("+7(999) 999-99-99");
	

	
	var swiper = new Swiper('.sec-gallery .swiper-container', {
		slidesPerView: 3,
		spaceBetween: 44,
		scrollbar: {
			el: '.swiper-scrollbar',
			hide: false,
			draggable: true
		},
		breakpoints: {
			960: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			500: {
				slidesPerView: 1,
			}
		}
	});

	$('.menu-button').on('click', function(){
		$(this).toggleClass('menu-open');
		$('.header .top-nav').slideToggle(400);
	});

	$('.scroll-down').on('click', function(){
		$('html,body').animate({scrollTop: $('html,body').height()+'px'},2000);
	});
	$('.scroll-top').on('click', function(){
		$('html,body').animate({scrollTop: 0 + 'px'},2000);
	});

});



