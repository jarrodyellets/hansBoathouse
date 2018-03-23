$(document).ready(function(){

//Nav Bar animation
	$(window).scroll(function() {
		$(".title").css("opacity", 1 - $(window).scrollTop() / 250);
	  if ($(document).scrollTop() > 50) {
	    $('.navbar-brand').addClass('shrinkBrand');
	    $('.link').addClass('shrinkMenu');
	    $('.navbar').addClass('darkBackground');
	  } else {
	    $('.navbar-brand').removeClass('shrinkBrand');
	    $('.link').removeClass('shrinkMenu');
	    $('.navbar').removeClass('darkBackground');
	  }
	});

	$(".navbar-toggle").click(function(){
		if ($(document).scrollTop() < 50) {
			$(".navbar").toggleClass("darkBackground");
		}
	})

//Auto Scroll
	$('#n-home').click(function(){
			scroll_to(".contain");
	})
	$('#n-about').click(function(){
      scroll_to(".about");
    });
	$('#n-menu').click(function(){
      scroll_to(".menu");
    });
	$('#n-contact').click(function(){
      scroll_to(".contact")
    });
	$('#n-press').click(function(){
      scroll_to(".press")
    });

	function scroll_to(div){
	  $('html, body').animate({
	    scrollTop: $(div).offset().top
	    }, 500);
}

})