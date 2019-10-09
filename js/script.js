$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items: 1,
  	loop: true,
  	autoplay: true,
  	autoplayTimeout: 2000
  });

  $(".nav__menu-btn").on('click', function() {
  	let target = $(this).data("target");
  	$(target).toggleClass("nav__list-open")
  });
});
