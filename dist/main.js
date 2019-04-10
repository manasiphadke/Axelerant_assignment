'use strict';

(function global() {
	jQuery(document).ready(function () {

		/************ testimonials mobile slider *********/
		jQuery('.testimonials__slider').slick({
			infinite: true,
			speed: 300,
			slidesToShow: 3,
			autoplay: true,
			responsive: [{
				breakpoint: 640,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}, {
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
		});
		/*****************************/
		jQuery('.mob-menu').click(function () {
			jQuery('.nav').slideToggle();
		});
	});
})();